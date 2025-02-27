import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { signOut } from "../redux-store/slices/userSlice";

const Profile = () => {
  const loggedInUser = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const user = loggedInUser.user;
  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="center">
      <div className="profile">
        <h1>Profile</h1>
        <p>
          <strong>Name: </strong>
          {user?.name}
        </p>
        <p>
          <strong>Email: </strong>
          {`${user?.email}`}
        </p>
        <button className="border p-2" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
