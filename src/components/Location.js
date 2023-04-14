import React, { useState, useEffect } from 'react';
import { useWeather } from '../context/WeatherContext';
import axios from 'axios';

const CITY_URL = 'https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json';

function Location() {
  const { setCity } = useWeather();
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('İzmir');
  const [inputCity, setInputCity] = useState('');

  useEffect(() => {
    axios.get(CITY_URL)
      .then(res => {
        setCities(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setCity(inputCity || selectedCity);
  };

  const handleSelect = e => {
    setSelectedCity(e.target.value);
    setInputCity('');
  };

  const handleInputChange = e => {
    setInputCity(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
       

        <br/>
         <br/> 
        <input className='input' type="text" value={inputCity} onChange={handleInputChange} />
        <button className='search' type="submit">Search</button>
      </form>
    </div>
  );
}

export default Location;

