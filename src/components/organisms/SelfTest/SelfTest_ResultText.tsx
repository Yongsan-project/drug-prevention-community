import styled from "styled-components";

import TextBox from "../../molecules/TextBox";
import Text from "../../atoms/Text";

import { TextBoxStylesProps } from "@/interface/TextBoxStylesProps";
import { TextStylesProps } from "@/interface/TextStyleProps";

interface props {
  textStyles: TextStylesProps;
  textBoxContent: string;
  textBoxStyles: TextBoxStylesProps;
}

const resultTextProps = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#365691",
};

const SelfTestResultText = (props: props) => {
  return (
    <StyledContainer>
      <Text content="당신의 점수는?" styles={resultTextProps} />
      <TextBox
        textBoxContent={props.textBoxContent + "점"}
        textBoxStyles={props.textBoxStyles}
        textStyles={props.textStyles}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SelfTestResultText;
