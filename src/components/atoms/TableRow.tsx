interface TableRowProps {
  children: JSX.Element[];
}

const TableRow = ({ children }: TableRowProps) => {
  return <tr>{children}</tr>;
};

export default TableRow;
