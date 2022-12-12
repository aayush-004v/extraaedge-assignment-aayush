import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../components/App";
import {
  getAvatarPlaceHolder,
  getAvatarData,
  like,
  edit,
  deleteUser,
} from "../action/Action";

const mapStatetoProps = (state) => {
  return {
    user: state.main.avatarPlaceholder,
    like: state.main.like,
    photo: state.main.avatarData,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators(
    {
      getAvatarPlaceHolder,
      getAvatarData,
      like,
      edit,
      deleteUser,
    },
    dispatch
  );
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
