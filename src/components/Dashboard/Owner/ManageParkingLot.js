import { useState } from "react";
import { H4 } from "@common/Text";
import { SECONDARY_100 } from "@colors";
import { FlexBox } from "@common/FlexBox";
import CommonImage from "@common/CommonImage";
import AddParkingLotModal from "./AddParkingLotModal";

const ManageParkingLot = ({ user }) => {
  const [openAddModal, setAddModal] = useState(false);

  const handleOpenModal = () => {
    setAddModal(true);
  };

  return (
    <FlexBox position="relative">
      {openAddModal && (
        <AddParkingLotModal user={user} setAddModal={setAddModal} />
      )}
      <FlexBox
        onClick={handleOpenModal}
        gap="2rem"
        radius="1rem"
        align="center"
        cursor="pointer"
        justify="center"
        direction="column"
        padding="1.5rem 2rem"
        shadow={`0 0 4px 1px ${SECONDARY_100}`}
      >
        <CommonImage
          width={100}
          height={100}
          alt="Add Image"
          src="/assets/dashboard/add.svg"
        />
        <H4>Add a Parking Lot</H4>
      </FlexBox>
    </FlexBox>
  );
};

export default ManageParkingLot;
