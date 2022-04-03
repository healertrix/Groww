import { useState, useEffect } from "react";
import Table from './components/Table';
import useFetch from './useFetch';

const Body = () => {
      const { error, isPending, data } = useFetch(
        "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
    );
    // const [start, setStart] = useState(0);
    
    return ( 
        <>
           { !isPending &&<Table bank_data={data } />}
        </>
     );
}

export default Body;