import Link from "next/link";
import styled from "styled-components";

interface LinkProps {
  size?: number;
  weight?: string;
  content: string;
  routerPage: string;
}

const LinkAtom = ({
  size = 16,
  content,
  routerPage,
  weight = "bold",
}: LinkProps) => {
  return (
    <Link href={routerPage}>
      <StyledText size={size} $weight={weight}>
        {content}
      </StyledText>
    </Link>
  );
};

const StyledText = styled.p<{ size: number; $weight: string }>`
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => props.$weight};
  transition: 0.3s;

  &:hover {
    color: #d71313;
  }
`;

export default LinkAtom;
