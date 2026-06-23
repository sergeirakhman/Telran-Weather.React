import {useDispatch} from "react-redux";
import {fetchWeather} from "../actions/weatherActions.js";
import {useState} from "react";

const Form = () => {
    const [city, setCity] = useState("");

    const dispatch = useDispatch();

    const handleClickSubmit = (event) => {
        event.preventDefault();
        setCity(event.currentTarget.city.value.trim());
        dispatch(fetchWeather(city));
        setCity("");
    }

    return (
        <form onSubmit={handleClickSubmit} className={'row m-5'}>
            <div className={'col-auto'}>
                <input type={"text"} name={"city"} value={city} className={'form-control text-uppercase'} placeholder={"City name"} />
                <div className={"invalid-feedback"}>
                    Please choose a username.
                </div>
            </div>
            <div className={'col-auto'}>
                <button type={"submit"} className={'btn btn-primary'}>Get weather</button>
                </div>
        </form>
    );
};

export default Form;