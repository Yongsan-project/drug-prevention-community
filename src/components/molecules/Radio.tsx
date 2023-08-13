import CheckLabel from "../atoms/CheckLabel";
import RadioInput from "../atoms/RadioInput";
import Text from "../atoms/Text";
import { ChangeEventHandler } from "react";

interface RadioProps {
  inputValue: string;
  inputName: string;
  content: string;
  styles?: { fontSize: string; fontWeight: string };
  checked: string;
  setChecked: ChangeEventHandler<HTMLInputElement>;
}

const Radio = ({
  inputValue,
  inputName,
  content,
  styles,
  checked,
  setChecked,
}: RadioProps) => {
  return (
    <CheckLabel>
      <RadioInput
        value={inputValue}
        name={inputName}
        checked={checked}
        setChecked={setChecked}
      />
      <Text content={content} styles={styles} />
    </CheckLabel>
  );
};

export default Radio;
