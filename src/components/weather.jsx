import React from 'react';

const Weather = ({weather, city, message}) => {
    if (!weather) {
        return(
            <div className={'infoWeath'}>{message}</div>
        )
    }
    else {
        return (
            <div className="card text-center">
                <div className="card-header">
                    Weather in {city}
                </div>
                <div className="card-body">
                    <p className="card-text">Location: {weather.country}</p>
                    <p className="card-text">Temp: {Math.round(weather.temp)}°C</p>
                    <p className="card-text">Pressure: {weather.pressure}</p>
                    <p className="card-text">Sunset: {weather.sunset?.toLocaleTimeString()}</p>
                </div>
            </div>
        // <div className={'infoWeath'}>
        //     <p>Location: {weather.country}</p>
        //     <p>Temp: {weather.temp}</p>
        //     <p>Pressure: {weather.pressure}</p>
        //     <p>Sunset: {weather.sunset?.toLocaleTimeString()}</p>
        // </div>
    )
        ;
    }
};

export default Weather;