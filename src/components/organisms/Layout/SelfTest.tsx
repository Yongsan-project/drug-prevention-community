import ImageAtom from "@/components/atoms/Image";
import MainImage from "/public/images/drug.png";
import SelfTestButton from "@/components/molecules/SelfTestButton";
import styled from "styled-components";

const SelfTest = () => {
  return (
    <StyledSection>
      <ImageAtom
        width="100%"
        height="80vh"
        source={MainImage}
        altContent="SD COMMUNITY MAIN IMAGE"
      />
      <SelfTestButton />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SelfTest;
