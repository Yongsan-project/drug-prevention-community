import SelfTestTitle from "@/components/molecules/SelfTest_Title";
import SelfTestSubTitle from "@/components/molecules/SelfTest_SubTitle";
import styled from "styled-components";

const SelfTestHeader = () => {
  return (
    <StyledHeader>
      <SelfTestTitle />
      <SelfTestSubTitle />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default SelfTestHeader;
