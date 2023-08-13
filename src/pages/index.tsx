import withHead from "@/components/hoc/withHead";
import SelfTest from "@/components/organisms/Layout/SelfTest";

const Home = () => {
  return (
    <>
      <SelfTest />
    </>
  );
};

export default withHead(
  Home,
  "Yongsan Drug Prevention",
  "청소년 마약근절을 위한 커뮤니티"
);
