import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Utils/userSlice"; 

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.userSlice.user);
  const navigate = useNavigate();

  // console.log("protected route");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    // console.log(storedUser)

    // Restore Redux state if user data is found in localStorage
    if (storedUser && !userData) {
      dispatch(addUser(storedUser));
    }

    // Redirect to login if no user data is found
    if (!storedUser) {
      // console.log("Redirecting to login...");
      navigate("/login");
    }
  }, [dispatch, userData, navigate]);

  // Prevent rendering before checking auth
  if (!userData) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
