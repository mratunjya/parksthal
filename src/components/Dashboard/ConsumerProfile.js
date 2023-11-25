import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { WHITE } from "@colors";
import { SessionUser } from "@Auth";
import { Loader } from "@common/Loader";
import { FlexBox } from "@common/FlexBox";
import { H1, H3, H4 } from "@common/Text";
import { PUT_IS_ANY_MISSING_DETAILS_CONSUMER } from "@apis";
import { SmallButton, SmallSubmitButton } from "@common/Button";

const SubmitBtn = styled(SmallSubmitButton)`
  align-self: flex-end;
`;

const ConsumerProfile = () => {
  const user = SessionUser();
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [saveLoading, setSaveLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    if (data.phone[0] === "0") {
      toast.warning("0(zero) cannot be the first digit");
      return;
    } else if (data.phone.length > 10) {
      toast.warning("Mobile phone can have maximum 10 digits");
      return;
    } else if (data.phone.length < 10) {
      toast.warning("Mobile phone must have minimum 10 digits");
      return;
    }

    const payload = { email: user.email, phone: data.phone };
    setSaveLoading(true);
    axios
      .put(PUT_IS_ANY_MISSING_DETAILS_CONSUMER, payload)
      .then((response) => {
        toast.success("Your account details have been updated.");
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
    setNavBarHeight(document.querySelector("nav").offsetHeight);
  }, []);

  return (
    <FlexBox
      flex="1"
      align="center"
      justify="center"
      bgImage="/assets/dashboard/background.svg"
    >
      <FlexBox flex="0.8667" radius="2rem" maxWidth="75rem">
        <FlexBox
          flex="1"
          gap="4rem"
          radius="2rem"
          padding="2rem"
          align="center"
          bgColor={WHITE}
          justify="center"
          maxWidth="75rem"
          direction="column"
          radiusMobile="1rem"
          heightMobile="auto"
          paddingMobile="1rem"
          height={`calc(100vh - ${navBarHeight}px - 2rem)`}
        >
          <H1>Profile Details</H1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <FlexBox gap="2rem" wrap="wrap" justify="center">
              <FlexBox direction="column" gap="1rem">
                <label>
                  <FlexBox justify="center" align="center" gap="1rem">
                    <H3>Name</H3>
                    <FlexBox justify="center" align="center" gap="0.75rem">
                      <input
                        type="text"
                        disabled={true}
                        value={user?.name}
                        placeholder={user?.name}
                      />
                    </FlexBox>
                  </FlexBox>
                </label>
                <label>
                  <FlexBox justify="center" align="center" gap="1rem">
                    <H3>Email</H3>
                    <FlexBox justify="center" align="center" gap="0.75rem">
                      <input
                        type="text"
                        placeholder={user?.email}
                        value={user?.email}
                        disabled={true}
                      />
                    </FlexBox>
                  </FlexBox>
                </label>
                <label>
                  <FlexBox align="center" justify="space-between" gap="1rem">
                    <H3>Role</H3>
                    <FlexBox justify="center" align="center" gap="0.75rem">
                      <input
                        type="text"
                        placeholder={user?.role}
                        value={user?.role}
                        disabled={true}
                      />
                    </FlexBox>
                  </FlexBox>
                </label>
              </FlexBox>
              <FlexBox direction="column" gap="1rem">
                <label>
                  <FlexBox
                    align="center"
                    gap="1rem"
                    wrap="wrap"
                    gapMobile="0.5rem"
                  >
                    <H3>Phone</H3>
                    <FlexBox
                      justify="center"
                      align="center"
                      gap="0.75rem"
                      gapMobile="0"
                    >
                      <H4 className="no-mobile">+91</H4>
                      <input
                        type="number"
                        {...register("phone", {
                          required: true,
                          minLength: 10,
                          maxLength: 10,
                        })}
                        defaultValue={user?.phone}
                        placeholder="Enter phone number here"
                      />
                    </FlexBox>
                  </FlexBox>
                </label>
                {saveLoading ? (
                  <SmallButton width="fit-content" margin="0 0 0 auto">
                    <Loader color={WHITE} />
                  </SmallButton>
                ) : (
                  <SubmitBtn
                    value="Save"
                    onClick={handleSubmit(submitHandler)}
                  />
                )}
              </FlexBox>
            </FlexBox>
          </form>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default ConsumerProfile;
