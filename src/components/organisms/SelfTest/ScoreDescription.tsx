import styled from "styled-components";

import ScoreCircle from "@/components/molecules/ScoreCircle";

import { circleStylesProps } from "@/interface/CircleStyleProps";
import { TextStylesProps } from "@/interface/TextStyleProps";

interface ScoreDescriptionProps {
  scoreCircleContentArray: { score: string; desc: string }[];
  scoreCircleStyles: circleStylesProps;
  contentStyles: TextStylesProps;
  detailStyles: TextStylesProps;
}

const ScoreDescription = ({
  scoreCircleContentArray,
  scoreCircleStyles,
  contentStyles,
  detailStyles,
}: ScoreDescriptionProps) => {
  return (
    <StyledContainer>
      {scoreCircleContentArray.map((obj, idx) => (
        <ScoreCircle
          key={idx}
          content={obj.score}
          detail={obj.desc}
          circleStylesProps={scoreCircleStyles}
          contentStylesProps={contentStyles}
          detailStylesProps={detailStyles}
        />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding: 3rem;
  border: 1px solid #fa8681;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default ScoreDescription;
