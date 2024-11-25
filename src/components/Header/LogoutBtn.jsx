import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  function logoutHandler() {
    authService.logout().then(() => {
      dispatch(logout());
    });
  }
  return (
    <button
      onClick={logoutHandler}
      className="inline-block cursor-pointer  px-6 py-2 duration-200 hover:bg-blue-200 rounded-full"
    >
      logout
    </button>
  );
}

export default LogoutBtn;
