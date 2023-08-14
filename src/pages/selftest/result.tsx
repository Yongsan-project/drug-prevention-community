import { useRouter } from "next/router";
import withHead from "@/components/hoc/withHead";
import ResultTemplate from "@/components/template/SelfTest/result";

const SelfTestResult = () => {
  const router = useRouter();
  const score = router.query.score as string;

  const DescriptionArray = [
    {
      score: "0점",
      desc: "문제없음",
    },
    {
      score: "1~4점",
      desc: "남용",
    },
    {
      score: "5~14점",
      desc: "중독",
    },
    {
      score: "14점 이상",
      desc: "심각한 의존",
    },
  ];

  return (
    <ResultTemplate result={score} scoreCircleContentArray={DescriptionArray} />
  );
};

export default withHead(
  SelfTestResult,
  "마약 중독 자가진단",
  "마약 중독 자가진단"
);
