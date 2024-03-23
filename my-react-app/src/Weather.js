import React, {useState, useEffect} from "react";
import axios from 'axios';
import moment from 'moment';
import { WiDaySunny, WiRain, WiSnow, WiCloudy, WiDayCloudy, WiFog, WiThunderstorm } from 'react-icons/wi';

const Weather = ({location}) => {
    const [weatherData, setWeatherData] = useState(null);
   
useEffect(()=>{
    async function fetchWeatherData() {
        const apiKey = 'fe898aef696ea1be33f52fa4a843fdbe';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
    }
    fetchWeatherData();

}, [location]);
    
if (!weatherData) {    
    return null;    
}

    const temperature = Math.round(weatherData.main.temp);
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const icon = getIcon(iconCode);
    const date = moment().format('dddd, MMMM Do YYYY');
    return(
        <div className="weather">
            <div className="weather-header">
                <h2 className="weather-location">{location}</h2>
                <p className="weather-date">{date}</p>
            </div>

            <div className="weather-body">
                <div className="weather-temperature">{temperature}°C</div>
                <div className="weather-icon">{icon}</div>
                <div className="weather-description">{description}</div>
            </div>
        </div>
        );
    };
            const getIcon = (iconCode) => {
              switch (iconCode) {
                case '01d':
                    return <WiDaySunny />;
                case '01n':
                    return <WiDaySunny />;
                case '02d':
                    return <WiDayCloudy />;
                case '02n':
                    return <WiDayCloudy />;
                case '03d':
                case '03n':
                    return <WiCloudy />;
                case '04d':
                case '04n':
                    return <WiCloudy />;
                case '09d':
                case '09n':
                    return <WiRain />;
                case '10d':
                case '10n':
                    return <WiRain />;
                case '11d':
                case '11n':
                    return <WiThunderstorm />;
                case '13d':
                case '13n':
                    return <WiSnow />;
                case '50d':
                case '50n':
                    return <WiFog />;
                default:
                    return null;
            }
        };
        export default Weather;

