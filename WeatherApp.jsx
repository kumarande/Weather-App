import React, { useState } from 'react' 
import './WeatherApp.css'

import search_icon from '../Assests/search.png'
import clear_icon from '../Assests/clear.png'
import cloud_icon from '../Assests/cloud.png'
import drizzle_icon from '../Assests/drizzle.png'
import rain_icon from '../Assests/rain.png'
import snow_icon from '../Assests/snow.png'
import wind_icon from '../Assests/wind.png'
import humidity_icon from '../Assests/humidity.png'
import { useScrollTrigger } from '@mui/material'

const WeatherApp = () => {

    let api_key = "99aa0546e06c39e6120b92776b651881";

    const search = async() =>{
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==='')
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;


        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp)+"℃";
        location[0].innerHTML = data.name;
    }
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='Search' />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt=''/>
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24℃</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherApp