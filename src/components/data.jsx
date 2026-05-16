import Form from "./form.jsx";
import Weather from "./weather.jsx";
import {API_KEY, baseUrl} from "../utils/weatherApi.js";
import React from "react";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = React.useState(null);
    const [city, setCity] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const getWeather = async (city)  => {
        if (!city) {
            setMessage('Enter city name.');
            setWeatherInfo(null);
            return;
        }

        setCity(city);

        try {
            setIsLoading(true);
            const response = await fetch(`${baseUrl}/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);

            if (!response.ok) {
                throw new Error("Failed to fetch weather.");
            }

            const data = await response.json();

            if (data) {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000),
                })
            }
        }
        catch (error) {
            setWeatherInfo(null);
            setMessage(`${error}`);
        }
        finally {
            setIsLoading(false);
        }
    }

    // const getWeather = (city) => {
    //     fetch(`${baseUrl}/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setWeatherInfo({
    //                 country: data.sys.country,
    //                 city: data.name,
    //                 temp: data.main.temp,
    //                 pressure: data.main.pressure,
    //                 sunset: new Date(data.sys.sunset * 1000),
    //             })
    //             setMessage('');
    //         })
    //         .catch(error => {
    //             console.error('Error fetching weather data:', error);
    //             setMessage('Something went wrong!');
    //         });
    // }
    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather weather={weatherInfo} isLoading={isLoading} city={city} message={message} />
        </div>
    );
};

export default Data;