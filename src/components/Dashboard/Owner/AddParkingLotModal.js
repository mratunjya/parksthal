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
import { POST_ADD_PARKING_LOT } from "@apis";
import { MediumButton } from "@common/Button";
import SearchFilterDropdown from "@common/SearchFilterDropdown";
import { CitiesByState, States } from "@meta/Dashboard/CountryStateCity";
import { WHITE, PRIMARY_500, SECONDARY_100, SECONDARY_500 } from "@colors";

const fadeIn = keyframes`
  from {
    width: 206px;
    min-height: 200px;
  }
  to {
    width: 100%;
    min-height: 500px;
  }
`;

const displayTiming = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled(FlexBox)`
  animation: ${fadeIn} 0.25s ease-in-out;

  > * {
    animation: ${displayTiming} 0.5s ease-in-out;
  }

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

const AddParkingLotModal = ({ user, setAddModal }) => {
  const [name, setName] = useState(null);
  const [cities, setCities] = useState(null);
  const [address, setAddress] = useState(null);
  const [country, setCountry] = useState("India");
  const [saveLoading, setSaveLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = (e) => {
    const payload = {
      email: user.email,
      name: name,
      country: country,
      state: selectedState.data,
      city: selectedCity.data,
      address: address,
    };

    setSaveLoading(true);

    axios
      .post(POST_ADD_PARKING_LOT, payload)
      .then((response) => {
        setAddModal(false);
        toast.success(response.data.success);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
      .finally(() => {
        setSaveLoading(false);
      });

    console.log("Save Payload:", payload);
  };

  useEffect(() => {
    setSelectedCity(null);
    setCities(CitiesByState[selectedState?.id]?.data);
  }, [selectedState]);

  return (
    <Wrapper
      flex="1"
      width="100%"
      radius="1rem"
      cursor="grab"
      padding="1rem"
      bgColor={WHITE}
      minHeight="500px"
      position="absolute"
      height="fit-content"
      shadow={`0 0 4px 1px ${SECONDARY_100}`}
    >
      <CloseButton
        onClick={() => setAddModal(false)}
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
            <input type="text" onChange={handleNameChange} />
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
                        <input type="text" onChange={handleAddressChange} />
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
