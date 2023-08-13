import styled from "styled-components";
import React, { ChangeEventHandler } from "react";

interface RadioInputProps {
  value: string;
  name: string;
  checked: string;
  setChecked: ChangeEventHandler<HTMLInputElement>;
}

const RadioInput = ({ value, name, checked, setChecked }: RadioInputProps) => {
  return (
    <>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        onChange={setChecked}
      />
      <StyledCheckMark $ischecked={checked === value} />
    </>
  );
};

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckMark = styled.span<{ $ischecked: boolean }>`
  position: absolute;
  top: 10px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${(props) => (props.$ischecked ? "#40699d" : "#eee")};
  border-radius: 50%;
  margin: 0 0 1rem 0;

  &::after {
    content: "";
    position: absolute;
    top: 7px;
    left: 7px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    display: ${(props) => (props.$ischecked ? "block" : "none")};
  }
`;

export default RadioInput;
