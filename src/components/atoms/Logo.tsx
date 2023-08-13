import logo from "/public/images/logo.svg";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" as="image">
      <StyledImg src={logo} alt="SD COMMUNITY LOGO" priority={true} />
    </Link>
  );
};

const StyledImg = styled(Image)`
  width: 20vw;
  height: auto;

  @media (max-width: 600px) {
    width: 40vw;
  }
`;

export default Logo;
