import styled from "styled-components";

interface CheckLabelProps {
  children: JSX.Element[];
}

const CheckLabel = ({ children }: CheckLabelProps) => {
  return <StyledCheckLabel>{children}</StyledCheckLabel>;
};

const StyledCheckLabel = styled.label`
  position: relative;
  padding-left: 40px;
  cursor: pointer;
  user-select: none;
  margin-left: 30px;
  display: flex;
  padding-top: 20px;
`;

export default CheckLabel;
