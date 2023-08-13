import styled from "styled-components";

interface SubmitButtonProps {
  content: string;
  onSubmitHandler: React.FormEventHandler<HTMLButtonElement>;
  styles: {
    padding: string;
    marginTop: string;
    fontSize: string;
    fontWeight: string;
    width: string;
  };
}

const SubmitButton = ({
  content,
  onSubmitHandler,
  styles,
}: SubmitButtonProps) => {
  return (
    <StyledButton type="submit" onClick={onSubmitHandler} $styles={styles}>
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  $styles: {
    padding: string;
    marginTop: string;
    fontSize: string;
    fontWeight: string;
    width: string;
  };
}>`
  padding: ${(props) => props.$styles.padding};
  font-size: ${(props) => props.$styles.fontSize};
  font-weight: ${(props) => props.$styles.fontWeight};
  background-color: #0d1282;
  color: white;
  margin: ${(props) => props.$styles.marginTop} auto;
  width: ${(props) => props.$styles.width};
`;

export default SubmitButton;
