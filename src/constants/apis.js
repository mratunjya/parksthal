const baseUrl = "http://localhost:4000/api";

export const PUT_UPDATE_USER = `${baseUrl}/users/update`;

export const PUT_IS_ANY_MISSING_DETAILS_CONSUMER = `${baseUrl}/consumers/update`;
export const POST_IS_ANY_MISSING_DETAILS_CONSUMER = `${baseUrl}/consumers/is_any_missing_details`;

export const PUT_IS_ANY_MISSING_DETAILS_ATTENDANT = `${baseUrl}/attendants/update`;
export const POST_IS_ANY_MISSING_DETAILS_ATTENDANT = `${baseUrl}/attendants/is_any_missing_details`;

export const PUT_IS_ANY_MISSING_DETAILS_OWNER = `${baseUrl}/owners/update`;
export const POST_IS_ANY_MISSING_DETAILS_OWNER = `${baseUrl}/owners/is_any_missing_details`;

export const POST_ADD_PARKING_LOT = `${baseUrl}/parking_lots`;
export const POST_DELETE_PARKING_LOT = `${baseUrl}/parking_lots/delete`;
export const POST_UPDATE_PARKING_LOTS = `${baseUrl}/parking_lots/update_parking_lot`;
export const POST_PARKING_LOTS = `${baseUrl}/parking_lots/index_by_email`;
