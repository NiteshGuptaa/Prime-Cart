import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../components/firebase";
import { removeUser } from "../utils/userSlice"; 

function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.userSlice.user);
  console.log(userData);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("profile page ")
    const storedUser = JSON.parse(localStorage.getItem("user"));
    // console.log(storedUser)
    if (!storedUser) {
      // console.log("y r not login so navigiaitn to /login");
      navigate("/login");
    }
  }, [userData, navigate]);

  // Handle user logout
  async function handleLogout() {
    console.log("handle log out fun executed")
    try {
      // await auth.signOut();
      dispatch(removeUser()); // Clear Redux state
      navigate("/");
      console.log("navigated to the /")
    } catch (error) {
      console.log("error happen in logout")
      console.error("Error logging out:", error.message);
    }
  }

  if (!userData) return null; // Prevent rendering if not logged in

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md text-center transition-transform transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            src={userData?.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycpUJ3ZthUXax2SBqN96C4xh1C4tyA7XbPA&s"}
            alt="User Avatar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">
          Welcome, {userData.username} 🙏
        </h3>
        <div className="mt-4 text-gray-700">
          <p className="font-semibold">Email: {userData.email}</p>
          <p className="font-semibold">User Name: {userData.username}</p>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-all"
        >
          Logout
        </button>
        <Link to="/">
          <button className="mt-6 px-6 ml-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
