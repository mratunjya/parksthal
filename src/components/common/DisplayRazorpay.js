import axios from "axios";

import { PRIMARY_500 } from "@colors";
import { POST_CREATE_BOOKINGS, POST_GENERATE_ORDER_ID } from "@apis";

export const DisplayRazorpay = async ({
  name,
  price,
  email,
  phone,
  setLoading,
  handleError,
  handleSuccess,
  parking_lot_id,
}) => {
  // function loadScript(src) {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // }
  // const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  // if (!res) {
  //   setLoading(false);
  //   alert("Razorpay SDK failed to load. Are you online?");
  //   return;
  // }

  const result = await axios.post(POST_GENERATE_ORDER_ID, { amount: price });

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  const { amount, id, currency } = result.data;

  const options = {
    key: "rzp_test_UDwFdg9fbuz7EH", // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Parksthal",
    description: "Test Transaction",
    image: "https://parksthal.vercel.app/maskable_icon.png",
    order_id: id, // Use 'id' instead of 'order_id'
    handler: async function (response) {
      const payload = {
        name: name,
        email: email,
        phone: phone,
        price: price,
        status: "pending",
        parking_lot_id: parking_lot_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
        razorpayPaymentId: response.razorpay_payment_id,
      };

      try {
        const result = await axios.post(POST_CREATE_BOOKINGS, payload);

        // Call the success callback with the result data
        handleSuccess(result.data.message);
      } catch (error) {
        // Call the error callback with the error message
        handleError(error.message);
      }
    },
    prefill: {
      name: name,
      email: email,
      contact: phone,
    },
    notes: {
      address: "Soumya Dey Corporate Office",
    },
    theme: {
      color: PRIMARY_500,
    },
  };

  setLoading(false);

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
