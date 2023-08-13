import styled from "styled-components";
import Link from "next/link";

interface ButtonProps {
  content: string;
  routerPage: string;
  isAbsolute: boolean;
  styles: {
    fontSize: number;
    backgroundColor: string;
    padding: number;
    color: string;
    fontWeight: string;
    margin: number;
  };
}

const LinkedButton = ({
  content,
  routerPage,
  styles,
  isAbsolute,
}: ButtonProps) => {
  return (
    <>
      {isAbsolute ? (
        <StyledLink href={routerPage}>
          <StyledButton styles={styles}>{content}</StyledButton>
        </StyledLink>
      ) : (
        <Link href={routerPage}>
          <StyledButton styles={styles}>{content}</StyledButton>
        </Link>
      )}
    </>
  );
};

const StyledLink = styled(Link)`
  position: absolute;
  top: 80vh;

  @media (max-width: 600px) {
    top: 45vh;
  }
`;

const StyledButton = styled.button<{
  styles: {
    fontSize: number;
    backgroundColor: string;
    padding: number;
    color: string;
    fontWeight: string;
    margin: number;
  };
}>`
  font-size: ${(props) => `${props.styles.fontSize}px`};
  background-color: ${(props) => props.styles.backgroundColor};
  padding: ${(props) => `${props.styles.padding}px`};
  color: ${(props) => props.styles.color};
  font-weight: ${(props) => props.styles.fontWeight};
  margin: ${(props) => `${props.styles.margin}px`};

  @media (max-width: 600px) {
    font-size: ${(props) => `${props.styles.fontSize - 5}px`};
    padding: ${(props) => `${props.styles.padding - 10}px`};
  }
`;

export default LinkedButton;
