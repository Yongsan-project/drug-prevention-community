import TableHead from "../atoms/TableHead";
import TableRow from "../atoms/TableRow";

const SelfTestTableHeader = () => {
  return (
    <TableRow>
      <TableHead content="No." />
      <TableHead content="문항" />
      <TableHead content="예" />
      <TableHead content="아니요" lastChild={true} />
    </TableRow>
  );
};

export default SelfTestTableHeader;
