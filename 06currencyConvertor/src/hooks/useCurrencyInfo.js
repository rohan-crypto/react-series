import { useEffect, useState } from "react";

// creating custom hook
function useCurrencyInfo(currency){

    const[data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },
     [currency]);

    //this data will store required data i.e. value 1 currency in other currencies
    console.log(data);
    return data;
}

export default useCurrencyInfo;