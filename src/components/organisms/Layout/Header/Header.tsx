import styled from "styled-components";

import Logo from "@/components/atoms/Logo";
import SearchBar from "@/components/molecules/SearchBar";

const Header = () => {
  return (
    <StyledContainer>
      <Logo />
      <SearchBar />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #eeeded;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 15vh;
    padding: 20px;
  }
`;

export default Header;
