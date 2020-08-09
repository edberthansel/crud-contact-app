import axios from "axios";

export const GET_ALL_CONTACT_LIST = "GET_ALL_CONTACT_LIST";
export const GET_CONTACT_DETAIL_BY_ID = "GET_CONTACT_DETAIL_BY_ID";
export const POST_CREATE_CONTACT = "POST_CREATE_CONTACT";
export const PUT_UPDATE_CONTACT = "PUT_UPDATE_CONTACT";

export const getAllContactList = () => {
  return (dispatch) => {
    axios
      .get("https://simple-contact-crud.herokuapp.com/contact")
      .then(function (response) {
        dispatch({
          type: GET_ALL_CONTACT_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_ALL_CONTACT_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getContactDetailById = (id) => {
  return (dispatch) => {
    axios
      .get("https://simple-contact-crud.herokuapp.com/contact/" + id)
      .then(function (response) {
        dispatch({
          type: GET_CONTACT_DETAIL_BY_ID,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_CONTACT_DETAIL_BY_ID,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postCreateContact = (data) => {
  return (dispatch) => {
    axios
      .post("https://simple-contact-crud.herokuapp.com/contact", data)
      .then(function (response) {
        dispatch({
          type: POST_CREATE_CONTACT,
          payload: {
            data: response.data.message,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_CREATE_CONTACT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putUpdateContact = (data, id) => {
  return (dispatch) => {
    axios
      .put("https://simple-contact-crud.herokuapp.com/contact/" + id, data)
      .then(function (response) {
        dispatch({
          type: PUT_UPDATE_CONTACT,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_UPDATE_CONTACT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteContactById = (id) => {
  return (dispatch) => {
    axios
      .delete("https://simple-contact-crud.herokuapp.com/contact/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataContact = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CONTACT_DETAIL_BY_ID,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_CREATE_CONTACT,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
