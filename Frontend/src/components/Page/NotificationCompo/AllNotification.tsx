import { Bell } from "lucide-react";

function AllNotification() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center p-6">
      <div className="bg-gray-100 p-4 rounded-full mb-4 shadow-sm">
        <Bell className="w-10 h-10 text-gray-500" />
      </div>
      <h2 className="text-xl font-semibold ">No Notifications</h2>
      <p className=" mt-2 max-w-sm">
        You’re all caught up! When you get new notifications, they’ll show up here.
      </p>
    </div>
  );
}

export default AllNotification;
