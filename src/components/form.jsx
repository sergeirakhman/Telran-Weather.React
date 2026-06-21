import {useDispatch} from "react-redux";
import {fetchWeather} from "../actions/weatherActions.js";

const Form = () => {

    const dispatch = useDispatch();

    const handleClickSubmit = (event) => {
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        dispatch(fetchWeather(city));
    }

    return (
        <form onSubmit={handleClickSubmit} className={'row m-5'}>
            <div className={'col-auto'}>
                <input type={"text"} name={"city"} className={'form-control text-uppercase'} placeholder={"City name"} />
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