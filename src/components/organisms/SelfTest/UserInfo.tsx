import styled from "styled-components";
import Radio from "@/components/molecules/Radio";
import Text from "@/components/atoms/Text";
import { UserInfoProps } from "@/interface/SelfTestPropsInterface";

const UserInfo = ({ userInfo, setUserSex, setUserAge }: UserInfoProps) => {
  return (
    <StyledContainer>
      <StyledWrap>
        <StyledTextWrap>
          <Text
            content="성별"
            styles={{ color: "white", fontWeight: "bold", fontSize: "16px" }}
          />
        </StyledTextWrap>
        <Radio
          inputName="sex"
          inputValue="male"
          content="남자"
          checked={userInfo.sex}
          setChecked={setUserSex}
        />
        <Radio
          inputName="sex"
          inputValue="female"
          content="여자"
          checked={userInfo.sex}
          setChecked={setUserSex}
        />
      </StyledWrap>

      <StyledWrap>
        <StyledTextWrap>
          <Text
            content="나이"
            styles={{ color: "white", fontWeight: "bold", fontSize: "16px" }}
          />
        </StyledTextWrap>
        <StyledInput type="number" name="age" onChange={setUserAge} />
        <p>세</p>
      </StyledWrap>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 80%;
  height: 8vh;
  background-color: smokewhite;
  border: 1px solid black;
  border-top: 2px solid black;
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 16vh;
    align-items: start;
  }
`;

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledTextWrap = styled.div`
  background-color: #40699d;
  height: 8vh;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 18px;
  width: 15%;
  border: 1px solid black;
  margin-left: 5rem;
`;

export default UserInfo;
