import { useState } from "react";
import Table from './components/Table';
import useFetch from './useFetch';
import ReactPaginate from "react-paginate";

const Body = () => {

  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const { error, isPending, data } = useFetch(
    "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
  );
console.log(error);
  const handlePageClick = ({ selected: selectPage }) => {
    console.log("selected page", selectPage);
    setCurrentPage(selectPage);
  };

  const offset = currentPage * perPage;
  console.log(offset);
  // console.log(data)
    let pageCount = 10;
    let currentData=[];
    if (!isPending) {
   pageCount = Math.ceil(data.length / perPage);

 currentData = data.slice(offset, offset + perPage);

    }

  
    

  return (
    <>
      {!isPending && (
        <div className="m-2">
          <Table bank_data={currentData} />
        </div>
      )}
      {!isPending && (
        <div className="mt-5 mb-20">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      )}
    </>
  );
};

export default Body;