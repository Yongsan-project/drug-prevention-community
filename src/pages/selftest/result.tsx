import { useRouter } from "next/router";
import withHead from "@/components/hoc/withHead";
import ResultTemplate from "@/components/template/SelfTest/result";

const SelfTestResult = () => {
  const router = useRouter();
  const { score } = router.query;

  return <ResultTemplate />;
};

export default withHead(
  SelfTestResult,
  "마약 중독 자가진단",
  "마약 중독 자가진단"
);
