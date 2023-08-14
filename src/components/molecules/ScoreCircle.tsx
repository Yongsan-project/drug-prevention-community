import Circle from "../atoms/Circle";
import Text from "../atoms/Text";

import { circleStylesProps } from "@/interface/CircleStyleProps";
import { TextStylesProps } from "@/interface/TextStyleProps";

interface ScoreCircleProps {
  circleStylesProps: circleStylesProps;
  contentStylesProps: TextStylesProps;
  detailStylesProps: TextStylesProps;
  content: string;
  detail: string;
}

const ScoreCircle = ({
  circleStylesProps,
  contentStylesProps,
  detailStylesProps,
  content,
  detail,
}: ScoreCircleProps) => {
  return (
    <Circle circleStyles={circleStylesProps}>
      <Text content={content} styles={contentStylesProps} />
      <Text content={detail} styles={detailStylesProps} />
    </Circle>
  );
};

export default ScoreCircle;
