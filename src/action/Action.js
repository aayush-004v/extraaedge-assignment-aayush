import * as ActionType from "../constants/ActionTypes";
import axios from "axios";

export const getAvatarPlaceHolder = () => async (dispatch) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      dispatch({
        type: ActionType["GET_AVATAR_PLACEHOLDER"],
        payload: response.data,
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: ActionType["GET_ERROR"],
        payload: error,
      });
    });
};

export const getAvatarData = (username) => async (dispatch) => {
  await axios
    .get(
      `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`
    )
    .then((response) => {
      dispatch({
        type: ActionType["GET_AVATAR_DATA"],
        payload: response.data,
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: ActionType["GET_ERROR"],
        payload: error,
      });
    });
};

export const like = () => {
  return (dispatch) => {
    dispatch({
      type: ActionType["LIKE"],
      payload: true,
    });
  };
};

export const edit = (user) => {
  return (dispatch) => {
    dispatch({
      type: ActionType["EDIT"],
      payload: user,
    });
  };
};

export const deleteUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: ActionType["DELETE"],
      payload: user,
    });
  };
};
