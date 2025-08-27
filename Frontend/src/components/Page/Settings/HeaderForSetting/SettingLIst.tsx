import { NavLink } from "react-router-dom";
import {
  Music,
  Disc,
  Mic,
  Heart,
  ListMusic,
  Palette,
  Bell,
  Globe,
  Shield,
  Smartphone,
  LogOut,
  User,
  Key,
  Trash2,
} from "lucide-react";

type SettingLink = {
  label: string;
  path: string;
  icon: React.ReactNode;
  danger?: boolean;
};

const settingsLinks: Record<string, SettingLink[]> = {
  Account: [
    { label: "Edit Profile", path: "editProfile", icon: <User size={18} /> },
    
  ],
  "Music & Library": [
    { label: "Manage Songs", path: "manageSongs", icon: <Music size={18} /> },
    { label: "Manage Albums", path: "manageAlbums", icon: <Disc size={18} /> },
    { label: "Manage Artists", path: "manageArtists", icon: <Mic size={18} /> },
    { label: "Liked Songs", path: "likedSongs", icon: <Heart size={18} /> },
    { label: "Playlists", path: "playlists", icon: <ListMusic size={18} /> },
  ],
  "App Preferences": [
    { label: "Theme", path: "theme", icon: <Palette size={18} /> },
    { label: "Notifications", path: "notifications", icon: <Bell size={18} /> },
    { label: "Language", path: "language", icon: <Globe size={18} /> },
  ],
  "Privacy & Security": [
    {
      label: "Privacy Controls",
      path: "privacyControls",
      icon: <Shield size={18} />,
    },
    {
      label: "Connected Devices",
      path: "connectedDevices",
      icon: <Smartphone size={18} />,
    },
  ],
  " Danger Zone":[
    {
      label: "Log out ",
      path: "logoutDevices",
      icon: <LogOut size={18} />,
      danger:true,
    },
    {
      label: "Change Password",
      path: "changePassword",
      icon: <Key size={18} />,
      danger: true,
    },
    {
      label: "Delete Account",
      path: "deleteAccount",
      icon: <Trash2 size={18} />,
      danger: true,
    },
  ],
 
  
};

const SettingList = () => {
  return (
    <div className="h-full p-6 space-y-8">
      {/* User Info */}
      <div className="flex items-center space-x-4">
        <img
          src="/dummy-user.jpg"
          alt="User"
          className="w-16 h-16 rounded-full object-cover border border-white/20"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            John Doe
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            johndoe@email.com
          </p>
        </div>
      </div>

      {/* Dynamic Settings Sections */}
      <div className="space-y-6">
        {Object.entries(settingsLinks).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
              {section}
            </h3>
            <ul className="divide-y dark:divide-white/20 border dark:border-white/20 divide-gray-300 border-gray-300 rounded-lg overflow-hidden">
              {links.map(({ label, path, icon, danger }) => (
                <li key={path}>
                  <NavLink
                    to={`/settings/${path}`}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2 transition cursor-pointer ${
                        isActive
                          ? "bg-gray-200 dark:bg-white/10 font-medium"
                          : "hover:bg-gray-100 dark:hover:bg-white/5"
                      } ${danger ? "text-red-500" : ""}`
                    }
                  >
                    {icon}
                    <span>{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingList;
