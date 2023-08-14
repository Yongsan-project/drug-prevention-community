import styled from "styled-components";
import Link from "next/link";

import SelfTestHeader from "@/components/organisms/SelfTest/Header";
import SelfTestResultText from "@/components/organisms/SelfTest/SelfTest_ResultText";
import ScoreDescription from "@/components/organisms/SelfTest/ScoreDescription";

const textStyles = {
  fontSize: "20px",
  fontWeight: "normal",
  color: "white",
};

const textBoxStyles = {
  width: "10rem",
  height: "3rem",
  margin: "30px",
  padding: "8px",
  backgroundColor: "#365691",
};

const scoreCircleStyles = {
  width: "8rem",
  height: "8rem",
  backgroundColor: "#666666",
  margin: "30px;",
};

const scoreCircleContentStyles = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "white",
  margin: "5px",
};

const scoreCircleDetailStyles = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "white",
};

interface resultProps {
  result: string;
  scoreCircleContentArray: { score: string; desc: string }[];
}

const ResultTemplate = ({ result, scoreCircleContentArray }: resultProps) => {
  return (
    <StyledContainer>
      <SelfTestHeader />
      <SelfTestResultText
        textStyles={textStyles}
        textBoxContent={result}
        textBoxStyles={textBoxStyles}
      />
      <ScoreDescription
        scoreCircleContentArray={scoreCircleContentArray}
        scoreCircleStyles={scoreCircleStyles}
        contentStyles={scoreCircleContentStyles}
        detailStyles={scoreCircleDetailStyles}
      />
      <StyledLink href="/selftest">다시하기</StyledLink>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin-top: 30px;
  font-size: 22px;
  color: white;
  font-weight: bold;
  background-color: #5698ab;
  padding: 15px;
`;

export default ResultTemplate;
