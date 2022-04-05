import  TableRow  from "./TableRow";
const Table = ({ bank_data ,city}) => {

  const dataFilter = (bank_data) => {
    const data = [];
    bank_data.map(bank => {
       const {
         address: Address,
         bank_id: Bank_id,
         bank_name: Bank,
         branch: Branch,   
         ifsc: IFSC,  
      } = bank;
      
      const content = {
        Address,
        Bank_id,
        Bank,
        Branch,
        IFSC,
      };
      data.push(content);
      
    })

    return data;
  };

  const res = dataFilter(bank_data);
  console.log(res);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="border text-center	align-middle">Bank</th>
              <th className="border text-center	align-middle">IFSC</th>
              <th className="border text-center	align-middle">Branch</th>
              <th className="border text-center	align-middle">Address</th>
            </tr>
          </thead>
          <tbody>
            {res.map((content, i) => (
              <TableRow key={i} content={content} city={ city} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
