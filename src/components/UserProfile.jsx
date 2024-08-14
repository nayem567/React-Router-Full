import React, { useContext } from "react";
import { useLocation } from "react-router";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      {user ? (
        <>
          <h2>User Profile</h2>
          <div className="profile-info">
            <p>
              <span className="profile-label">Name : </span>
              {user.name}
            </p>
            <p>
              <span className="profile-label">Email : </span>
              {user.email}
            </p>
            <p>
              <span className="profile-label">City : </span>
              {user.city}
            </p>
            <p>
              <span className="profile-label">Country : </span>
              {user.country}
            </p>
          </div>
        </>
      ) : (
        <h2>No User Exists</h2>
      )}
    </div>
  );
};

export default UserProfile;
