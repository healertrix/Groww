import { Link } from "react-router-dom";
const TableRow = ({ content }) => {
  const { Address, Branch, IFSC, Bank } = content;
  return (
    <>
      <tr className="">
        <td className="border	 text-center	align-middle	">
          <Link to={`/bank-details/${IFSC}`}>{Bank}</Link>
        </td>

        <td className="border text-center	align-middle">
          <Link to={`/bank-details/${IFSC}`}>{IFSC} </Link>
        </td>

        <td className="border text-center	align-middle">
          <Link to={`/bank-details/${IFSC}`}>{Branch}</Link>
        </td>
        <td className="border text-center	align-middle">
          <Link to={`/bank-details/${IFSC}`}>{Address}</Link>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
