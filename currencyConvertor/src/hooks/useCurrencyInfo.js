import React, { useEffect, useState } from 'react'

function useCurrencyInfo({currency}) {
    const [data,setData] = useState({});

  return (
    useEffect(()=>{
        const value = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        const newValue = value.json();
        newValue.then((res)=> setData(res[currency]));
        console.log(data);
    },[currency])
  )

  console.log(data);
  return data;
}

export default useCurrencyInfo