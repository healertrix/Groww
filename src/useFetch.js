import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    // const city = url.slice(50)
    // console.log(city);
    // if (localStorage.getItem(`data+${city}`) !== null) {
    //   setIsPending(false);
    //   const data = JSON.parse(localStorage.getItem(`data+${city}`));
    //   console.log(data);
    //   setData(data);
    //   setError(null);
    //   return () => abortCont.abort();
    // }

    // else { 

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          // console.log("fetch aborted");
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }


      });

    // abort the fetch
    return () => abortCont.abort();
  // }
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
