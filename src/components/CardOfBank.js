import {Link} from "react-router-dom";
const CardOfBank = ({ bank_name, ifsc, branch, address,city,district,state }) => {
    return (
      <>
        <>
          <div className="w-0.85 h-full card	bg-base-100 shadow-xl  flex gap-3 m-2 p-2">
            <div className="text-center text-3xl underline mb-5	">Bank Details</div>
            <div className="flex gap-2 m-2">
              <p className=" decoration-2 font-bold	">BANK NAME : </p>
              <p>{bank_name} </p>
            </div>
            <div className="flex gap-2 m-2">
              <p className=" decoration-2 font-bold	">IFSC : </p>
              <p> {ifsc} </p>
            </div>
            <div className="flex gap-2 m-2">
              <p className=" decoration-2 font-bold	">Branch : </p>
              <p> {branch} </p>
            </div>
            <div className="flex gap-2 m-2">
              <p className=" decoration-2 font-bold	">City </p>
              <p>{city}</p>
            </div>
            <div className="flex gap-2 m-2">
              <p className=" decoration-2 font-bold	">District : </p>
              <p>{district}</p>
            </div>
            <div className="flex gap-2 m-2">
              <p className=" decoration-2 font-bold	">State : </p>
              <p>{state}</p>
            </div>
            <div className="flex gap-2 m-2">
              <p className=" decoration-2 font-bold	">Address : </p>
              <p>{address}</p>
            </div>
            <Link to="/">
              <div className="card-actions flex gap-2 m-2">
                <button className="btn btn-primary">Back To Home</button>
              </div>
            </Link>
          </div>
        </>
      </>
    );
}
 
export default CardOfBank;