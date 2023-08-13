import styled from "styled-components";

import NavBar from "@/components/molecules/NavBar";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  height: 5vh;
  border-bottom: 1px solid #eeeded;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Navigation;
