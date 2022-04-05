import { useState } from "react";
import Table from "./components/Table";
import useFetch from "./useFetch";
import ReactPaginate from "react-paginate";
import DropDown from "./components/DropDown";
import Search from "./components/Search";
import CircularIndeterminate from './components/Loader'
import Perpage from './components/Perpage'


const Home = () => {
  // const perPage = 10;
  const [perPage,setPerPage]=useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [city, setCity] = useState("MUMBAI");
  const [option, setOption] = useState("ifsc");
  const [search, setSearch] = useState("");
 
  // const { errorr, IsPending, data } = useFetch(
  //   `https://vast-shore-74260.herokuapp.com/banks?city=${city}`
  // );


  let { error, isPending, data } = useFetch(
    `https://vast-shore-74260.herokuapp.com/banks?city=${city}`
  );
  if (data != null) {
      localStorage.setItem(`data+${city}`, JSON.stringify(data));

  }
  let res=[];
  if (localStorage.getItem(`data+${city}`) !== null) {
    //...
    res = JSON.parse(localStorage.getItem(`data+${city}`));
    isPending = false;
  } else {
    isPending = true;
  }



  console.log(error);
  const handlePageClick = ({ selected: selectPage }) => {
    console.log("selected page", selectPage);
    setCurrentPage(selectPage);
  };

  const offset = currentPage * perPage;
  console.log(offset);
  // console.log(data)
  let pageCount = 10;
  let currentData = [];
  if (!isPending) {
    pageCount = Math.ceil(res.length / perPage);

    currentData = res.slice(offset, offset + perPage);
    console.log(currentData, "currdata");
  }
  console.log(currentData,"currdata");
  const pageData = currentData.filter(
    (content) => (content[option].toUpperCase()).includes(search.toUpperCase())
  );
  console.log(pageData);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  const handleChangeCity = (e) => {
  setCity(e.target.value);
  console.log(e.target.value);
};
  const handleChangeOption = (e) => {
    setOption(e.target.value);
    console.log(e.target.value);
  };
  const handleChangePage = (e) => {
    setPerPage(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center gap-2 m-3">
        <DropDown
          handleChangeCity={handleChangeCity}
          handleChangeOption={handleChangeOption}
          // handleChangePage={handleChangePage}
        />
        <Perpage handleChangePage={handleChangePage} />
        <Search handleSearchChange={handleSearchChange} />
      </div>
      {isPending && <CircularIndeterminate />}
      {!isPending && (
        <div className="m-2">
          <Table bank_data={pageData} city={city} />
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

export default Home;
