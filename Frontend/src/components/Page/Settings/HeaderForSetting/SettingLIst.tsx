import { NavLink } from "react-router-dom";

type SettingLink = {
  label: string;
  path: string;
  danger?: boolean;
};

const settingsLinks: Record<string, SettingLink[]> = {
  "Music & Library": [
    { label: "Manage Songs", path: "manageSongs" },
    { label: "Manage Albums", path: "manageAlbums" },
    { label: "Manage Artists", path: "manageArtists" },
    { label: "Liked Songs", path: "likedSongs" },
    { label: "Playlists", path: "playlists" },
  ],
  "App Preferences": [
    { label: "Theme", path: "theme" },
    { label: "Notifications", path: "notifications" },
    { label: "Language", path: "language" },
  ],
  "Privacy & Security": [
    { label: "Privacy Controls", path: "privacyControls" },
    { label: "Connected Devices", path: "connectedDevices" },
    { label: "Log out from all devices", path: "logoutDevices" },
  ],
  Account: [
    { label: "Edit Profile", path: "editProfile" },
    { label: "Change Password", path: "changePassword", danger: true },
    { label: "Delete Account", path: "deleteAccount", danger: true },
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
              {links.map(({ label, path, danger }) => (
                <li key={path}>
                  <NavLink
                    to={`/settings/${path}`}
                    className={({ isActive }) =>
                      `block px-4 py-2 transition cursor-pointer ${
                        isActive
                          ? "bg-gray-200 dark:bg-white/10 font-medium"
                          : "hover:bg-gray-100 dark:hover:bg-white/5"
                      } ${danger ? "text-red-500" : ""}`
                    }
                  >
                    {label}
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
