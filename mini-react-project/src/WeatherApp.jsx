import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo ] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity:47,
        weather: "haze",
    });

    let updateinfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };


    return (
        <div className="weatherApp">
            <h2><b>Weather</b></h2>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}