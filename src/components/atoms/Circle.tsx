import styled from "styled-components";
import { circleStylesProps } from "@/interface/CircleStyleProps";

interface CircleProps {
  children: JSX.Element[] | JSX.Element;
  circleStyles: circleStylesProps;
}

const Circle = ({ children, circleStyles }: CircleProps) => {
  return (
    <StyledCircleContainer $styles={circleStyles}>
      {children}
    </StyledCircleContainer>
  );
};

const StyledCircleContainer = styled.div<{ $styles: circleStylesProps }>`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.$styles.width};
  height: ${(props) => props.$styles.height};
  background-color: ${(props) => props.$styles.backgroundColor};
  margin: ${(props) => props.$styles.margin};
`;

export default Circle;
