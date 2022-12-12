import * as ActionType from "../constants/ActionTypes";
let initialState = {
  avatarPlaceholder: [],
  avatarData: [],
  fetchError: false,
  like: false,
  edit: {},
  delete: {},
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_AVATAR_PLACEHOLDER: {
      return {
        ...state,
        avatarPlaceholder: action.payload,
      };
    }
    case ActionType.GET_AVATAR_DATA: {
      return {
        ...state,
        avatarData: [...state.avatarData, action.payload],
      };
    }
    case ActionType.GET_ERROR: {
      return {
        ...state,
        avatarData: action.payload,
      };
    }
    case ActionType.LIKE: {
      return {
        ...state,
        like: action.payload,
      };
    }
    case ActionType.EDIT: {
      return {
        ...state,
        edit: action.payload,
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
