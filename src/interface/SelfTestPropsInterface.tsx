import { ChangeEvent, ChangeEventHandler, FC, FormEventHandler } from "react";

export interface SelfTestProps {
  userInfo: { sex: string; age: number };
  answerData: { id: number; answer: string; question: string }[];
  setUserSex: ChangeEventHandler<HTMLInputElement>;
  setUserAge: ChangeEventHandler<HTMLInputElement>;
  setAnswer: ChangeEventHandler<HTMLInputElement>;
  onsubmit: FormEventHandler<HTMLButtonElement>;
}

export interface UserInfoProps {
  userInfo: { sex: string; age: number };
  setUserSex: ChangeEventHandler<HTMLInputElement>;
  setUserAge: ChangeEventHandler<HTMLInputElement>;
}

export interface TableDataProps {
  answerData: { id: number; answer: string; question: string }[];
  setAnswer: ChangeEventHandler<HTMLInputElement>;
}
