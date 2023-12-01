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
          maxWidth="350px"
          direction="column"
          marginMobile="5px"
          margin="5px auto 0"
          height="fit-content"
          padding="1.5rem 2rem"
          paddingMobile="1rem 1.5rem"
          key={randomstring.generate()}
          shadow={`0 0 4px 1px ${SECONDARY_100}`}
        >
          <FlexBox gap="1rem">
            <H4>Parking Space:</H4>
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
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default ParkingHistory;
