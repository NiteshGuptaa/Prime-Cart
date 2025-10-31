import React, { useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";

const LoginSignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  // Toggle between login and sign-up forms
  const toggleForm = () => setIsSignUp(!isSignUp);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate form inputs
  const validate = () => {
    let tempErrors = {};
    if (isSignUp)
      if (!formData.username.trim())
        tempErrors.username = "Username is required";
    if (!formData.email.trim())
      tempErrors.email = "Email is required"; 
    if (!formData.password.trim())
      tempErrors.password = "Password is required";
    if (isSignUp)
      if (formData.password !== formData.confirmPassword)
        tempErrors.confirmPassword = "Passwords must match";

    setErrors(tempErrors); 
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (!validate()) {
      return; // Stop execution if validation fails
    }

    if (isSignUp) {
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
        dispatch(addUser(formData));
        navigate("/profile");
      } catch (error) {
        toast.error(error.message, { position: "bottom-center" });
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        dispatch(addUser(formData));
        navigate('/profile');
      } catch (error) {
        toast.error(error.message, { position: "bottom-center" });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Email</label>
            <div className="flex items-center border rounded-lg">
              <FaEnvelope className="p-2 text-gray-600" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="py-2 w-full focus:outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          {/* Username input (only for sign-up) */}
          {isSignUp && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Username</label>
              <div className="flex items-center border rounded-lg">
                <FaUserAlt className="p-2 text-gray-600" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="py-2 w-full focus:outline-none"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>
          )}
          {/* Password input */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Password</label>
            <div className="flex items-center border rounded-lg">
              <FaLock className="p-2 text-gray-600" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="py-2 w-full  focus:outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          {/* Confirm Password input (only for sign-up) */}
          {isSignUp && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Confirm Password
              </label>
              <div className="flex items-center border rounded-lg">
                <FaLock className="p-2 text-gray-600" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="py-2 w-full focus:outline-none"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-blue-500 font-bold hover:underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUpForm;
