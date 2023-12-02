import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import randomstring from "randomstring";
import { useCallback, useEffect, useState } from "react";

import { H4, P } from "@common/Text";
import { SECONDARY_100 } from "@colors";
import { FlexBox } from "@common/FlexBox";
import PageLoader from "@common/PageLoader";
import { GET_BOOKING_HISTORY } from "@apis";

const EllipsisP = styled(P)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ParkingHistory = ({ user, dashboardRightHeight }) => {
  const [parkingLots, setParkingLots] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);

  const fetchBookings = useCallback(() => {
    setPageLoading(true);
    axios
      .get(GET_BOOKING_HISTORY + `?email=${user?.email}`)
      .then((response) => {
        setParkingLots(response?.data?.reverse());
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      })
      .finally(() => {
        setPageLoading(false);
      });
  }, [user]);

  useEffect(() => {
    fetchBookings(); // Initial fetch
  }, [fetchBookings, user]);

  function format12HourTime(dateTime) {
    const date = new Date(dateTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${addLeadingZero(minutes)}:${addLeadingZero(
      seconds
    )} ${ampm}`;
  }

  function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
  }

  return pageLoading ? (
    <PageLoader />
  ) : (
    <FlexBox
      gap="2rem"
      wrap="wrap"
      overflow="auto"
      gapMobile="1rem"
      heightMobile="100%"
      justifyMobile="center"
      height={dashboardRightHeight + "px"}
    >
      {parkingLots?.map((parkingLot) => (
        <FlexBox
          gap="1rem"
          width="100%"
          radius="1rem"
          justify="center"
          direction="column"
          height="fit-content"
          maxWidth="21.875rem"
          padding="1.5rem 2rem"
          marginMobile="0.3125rem"
          margin="0.3125rem auto 0"
          paddingMobile="1rem 1.5rem"
          key={randomstring.generate()}
          shadow={`0 0 0.25rem 0.0625rem ${SECONDARY_100}`}
        >
          <FlexBox gap="1rem">
            <H4>Name:</H4>
            <EllipsisP>{parkingLot.name}</EllipsisP>
          </FlexBox>
          <FlexBox gap="1rem">
            <H4>Status:</H4>
            <EllipsisP>{parkingLot.status}</EllipsisP>
          </FlexBox>
          <FlexBox gap="1rem">
            <H4>City:</H4>
            <EllipsisP>{parkingLot.city}</EllipsisP>
          </FlexBox>
          <FlexBox gap="1rem">
            <H4>Area:</H4>
            <EllipsisP>{parkingLot.address}</EllipsisP>
          </FlexBox>
          <FlexBox gap="1rem">
            <H4>Price:</H4>
            <EllipsisP>{parkingLot.price}</EllipsisP>
          </FlexBox>
          <FlexBox gap="1rem">
            <H4>Date:</H4>
            <EllipsisP>
              {new Date(parkingLot.created_at).getDate()}/
              {new Date(parkingLot.created_at).getMonth() + 1}/
              {new Date(parkingLot.created_at).getFullYear()}
            </EllipsisP>
          </FlexBox>
          <FlexBox gap="1rem">
            <H4>Time:</H4>
            <EllipsisP>{format12HourTime(parkingLot.created_at)}</EllipsisP>
          </FlexBox>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default ParkingHistory;
