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

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Music & Library */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            Music & Library
          </h3>
          <ul className="divide-y divide-white/20 border border-white/20 rounded-lg overflow-hidden">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Manage Songs
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Manage Albums
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Manage Artists
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Liked Songs
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Playlists
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            Account
          </h3>
          <ul className="divide-y divide-white/20 border border-white/20 rounded-lg overflow-hidden">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Edit Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Change Password
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Delete Account
            </li>
          </ul>
        </div>

        {/* App Preferences */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            App Preferences
          </h3>
          <ul className="divide-y divide-white/20 border border-white/20 rounded-lg overflow-hidden">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Theme
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Notifications
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Language
            </li>
          </ul>
        </div>

        {/* Privacy & Security */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            Privacy & Security
          </h3>
          <ul className="divide-y divide-white/20 border border-white/20 rounded-lg overflow-hidden">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Privacy Controls
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Connected Devices
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
              Log out from all devices
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingList;
