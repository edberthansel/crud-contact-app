import {
  GET_ALL_CONTACT_LIST,
  GET_CONTACT_DETAIL_BY_ID,
  POST_CREATE_CONTACT,
  PUT_UPDATE_CONTACT,
} from "../actions/apiCallAction";

let initialState = {
  getAllContactList: false,
  errorAllContactList: false,
  getContactDetailById: false,
  errorContactDetailById: false,
  getResponseDataContact: false,
  errorResponseDataContact: false,
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTACT_LIST:
      return {
        ...state,
        getAllContactList: action.payload.data,
        errorAllContactList: action.payload.errorMessage,
      };

    case GET_CONTACT_DETAIL_BY_ID:
      return {
        ...state,
        getContactDetailById: action.payload.data,
        errorContactDetailById: action.payload.errorMessage,
      };

    case POST_CREATE_CONTACT:
      return {
        ...state,
        getResponseDataContact: action.payload.data,
        errorResponseDataContact: action.payload.errorMessage,
      };

    case PUT_UPDATE_CONTACT:
      return {
        ...state,
        getResponseDataContact: action.payload.data,
        errorResponseDataContact: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default contacts;
