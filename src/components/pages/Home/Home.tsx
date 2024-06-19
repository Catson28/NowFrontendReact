import React, { useState, useEffect } from "react";

import { getPublicContent } from "../../../services/net/user.service";
// import AuthService from "../../../services/net/auth.service";

import NavbarComp from "./NavbarComp";

const Home: React.FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <>
      <NavbarComp />
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    </>
  );
};

export default Home;