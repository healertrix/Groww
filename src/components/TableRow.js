const TableRow = ({ content }) => {
    const { Address, Branch, IFSC, Bank } = content;
  return (
    <>
      <tr className="">
        <td className="border text-center	align-middle	">{Bank}</td>
        <td className="border text-center	align-middle">{IFSC}</td>
        <td className="border text-center	align-middle">{Branch}</td>
        <td className="border text-center	align-middle">{Address}</td>
      </tr>
    </>
  );
};

export default TableRow;
