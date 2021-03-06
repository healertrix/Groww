import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import CardOfBank from "./CardOfBank";
 import CircularIndeterminate from './Loader'
const BankCard = () => {
  const { id,city } = useParams();
  let { error, isPending, data } = useFetch(
    `https://vast-shore-74260.herokuapp.com/banks?city=${city}`
  );
  let res = [];
  if (localStorage.getItem(`data+${city}`) !== null) {
    //...
    res = JSON.parse(localStorage.getItem(`data+${city}`));
    isPending = false;
  } else {
    isPending = true;
  }
  let cardData = 0;
  if (!isPending) {
    cardData = res.filter((content) => content.ifsc == id);
    
    }
 

    return (
      <>
        {isPending && <CircularIndeterminate />}
        {!isPending && (
          <>
            <CardOfBank
              bank_name={cardData[0].address}
              ifsc={cardData[0].ifsc}
              branch={cardData[0].branch}
              address={cardData[0].address}
              city={cardData[0].city}
              district={cardData[0].district}
              state={cardData[0].state}
            />
          </>
        )}{" "}
      </>
    );
  
};

export default BankCard;
