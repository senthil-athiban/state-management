import React, { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom } from "../recoil-store/atoms/userAtom";
import { userNameSelector, userPreferenceSelector } from "../recoil-store/selectors/userSelector";


const RecoilUser = () => {
  return (
    <div className="space-y-2">
        <p className="font-bold">Using Recoil</p>
      <UserProfile />
      <ThemeSettings />
      {/* <NotificationBell /> */}
    </div>
  );
};
const UserProfile = () => {
    const setUser = useSetRecoilState(userAtom);
    const name = useRecoilValue(userNameSelector);

  return (
    <div className="flex gap-x-2">
      <h2>User Profile</h2>
      <input
        value={name}
        onChange={(e) => setUser((prev) => ({
            ...prev,
            name: e.target.value
          }))}
        className="border-2"
      />
    </div>
  );
};

const ThemeSettings = () => {
    const setUser = useSetRecoilState(userAtom);
    const preferences = useRecoilValue(userPreferenceSelector);
    const handleThemeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setUser((prev) => ({
          ...prev,
          preferences: {
            ...prev.preferences,
            theme: e.target.value
          }
        }));
      },[])

  return (
    <div className="flex gap-x-2">
      <h2>Theme Settings</h2>
      <select
        value={preferences.theme}
        onChange={handleThemeChange}
        className="border"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};


export default RecoilUser;