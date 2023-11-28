import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import randomstring from "randomstring";
import { useCallback, useEffect, useState } from "react";

import { H4, P } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import { GET_ALL_PARKING_LOTS } from "@apis";
import { FACEBOOK_BLUE, SECONDARY_100, WHATSAPP_GREEN, WHITE } from "@colors";
import { DisplayRazorpay } from "@common/DisplayRazorpay";

const EllipsisP = styled(P)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AvailableParkingSpots = ({ user, dashboardRightHeight }) => {
  const [parkingLots, setParkingLots] = useState(null);

  const fetchParkingLots = useCallback(() => {
    axios
      .get(GET_ALL_PARKING_LOTS + `?email=${user?.email}`)
      .then((response) => {
        setParkingLots(response?.data?.reverse());
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
  }, [user]);

  useEffect(() => {
    fetchParkingLots(); // Initial fetch
  }, [fetchParkingLots, user]);

  const handleBooking = ({ parkingLot, user }) => {
    const { price, parking_lot_id } = parkingLot;
    const { email, name, phone } = user;

    DisplayRazorpay({
      name,
      email,
      phone,
      price,
      parking_lot_id,
      handleSuccess: (successMessage) => {
        // Handle the success scenario
        fetchParkingLots();
        toast.success(successMessage);
      },
      handleError: (errorMessage) => {
        // Handle the error scenario
        toast.error(errorMessage);
      },
    });
  };

  return (
    <FlexBox
      gap="2rem"
      wrap="wrap"
      overflow="auto"
      position="relative"
      height={dashboardRightHeight + "px"}
    >
      {parkingLots?.map((parkingLot) => (
        <FlexBox
          gap="1rem"
          width="100%"
          radius="1rem"
          justify="center"
          maxWidth="350px"
          direction="column"
          margin="5px auto 0"
          height="fit-content"
          padding="1.5rem 2rem"
          key={randomstring.generate()}
          shadow={`0 0 4px 1px ${SECONDARY_100}`}
        >
          <FlexBox gap="1rem">
            <H4>Name:</H4>
            <EllipsisP>{parkingLot.name}</EllipsisP>
          </FlexBox>
          <FlexBox gap="1rem">
            <H4>State:</H4>
            <EllipsisP>{parkingLot.state}</EllipsisP>
          </FlexBox>
          <FlexBox gap="1rem">
            <H4>City:</H4>
            <EllipsisP>{parkingLot.city}</EllipsisP>
          </FlexBox>
          <FlexBox gap="1rem">
            <H4>Address:</H4>
            <EllipsisP>{parkingLot.address}</EllipsisP>
          </FlexBox>
          {!parkingLot?.booked_today && (
            <>
              <FlexBox gap="1rem">
                <H4>Price:</H4>
                <EllipsisP>Rs. {parkingLot.price}</EllipsisP>
              </FlexBox>
              <FlexBox gap="1rem">
                <H4>Available:</H4>
                <EllipsisP>
                  {parkingLot.total_capacity -
                    (parkingLot?.booked ? parkingLot?.booked : "0")}
                  /{parkingLot.total_capacity}
                </EllipsisP>
              </FlexBox>
            </>
          )}
          <FlexBox justify="flex-end">
            {parkingLot?.booked_today ? (
              <FlexBox
                radius="0.25rem"
                padding="0.5rem"
                textColor={WHITE}
                bgColor={WHATSAPP_GREEN}
              >
                Booking Confirm
              </FlexBox>
            ) : (
              <FlexBox
                cursor="pointer"
                radius="0.25rem"
                padding="0.5rem"
                textColor={WHITE}
                bgColor={FACEBOOK_BLUE}
                onClick={() => {
                  handleBooking({ parkingLot, user });
                }}
              >
                Book
              </FlexBox>
            )}
          </FlexBox>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default AvailableParkingSpots;
