import styled from "styled-components";

interface TableHead {
  content: string;
  lastChild?: boolean;
}

const TableHead = ({ content, lastChild }: TableHead) => {
  return (
    <StyledTableHead $lastchild={lastChild ? 1 : 0}>{content}</StyledTableHead>
  );
};

const StyledTableHead = styled.th<{ $lastchild: number }>`
  padding: 1rem;
  font-size: 15px;
  background: #40699d;
  color: #fff;
  position: relative;

  &:: before {
    content: "";
    position: absolute;
    top: 25%;
    right: 0;
    width: 1px;
    height: 50%;
    background: #fff;
    display: ${(props) => (props.$lastchild ? "none" : "block")};
  }
`;

export default TableHead;
