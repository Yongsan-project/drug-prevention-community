import styled from "styled-components";
import Text from "../atoms/Text";
import { TextBoxStylesProps } from "@/interface/TextBoxStylesProps";
import { TextStylesProps } from "@/interface/TextStyleProps";

interface props {
  textBoxContent: string;
  textBoxStyles: TextBoxStylesProps;
  textStyles: TextStylesProps;
}

const TextBox = (props: props) => {
  return (
    <StyledBox $styles={props.textBoxStyles}>
      <Text styles={props.textStyles} content={props.textBoxContent} />
    </StyledBox>
  );
};

const StyledBox = styled.div<{ $styles: TextBoxStylesProps }>`
  width: ${(props) => (props.$styles.width ? props.$styles.width : "100%")};
  height: ${(props) => (props.$styles.height ? props.$styles.height : null)};
  margin: ${(props) => props.$styles.margin};
  padding: ${(props) => props.$styles.padding};
  background-color: ${(props) => props.$styles.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TextBox;
