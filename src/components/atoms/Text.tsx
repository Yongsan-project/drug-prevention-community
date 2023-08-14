import styled from "styled-components";

interface TextProps {
  content: string | string[] | undefined;
  styles?: {
    fontSize: string;
    fontWeight: string;
    color?: string;
    margin?: string;
  };
}

const Text = ({ content, styles }: TextProps) => {
  return <StyledText $styles={styles}>{content}</StyledText>;
};

const StyledText = styled.p<{
  $styles?: {
    fontSize: string;
    fontWeight: string;
    color?: string;
    margin?: string;
  };
}>`
  font-size: ${(props) => (props.$styles ? props.$styles.fontSize : "15px")};
  font-weight: ${(props) =>
    props.$styles ? props.$styles.fontWeight : "normal"};
  color: ${(props) => (props.$styles ? props.$styles.color : "black")};
  margin: ${(props) => props.$styles?.margin};
  display: inline-block;
`;

export default Text;
