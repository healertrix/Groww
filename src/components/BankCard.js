import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
 import CardOfBank from "./CardOfBank";
const BankCard = () => {
  const { id } = useParams();
  const { error, isPending, data } = useFetch(
    "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
  );
  let cardData = 0;
  if (!isPending) {
    cardData = data.filter((content) => content.ifsc == id);
    console.log(cardData[0]);
    }
    console.log(isPending);

    return (
      <>
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
