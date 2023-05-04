import axios from "axios";

export const FETCH_DB_ITEMS_SUCCESS = "FETCH_DB_ITEMS_SUCCESS";
export const FETCH_DB_ITEMS_FAILURE = "FETCH_DB_ITEMS_FAILUER";

export const fetchItemsSuccess = (items) => ({
  type: FETCH_DB_ITEMS_SUCCESS,
  payload: items,
});

export const fetchItemsFailure = (error) => ({
  type: FETCH_DB_ITEMS_FAILURE,
  payload: error,
});

export const fetchDBItems = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_HOST}/getItems`)
      .then((response) => {
        const { items } = response.data;
        dispatch(fetchItemsSuccess(items));
      })
      .catch((err) => {
        dispatch(fetchItemsFailure(err.message));
      });
  };
};
