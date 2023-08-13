import styled from "styled-components";

interface TableProps {
  children: JSX.Element[] | JSX.Element;
}

const Table = ({ children }: TableProps) => {
  return (
    <StyledTable cellSpacing="0" cellPadding="0">
      {children}
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 80%;
  border-top: 2px solid #000;
  margin: 30px auto 0px;
  border: 1px solid #ccc;
`;

export default Table;
