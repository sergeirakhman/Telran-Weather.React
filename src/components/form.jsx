import React from 'react';

const Form = ({getWeather}) => {
    const handleClickSubmit = (event) => {
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        getWeather(city);
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