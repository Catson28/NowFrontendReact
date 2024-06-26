import React from "react";

import AuthService from "../../../services/net/auth.service";

const Profile: React.FC = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Authorities:</strong> {currentUser.role}
      </p>
      <strong>Permissions:</strong>
      <ul>
        {currentUser.permissions &&
          currentUser.permissions.map((permission: string, index: number) => <li key={index}>{permission}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
