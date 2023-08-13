import styled from "styled-components";

interface InputProps {
  value: string;
  placeholder: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, onChangeHandler, placeholder }: InputProps) => {
  return (
    <StyledInput
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  width: 20vw;
  height: auto;
  border-bottom: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin: 0px 5px;

  @media (max-width: 600px) {
    width: 50vw;
    font-size: 15px;
  }
`;

export default Input;
