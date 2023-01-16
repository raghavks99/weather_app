import React, { useState } from 'react'
import './Search.css'
// import SearchResult from './SearchResult'
function Search({ onSearchChange }) {
    const [cityName, setCity] = useState("");
    let cityName1 = "";
    const handleInput = (e) => {
        setCity(e.target.value);
    }

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     cityName1 = cityName;
    //     console.log(cityName1)
    //     setCity('');
    // }

    const geo_api_options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '176030f1f5msh6e05d2a1a6879edp160b4bjsn90969f4643ab',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      }

      const loadData = () => {
        return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`, geo_api_options)
        .then(response => response.json())
        .then(response => {
            setCity('');
              console.log(response)
              document.getElementById("cityName").innerHTML = response.cityName;
              document.getElementById("cloud_pct").innerHTML = "Cloud Precipitation : "+JSON.stringify(response.cloud_pct);
              document.getElementById("feels_like").innerHTML = "Feels Like :"+JSON.stringify(response.feels_like);
              document.getElementById("humidity").innerHTML = "Humidity : "+JSON.stringify(response.humidity);
              document.getElementById("max_temp").innerHTML = "Maximum Temerature : "+JSON.stringify(response.max_temp);
              document.getElementById("min_temp").innerHTML = "Minimum Temperature : "+JSON.stringify(response.min_temp);
              document.getElementById("temp").innerHTML = "Temperature : "+JSON.stringify(response.temp);
              document.getElementById("wind_degrees").innerHTML = "Wind Degrees : "+JSON.stringify(response.wind_degrees);
              document.getElementById("wind_speed").innerHTML = "Wind Speed : "+JSON.stringify(response.wind_speed);
              }
        )
        .catch(err => console.error(err));
      };

    return (
        <div className='weather-data'>
            <input className='search-bar' placeholder='City Name' value={cityName} onChange={handleInput}></input>
            <button onClick={loadData} className = "button" type = "submit">Search</button>
            <h2 id='cityName'>{cityName1}</h2>
            <div><span id = "temp"></span></div>
            <div><span id = "cloud_pct"></span></div>
            <div><span id = "feels_like"></span></div>
            <div><span id = "humidity"></span></div>
            <div><span id = "max_temp"></span></div>
            <div><span id = "min_temp"></span></div>
            <div><span id = "temp"></span></div>
            <div><span id = "wind_degrees"></span></div>
            <div><span id = "wind_speed"></span></div>  
        </div>
    );
}
export default Search;
