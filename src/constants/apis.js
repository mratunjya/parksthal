const baseUrl = "http://localhost:4000/api";

export const PUT_UPDATE_USER = `${baseUrl}/users/update`;

export const PUT_IS_ANY_MISSING_DETAILS_CONSUMER = `${baseUrl}/consumers/update`;
export const POST_IS_ANY_MISSING_DETAILS_CONSUMER = `${baseUrl}/consumers/is_any_missing_details`;

export const PUT_IS_ANY_MISSING_DETAILS_ATTENDANT = `${baseUrl}/attendants/update`;
export const POST_IS_ANY_MISSING_DETAILS_ATTENDANT = `${baseUrl}/attendants/is_any_missing_details`;

export const PUT_IS_ANY_MISSING_DETAILS_OWNER = `${baseUrl}/owners/update`;
export const POST_IS_ANY_MISSING_DETAILS_OWNER = `${baseUrl}/owners/is_any_missing_details`;