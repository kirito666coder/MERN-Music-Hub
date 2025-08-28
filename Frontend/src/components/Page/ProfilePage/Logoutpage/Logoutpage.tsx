import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AlertTriangle } from "lucide-react";
import { logout } from "@/features/user/userSlice";
import { LogOutUserApi } from "@/api/UserApi";

const LogoutPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    if (!window.confirm("Are you SURE you want to log out? This action cannot be undone!")) {
      return;
    }

    setLoading(true);
    try {
    
        await LogOutUserApi()
        
      dispatch(logout());

      toast.success("Logged out successfully!");
      navigate("/login"); 
    } catch (err) {
      console.error(err);
      toast.error("Failed to logout. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full  flex items-center justify-center mt-40 md:mt-80">
      <ToastContainer />
      <div className="max-w-md w-full p-10 rounded-3xl backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-red-600 flex flex-col items-center gap-6 shadow-2xl">
        {/* Icon */}
        <AlertTriangle className="w-16 h-16 text-red-600" />

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-red-700 text-center">
          Danger Zone
        </h1>

        {/* Description */}
        <p className="text-red-500 text-center text-lg">
          Logging out will end your session immediately. Make sure you really want to leave!
        </p>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          disabled={loading}
          className="cursor-pointer w-full px-6 py-4 bg-red-600 text-white font-bold rounded-2xl shadow-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300 active:scale-95 disabled:opacity-50"
        >
          {loading ? "Logging out..." : "LOG OUT"}
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
