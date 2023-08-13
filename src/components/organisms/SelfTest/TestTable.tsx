import Table from "@/components/atoms/Table";
import SelfTestTableHeader from "@/components/molecules/SelfTest_TableHeader";
import { TableDataProps } from "@/interface/SelfTestPropsInterface";
import TableRow from "@/components/atoms/TableRow";
import TableData from "@/components/atoms/TableData";
import Radio from "@/components/molecules/Radio";
import styled from "styled-components";

const TestTable = ({ answerData, setAnswer }: TableDataProps) => {
  return (
    <Table>
      <colgroup>
        <col width="10%" />
        <col width="70%" />
        <col width="10%" />
        <col width="10%" />
      </colgroup>
      <tbody>
        <SelfTestTableHeader />
        {answerData.map(
          (object: { id: number; answer: string; question: string }) => (
            <TableRow key={object.id}>
              <TableData content={object.id.toString()} />
              <TableData content={object.question} />
              <StyledTabldData colSpan={2}>
                <Radio
                  inputValue="y"
                  inputName={object.id.toString()}
                  content="예"
                  checked={object.answer}
                  setChecked={setAnswer}
                />
                <Radio
                  inputValue="n"
                  inputName={object.id.toString()}
                  content="아니요"
                  checked={object.answer}
                  setChecked={setAnswer}
                />
              </StyledTabldData>
            </TableRow>
          )
        )}
      </tbody>
    </Table>
  );
};

const StyledTabldData = styled.td`
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export default TestTable;
