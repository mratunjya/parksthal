import "swiper/css";
import axios from "axios";
import "swiper/css/navigation";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import styled, { keyframes } from "styled-components";

import { H3 } from "@common/Text";
import { Loader } from "@common/Loader";
import { FlexBox } from "@common/FlexBox";
import { POST_ADD_PARKING_LOT, POST_UPDATE_PARKING_LOTS } from "@apis";
import { MediumButton } from "@common/Button";
import SearchFilterDropdown from "@common/SearchFilterDropdown";
import { CitiesByState, States } from "@meta/Dashboard/CountryStateCity";
import { WHITE, PRIMARY_500, SECONDARY_100, SECONDARY_500 } from "@colors";

const Wrapper = styled(FlexBox)`
  .swiper {
    width: 100%;
  }
`;

const CloseButton = styled(FlexBox)`
  &:hover {
    background-color: ${SECONDARY_500};
    & > svg {
      color: ${WHITE} !important;
    }
  }
`;

const AddParkingLotModal = ({
  user,
  editModal,
  parkingLot,
  setOpenAddModal,
  setOpenEditModal,
  dashboardRightHeight,
}) => {
  const [name, setName] = useState(null);
  const [cities, setCities] = useState(null);
  const [address, setAddress] = useState(null);
  const [country, setCountry] = useState("India");
  const [saveLoading, setSaveLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  console.log(parkingLot);

  useEffect(() => {
    if (editModal) {
      setName(parkingLot.name);
      setAddress(parkingLot.address);
    }
  }, [editModal, parkingLot]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = (e) => {
    let payload = {
      email: user.email,
      name: name,
      country: country,
      state: selectedState.data,
      city: selectedCity.data,
      address: address,
    };

    setSaveLoading(true);

    const api = (editModal && POST_UPDATE_PARKING_LOTS) || POST_ADD_PARKING_LOT;

    if (editModal) {
      payload = { ...payload, parking_lot_id: parkingLot.parking_lot_id };
    }

    console.log(api);
    console.log(payload, "payload");

    axios
      .post(api, payload)
      .then((response) => {
        setOpenAddModal(false);
        setOpenEditModal(false);
        toast.success(response.data.success);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
      .finally(() => {
        setSaveLoading(false);
      });
  };

  useEffect(() => {
    setSelectedCity(null);
    setCities(CitiesByState[selectedState?.id]?.data);
  }, [selectedState]);

  return (
    <Wrapper
      flex="1"
      margin="5px"
      radius="1rem"
      cursor="grab"
      padding="1rem"
      bgColor={WHITE}
      position="absolute"
      width="calc(100% - 10px)"
      shadow={`0 0 4px 1px ${SECONDARY_100}`}
      height={dashboardRightHeight - 10 + "px"}
      minHeight={dashboardRightHeight - 10 + "px"}
    >
      <CloseButton
        onClick={() => {
          setOpenAddModal(false);
          setOpenEditModal(false);
        }}
        zIndex="2"
        right="1rem"
        cursor="pointer"
        radius="0.5rem"
        padding="0.25rem"
        position="absolute"
      >
        <RxCross2 size={32} color={SECONDARY_500} />
      </CloseButton>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        spaceBetween={30}
        className="mySwiper"
        modules={[Navigation, Keyboard]}
      >
        <SwiperSlide>
          <FlexBox
            gap="1.5rem"
            height="100%"
            align="center"
            justify="center"
            direction="column"
          >
            <H3>Parking Space Name:</H3>
            <input type="text" onChange={handleNameChange} value={name} />
          </FlexBox>
        </SwiperSlide>
        {name && (
          <>
            <SwiperSlide>
              <FlexBox
                gap="1.5rem"
                height="100%"
                align="center"
                justify="center"
                direction="column"
              >
                <H3>Country</H3>
                <FlexBox
                  radius="1rem"
                  padding="1rem 2rem"
                  border={`1px solid ${PRIMARY_500}`}
                >
                  <H3>{country}</H3>
                </FlexBox>
              </FlexBox>
            </SwiperSlide>
            <SwiperSlide>
              <FlexBox
                gap="1.5rem"
                height="100%"
                align="center"
                justify="center"
                direction="column"
              >
                <H3>Enter State</H3>
                <SearchFilterDropdown
                  data={States}
                  selectedItem={selectedState}
                  setSelectedItem={setSelectedState}
                />
              </FlexBox>
            </SwiperSlide>
            {selectedState && (
              <>
                <SwiperSlide>
                  <FlexBox
                    gap="1.5rem"
                    height="100%"
                    align="center"
                    justify="center"
                    direction="column"
                  >
                    <H3>Enter City</H3>
                    <SearchFilterDropdown
                      data={cities}
                      selectedItem={selectedCity}
                      setSelectedItem={setSelectedCity}
                    />
                  </FlexBox>
                </SwiperSlide>
                {selectedCity && (
                  <>
                    <SwiperSlide>
                      <FlexBox
                        gap="1.5rem"
                        height="100%"
                        align="center"
                        justify="center"
                        direction="column"
                      >
                        <H3>Enter Area and Street</H3>
                        <input
                          type="text"
                          value={address}
                          onChange={handleAddressChange}
                        />
                        {address && (
                          <MediumButton onClick={handleSave}>
                            {saveLoading ? <Loader color={WHITE} /> : "Save"}
                          </MediumButton>
                        )}
                      </FlexBox>
                    </SwiperSlide>
                  </>
                )}
              </>
            )}
          </>
        )}
      </Swiper>
    </Wrapper>
  );
};

export default AddParkingLotModal;
