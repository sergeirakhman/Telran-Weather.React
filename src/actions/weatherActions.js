import {API_KEY, baseUrl} from "../utils/weatherApi.js";

export const SET_WEATHER = "SET_WEATHER";
export const SET_MESSAGE = "SET_MESSAGE";

export const setWeather = weather => ({
    type: SET_WEATHER,
    payload: weather
})
export const setMessage = message => ({
    type: SET_MESSAGE,
    payload: message
})

export const fetchWeather = city => (async (dispatch) => {

    try {
        const response = await fetch(`${baseUrl}/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);

        if (!response.ok) {
            throw new Error("Failed to fetch weather.");
        }

        const data = await response.json();

        dispatch(setWeather({
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: new Date(data.sys.sunset * 1000),
        }));
        dispatch(setMessage(""));
    }
    catch (error) {
        console.log(error);
        dispatch(setWeather({}))
        dispatch(setMessage("Enter correct city name"));
    }
});