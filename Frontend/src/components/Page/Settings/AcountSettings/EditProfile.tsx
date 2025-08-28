import { useState } from "react";
import { Camera, User } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditUserApi } from "@/api/UserApi";

interface ChangedData {
  username?: string;
  bio?: string;
  profileImage?: string;
}

const EditProfile = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const [username, setUsername] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [profileImage, setProfileImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const originalData = {
    username: user?.name,
    bio: user?.bio,
    profileImage: user?.image,
  };


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      console.log("Selected profile image:", file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    const changedData: ChangedData = {};

    if (username !== originalData.username) changedData.username = username;
    if (bio !== originalData.bio) changedData.bio = bio;
    if (profileImage !== originalData.profileImage) changedData.profileImage = profileImage;

    if (Object.keys(changedData).length === 0) {
      toast.info("No changes detected");
      return;
    }

    setLoading(true);

    try {
      // Dummy API call (replace with real backend API)
       await EditUserApi({changedData});
      toast.success("Profile updated successfully!");
    } catch {
      toast.error("Failed to save changes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-6 ">
      <ToastContainer />
      <div
        className="w-full max-w-2xl rounded-2xl mt-50 backdrop-blur-xl 
                   border border-gray-200 dark:border-white/20
                   shadow-2xl p-8 flex flex-col gap-8 bg-white/10 dark:bg-black/20"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 dark:border-white/20 shadow-lg"
            />
            <label
              htmlFor="profileImage"
              className="absolute bottom-1 right-1 p-2 rounded-full bg-white/10 hover:bg-white/20 
                         border border-gray-200 dark:border-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <Camera className="w-5 h-5 text-white" />
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <h2 className="text-2xl font-semibold text-black dark:text-white">{username}</h2>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl 
                            border border-gray-200 
                           text-black placeholder-gray-400 
                           focus:ring-2 focus:outline-none 
                            dark:border-white/20 
                           dark:text-white dark:placeholder-gray-500"
                placeholder="Enter your username"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full min-h-[100px] p-4 rounded-xl 
                          border border-gray-200 
                         text-black placeholder-gray-400 
                         focus:ring-2 focus:outline-none resize-none
                          dark:border-white/20 
                         dark:text-white dark:placeholder-gray-500"
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={loading}
          className=" relative cursor-pointer w-[90%] h-12 mx-auto mt-6 flex items-center justify-center gap-2
                     rounded-xl border border-gray-200 dark:border-gray-700
                     bg-white/30 dark:bg-black/30 backdrop-blur-md
                     text-gray-800 dark:text-gray-200 font-medium
                     shadow-md hover:shadow-lg
                     transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                     hover:bg-white/40 dark:hover:bg-black/40"
        >
          {loading && (
            <span className="absolute mr-25 w-6 h-6 border-4 border-t-transparent border-white/70 rounded-full animate-spin"></span>
          )}
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
