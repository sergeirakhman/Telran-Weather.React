import {useSelector} from "react-redux";

const Weather = () => {
    const weather = useSelector(state => state.weatherInfo);
    const message = useSelector(state => state.message);

    if (!weather) {
        return(
            <div className={'infoWeath'}>{message}</div>
        )
    }
    else {
        return (
            <div className="card text-center">
                <div className="card-header"></div>
                <div className="card-body">
                    <p className="card-text">Location: {weather.country}</p>
                    <p className="card-text">Temp: {Math.round(weather.temp)}°C</p>
                    <p className="card-text">Pressure: {weather.pressure}</p>
                    <p className="card-text">Sunset: {weather.sunset?.toLocaleTimeString()}</p>
                </div>
            </div>);
    }
};

export default Weather;