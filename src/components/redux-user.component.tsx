import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updatePreferences } from "../redux-store/slices/userSlice";

const ReduxUser = () => {
  return (
    <div className="space-y-2">
        <p className="font-bold">Using redux</p>
      <UserProfile />
      <ThemeSettings />
      {/* <NotificationBell /> */}
    </div>
  );
};
const UserProfile = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state: any) => state.user.name);

  return (
    <div className="flex gap-x-2">
      <h2>User Profile</h2>
      <input
        value={userName}
        onChange={(e) => dispatch(updateName(e.target.value))}
        className="border-2"
      />
    </div>
  );
};

const ThemeSettings = () => {
  const dispatch = useDispatch();
  const preferences = useSelector((state: any) => state.user.preferences);

  return (
    <div className="flex gap-x-2">
      <h2>Theme Settings</h2>
      <select
        value={preferences.theme}
        onChange={(e) => dispatch(updatePreferences({ theme: e.target.value }))}
        className="border"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

const NotificationBell = () => {
  const count = useSelector((state: any) => state.notifications.count);

  console.log("NotificationBell rendered");

  return (
    <div>
      <span>🔔 {count}</span>
    </div>
  );
};

export default ReduxUser