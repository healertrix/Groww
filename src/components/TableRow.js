import { Link } from "react-router-dom";
const TableRow = ({ content,city }) => {
  const { Address, Branch, IFSC, Bank } = content;
  return (
    <>
      <tr className="">
        <td className="border	 text-center	align-middle	">
          <Link to={`/bank-details/${city}/${IFSC}`}>{Bank}</Link>
        </td>

        <td className="border text-center	align-middle">
          <Link to={`/bank-details/${city}/${IFSC}`}>{IFSC} </Link>
        </td>

        <td className="border text-center	align-middle">
          <Link to={`/bank-details/${city}/${IFSC}`}>{Branch}</Link>
        </td>
        <td className="border text-center	align-middle">
          <Link to={`/bank-details/${city}/${IFSC}`}>{Address}</Link>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
