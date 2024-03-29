import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import randomstring from "randomstring";
import { useCallback, useEffect, useRef, useState } from "react";

import { H4, P } from "@common/Text";
import { FlexBox } from "@common/FlexBox";
import PageLoader from "@common/PageLoader";
import CommonImage from "@common/CommonImage";
import AddParkingLotModal from "./AddParkingLotModal";
import { POST_DELETE_PARKING_LOT, POST_PARKING_LOTS } from "@apis";
import { ERROR_RED, SECONDARY_100, WHATSAPP_GREEN, WHITE } from "@colors";

const EllipsisP = styled(P)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ManageParkingLot = ({ user, dashboardRightHeight }) => {
  const manageParkingLotWrapperRef = useRef();
  const [loading, setLoading] = useState(true);
  const [modalLeft, setModalLeft] = useState(null);
  const [modalWidth, setModalWidth] = useState(null);
  const [parkingLots, setParkingLots] = useState(null);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editParkingLot, setEditParkingLot] = useState(null);

  useEffect(() => {
    setModalLeft(
      manageParkingLotWrapperRef?.current?.getBoundingClientRect()?.left
    );
    setModalWidth(manageParkingLotWrapperRef?.current?.offsetWidth);
  }, [
    manageParkingLotWrapperRef?.current?.offsetWidth,
    manageParkingLotWrapperRef,
  ]);

  const deleteParkingLot = (parking_lot_id) => {
    const payload = { parking_lot_id: parking_lot_id };

    axios
      .post(POST_DELETE_PARKING_LOT, payload)
      .then((response) => {
        fetchParkingLots(); // Now fetchParkingLots is accessible
        toast.success("Deleted Successfully");
        setParkingLots(response?.data?.reverse());
      })
      .catch((error) => {
        // toast.error(error.message);
        console.error(error);
      });
  };

  const fetchParkingLots = useCallback(() => {
    setLoading(true);
    const payload = { email: user.email };

    axios
      .post(POST_PARKING_LOTS, payload)
      .then((response) => {
        setParkingLots(response?.data?.reverse());
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  useEffect(() => {
    fetchParkingLots(); // Initial fetch
  }, [fetchParkingLots, user]);

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleOpenEditModal = (parkingLot) => {
    setOpenEditModal(true);
    setEditParkingLot(parkingLot);
  };

  useEffect(() => {
    !openAddModal && !openEditModal && fetchParkingLots();
  }, [fetchParkingLots, openAddModal, openEditModal]);

  return loading ? (
    <PageLoader />
  ) : (
    <>
      <FlexBox
        gap="2rem"
        wrap="wrap"
        overflow="auto"
        gapMobile="1rem"
        position="relative"
        heightMobile="100%"
        justifyMobile="center"
        id="manageParkingLotWrapperRef"
        ref={manageParkingLotWrapperRef}
        height={dashboardRightHeight + "px"}
      >
        {(openAddModal || openEditModal) && (
          <AddParkingLotModal
            user={user}
            modalLeft={modalLeft}
            modalWidth={modalWidth}
            editModal={openEditModal}
            parkingLot={editParkingLot}
            setOpenAddModal={setOpenAddModal}
            setOpenEditModal={setOpenEditModal}
            dashboardRightHeight={dashboardRightHeight}
          />
        )}
        <FlexBox
          onClick={handleOpenAddModal}
          gap="2rem"
          width="100%"
          radius="1rem"
          align="center"
          cursor="pointer"
          justify="center"
          direction="column"
          height="fit-content"
          maxWidth="15.625rem"
          padding="1.5rem 2rem"
          marginMobile="0.3125rem"
          margin="0.3125rem auto 0"
          paddingMobile="1rem 1.5rem"
          shadow={`0 0 0.25rem 0.0625rem ${SECONDARY_100}`}
        >
          <CommonImage
            width={100}
            height={100}
            alt="Add Image"
            src="/assets/dashboard/add.svg"
          />
          <H4>Add a Parking Lot</H4>
        </FlexBox>
        {parkingLots?.map((parkingLot) => {
          return (
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
              <FlexBox gap="1rem">
                <H4>Price:</H4>
                <EllipsisP>Rs. {parkingLot.price}</EllipsisP>
              </FlexBox>
              <FlexBox gap="1rem">
                <H4>Booked:</H4>
                <EllipsisP>
                  {parkingLot?.booked ? parkingLot?.booked : "0"}/
                  {parkingLot.total_capacity}
                </EllipsisP>
              </FlexBox>
              <FlexBox gap="1rem">
                <H4>Id:</H4>
                <P>{parkingLot.parking_lot_id}</P>
              </FlexBox>
              <FlexBox justify="space-between" padding="1rem 0 0">
                <FlexBox
                  padding="0.5rem"
                  radius="0.25rem"
                  cursor="pointer"
                  textColor={WHITE}
                  bgColor={WHATSAPP_GREEN}
                  onClick={() => {
                    handleOpenEditModal(parkingLot);
                  }}
                >
                  Edit
                </FlexBox>
                <FlexBox
                  cursor="pointer"
                  radius="0.25rem"
                  padding="0.5rem"
                  textColor={WHITE}
                  bgColor={ERROR_RED}
                  onClick={() => {
                    deleteParkingLot(parkingLot.parking_lot_id);
                  }}
                >
                  Delete
                </FlexBox>
              </FlexBox>
            </FlexBox>
          );
        })}
      </FlexBox>
    </>
  );
};

export default ManageParkingLot;
