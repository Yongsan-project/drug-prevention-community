import styled from "styled-components";

import { SelfTestProps } from "@/interface/SelfTestPropsInterface";

import SelfTestHeader from "@/components/organisms/SelfTest/Header";
import UserInfo from "@/components/organisms/SelfTest/UserInfo";
import TestTable from "@/components/organisms/SelfTest/TestTable";
import SubmitButton from "@/components/atoms/SubmitButton";

const SubmitButtonStyles = {
  padding: "10px",
  marginTop: "30px",
  fontSize: "20px",
  fontWeight: "bold",
  width: "10rem",
};

const SelfTestHomeTemplate = ({
  userInfo,
  answerData,
  setUserSex,
  setUserAge,
  setAnswer,
  onsubmit,
}: SelfTestProps) => {
  return (
    <StyledContainer>
      <SelfTestHeader />
      <UserInfo
        userInfo={userInfo}
        setUserSex={setUserSex}
        setUserAge={setUserAge}
      />
      <TestTable answerData={answerData} setAnswer={setAnswer} />
      <SubmitButton
        content="결과보기"
        onSubmitHandler={onsubmit}
        styles={SubmitButtonStyles}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default SelfTestHomeTemplate;
