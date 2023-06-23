import { createContext, useEffect, useState } from "react";

import axios from 'axios'



export const FetchContext = createContext();

export const CountryProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/playlist/videos/',
    params: { id: 'PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr', hl: 'en', gl: 'US' },
    headers: {
      'X-RapidAPI-Key': 'd4e411a616msh6f880d9e7f48de4p14c1a4jsn265b6d0f92e5',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setData(response.data.contents);
    }).catch(function (error) {
      console.error(error);
    })
  }, []);

  return (
    <FetchContext.Provider value={{ data }}>
      {children}
    </FetchContext.Provider>
  )
}
