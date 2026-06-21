import {API_KEY, baseUrl} from "../utils/weatherApi.js";

export const GET_WEATHERS_REQUEST = "GET_WEATHERS_REQUEST";

export const getWeather = (data) => {
    if (data.weather) {
        const { country, city, temp, pressure, sunset } = data.weather;

        return {
            type: GET_WEATHERS_REQUEST,
            payload: {
                weather: { country, city, temp, pressure, sunset },
                message: data.message,
                loading: data.loading
            }
        };
    }

    return {
        type: GET_WEATHERS_REQUEST,
        payload: {
            weather: null,
            message: data.message,
            loading: data.loading
        }
    };
};

export const fetchWeather = (city) =>
    (async (dispatch) => {

        try {
            const response = await fetch(`${baseUrl}/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);

            if (!response.ok) {
                console.log(5)
                throw new Error("Failed to fetch weather.");
            }

            const data = await response.json();

            dispatch(getWeather({
                weather: {
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000),
                },
                message: "",
                loading: false
            }));
        }
        catch (error) {
            console.log(error.message)
            dispatch(getWeather({
                weather: null,
                message: error.message,
                loading: false
            }))
        }
    });