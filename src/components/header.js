import React, { useState } from "react";
import styled from "styled-components";
import { signOut } from "../utils";
import InputField from "./input";

const Container = styled.div`
  height: 10vh;
  background: #ff041d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  h1 {
    padding-left: 20px;
    color: white;
  }

  .signout {
    padding-right: 20px;
    color: white;
    cursor: pointer;
  }
`;

const Header = () => {
  const [viewID, setViewID] = useState("221208153");
  return (
    <Container>
      <h1>Siege Media Client Dashboard</h1>
      <div>
        <InputField onChange={(viewId) => setViewID(viewId)} />
      </div>
      <div className="signout" onClick={signOut}>
        SIGN OUT
      </div>
    </Container>
  );
};

export default Header;