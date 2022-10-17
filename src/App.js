import axios from "axios";
import { useState, useEffect } from "react";

import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

import "./App.css";
const App = () => {
  const [todayData, setTodayData] = useState(null);

  function getLocation() {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      // console.log(latitude, longitude);
      getWeather(latitude, longitude);
    };

    const error = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  useEffect(() => {
    getLocation();
  }, []);

  function getWeather(lat, lon) {
    // console.log(lat, lon);
    const API_key = "e416be1f249467ff1237c0b4e24aedd7";
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

    axios
      .get(url)
      .then((res) => {
        const data = res.data.list;
        setTodayData(data[0]);
        console.log(todayData);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }
  return (
    <div className="App">
      <Aside />
      <Main />
    </div>
  );
};

export default App;
