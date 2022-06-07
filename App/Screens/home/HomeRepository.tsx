import axios from 'axios';
import React, {useState, useEffect} from 'react';

function FetchData(setIsLoading, setData) {

  const fetchData = async () => {
    setIsLoading(true);
    console.log('SJ data requested');

    axios
      .get('https://6299936c7b866a90ec3e0000.mockapi.io/movies/movies')
      .then(response => {
        // console.log('getting data from axios', response.data);
        setTimeout(() => {
          setIsLoading(false);
          setData(response.data);
          
        }, 2000);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });

    console.log('SJ data retured');
  };

  fetchData();
}
export default FetchData;
