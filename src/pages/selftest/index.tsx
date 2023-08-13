import withHead from "@/components/hoc/withHead";
import SelfTestHomeTemplate from "@/components/template/SelfTest";
import Router from "next/router";
import { useState } from "react";

const SelfTestHome = () => {
  // 유저의 정보를 저장하는 객체 state
  const [userInfo, setUserInfo] = useState<{ sex: string; age: number }>({
    sex: "",
    age: 0,
  });

  // 유저의 응답에 대한 점수와 질문을 저장하는 객체 배열 state
  const [userAnswer, setUserAnswer] = useState<
    { id: number; answer: string; question: string }[]
  >([
    {
      id: 1,
      answer: "",
      question:
        "귀하는 의료적 목적 이외의 목적으로 약물을 사용한 적이 있습니까?",
    },
    {
      id: 2,
      answer: "",
      question: "귀하는 한번에 한 가지 이상의 약물을 남용합니까?",
    },
    {
      id: 3,
      answer: "",
      question: "귀하는 원할 때엔 언제나 약물사용을 중단할 수 있습니까?",
    },
    {
      id: 4,
      answer: "",
      question:
        "귀하는 약물사용으로 인해 기억을 하지 못하거나, 약물사용을 중단했음에도 불구하고 약물을 사용했을 때와 같은 환각 상태를 경험한 적이 있습니까?",
    },
    {
      id: 5,
      answer: "",
      question: "귀하는 귀하의 약물 사용에 대해 죄책감을 느낀 적이 있습니까?",
    },
    {
      id: 6,
      answer: "",
      question:
        "귀하의 배우자(또는 부모님)가 귀하의 약물사용에 대해 불평한 적이 있습니까?",
    },
    {
      id: 7,
      answer: "",
      question: "귀하는 약물사용 때문에 귀하의 가족을 소홀히 한 적이 있습니까?",
    },
    {
      id: 8,
      answer: "",
      question:
        "귀하는 약물을 구하기 위하여 불법적인 활동에 관여한 적이 있습니까?",
    },
    {
      id: 9,
      answer: "",
      question:
        "귀하는 약물사용을 중단했을 때 금단증상(몸이 아픔)을 경험한 적이 있습니까?",
    },
    {
      id: 10,
      answer: "",
      question:
        "귀하는 약물사용으로 인해 의료적 문제(예 : 기억상실, 감염, 경련, 출혈 등)를 경험한 적이 있습니까?",
    },
  ]);

  /** 유저의 응답에 따라 유저 정보를 저장하는 객체의 성별 데이터를 수정하는 함수 */
  const changeUserSexHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => {
      return { ...prevState, sex: event.target.value };
    });
  };

  /** 유저의 응답에 따라 유저 정보를 저장하는 객체의 나이 데이터를 수정하는 함수 */
  const changeUserAgeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => {
      return { ...prevState, age: parseInt(event.target.value) };
    });
  };

  /** 유저의 응답에 따라 유저의 응답 정보를 저장하는 객체를 수정하는 함수 */
  const changeUserAnswerHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserAnswer((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === parseInt(event.target.name))
          return { ...obj, answer: event.target.value };

        return obj;
      });

      return newState;
    });
  };

  /** 유저의 검사 점수를 계산하는 함수, 만약 검사 결과가 올바르지 않으면 경고창 */
  const calculateTestScore = () => {
    let score = 0;
    let flag = false;
    userAnswer.map((obj) => {
      if (obj.answer === "") flag = true; // 체크를 하지 않았다면

      if (obj.id === 3) {
        score += obj.answer === "y" ? 0 : 1;
      } else {
        score += obj.answer === "y" ? 1 : 0;
      }
    });

    if (flag) {
      score = NaN;
    }

    return score;
  };

  /** 결과보기 버튼을 눌렀을 때 작동하는 함수*/
  const submitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = calculateTestScore();

    if (Number.isNaN(result)) alert("모든 항목을 체크해주세요.");
    else Router.push(`/selftest/result?score=${result}`, "/selftest/result");
  };

  return (
    <SelfTestHomeTemplate
      userInfo={userInfo}
      setUserSex={changeUserSexHandler}
      setUserAge={changeUserAgeHandler}
      answerData={userAnswer}
      setAnswer={changeUserAnswerHandler}
      onsubmit={submitHandler}
    />
  );
};

export default withHead(
  SelfTestHome,
  "마약 중독 자가진단",
  "마약 중독 자가진단"
);
