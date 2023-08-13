import TableData from "../atoms/TableData";

interface TableDataProps {
  content: string;
}

const SelfTestTableData = ({ content }: TableDataProps) => {
  return <TableData content={content} />;
};

export default SelfTestTableData;
