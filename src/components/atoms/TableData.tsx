import styled from "styled-components";

interface TableDataProps {
  content: string;
}

const TableData = ({ content }: TableDataProps) => {
  return <StyledTableData>{content}</StyledTableData>;
};

const StyledTableData = styled.td`
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

export default TableData;
