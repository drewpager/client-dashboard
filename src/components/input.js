import React, { useState } from "react";
import styled from "styled-components";

const InputField = ({ submitViewId }) => {
  const [viewID, setViewID] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitViewId(viewID);
  };
  return (
    <InputRow>
      <form>
        <input
          type="text"
          name="viewid"
          value={viewID}
          onChange={(e) => setViewID(e.target.value)}
          placeholder="Enter viewID"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </InputRow>
  );
};

const InputRow = styled.div`
  // padding-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;

  input {
    line-height: 7vh;
    border-radius: 20px;
    border: 1px solid #4b2f57;
    font-size: 1.5rem;
    width: 15vw;
  }

  button {
    margin: 0 7px 0 20px;
    height: 7vh;
    border-radius: 20px;
    border: 1px solid #4b2f57;
    font-size: 1.5rem;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
  }
`;

export default InputField;