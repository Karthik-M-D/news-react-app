import React, { useState } from 'react';
import search from '../assets/search.png';
import clear from '../assets/clear.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';
import drizzle from '../assets/drizzle.png';
import mist from '../assets/mist.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import clouds from '../assets/clouds.png';
import '../styles/weather.css';
import Header from '../components/Header'
import Footer from '../components/Footer'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const Weather = () => {
    const [weather, setWeather] = useState(null); // Initialize to null instead of an empty array
    const [cityName, setCityName] = useState('');
    const [weatherImg, setWeatherImg] = useState('');

    const apiKey = API_KEY;

    const checkWeather = async () => {
        try {
            const resp = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
            );
            if (!resp.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await resp.json();
            setWeather(data);
            selectImg(data.weather[0].main);
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
        }
    };

    const selectImg = (whtr) => {
        if (whtr === "Clouds") {
            setWeatherImg(clouds);
        } else if (whtr === "Clear") {
            setWeatherImg(clear);
        } else if (whtr === "Rain") {
            setWeatherImg(rain);
        } else if (whtr === "Snow") {
            setWeatherImg(snow);
        } else if (whtr === "Drizzle") {
            setWeatherImg(drizzle);
        } else if (whtr === "Mist") {
            setWeatherImg(mist);
        } else {
            setWeatherImg(clouds);
        }
    }

    return (
        <>
            <Header />
            <div className='weather_main'>
                <div className='weather_container'>
                    <div className='search_box'>
                        <input
                            type='text'
                            placeholder='Enter city name...'
                            value={cityName}
                            onChange={(e) => setCityName(e.target.value)}
                        />
                        <button onClick={checkWeather}>
                            <img src={search} alt='Search' />
                        </button>
                    </div>
                    {weather ? ( 
                        <>
                            <div className='climate'>
                                <img src={weatherImg} alt='Weather Icon' />
                                <h1>{(weather.main.temp - 273.15).toFixed(2)}</h1>
                                <h3>{weather.name}, {weather.sys.country}</h3>
                            </div>
                            <div className='pos'>
                                <p>Latitude:{weather.coord.lat}</p>
                                <p>Longitude:{weather.coord.lon}</p>
                            </div>
                            <div className='climate_conatiner'>
                                <div className='humidity_container'>
                                    <img src={humidity} alt='Humidity Icon' />
                                    <div className='cl_box'>
                                        <h4>{weather.main.humidity}%</h4>
                                        <h6>Humidity</h6>
                                    </div>
                                </div>
                                <div className='wind_container'>
                                    <img src={wind} alt='Wind Icon' />
                                    <div className='cl_box'>
                                        <h4>{weather.wind.speed} km/h</h4>
                                        <h6>Wind Speed</h6>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className='orp'>Enter a city name and click the search button to get weather data.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Weather;
