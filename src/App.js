import React, {useState, useEffect} from 'react';
import Api from "./Components/api.js"
import Sidebar from "./Components/slide.js";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import axios from "axios";

import './App.scss';







const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;





function App() {
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState("")
    const [realFeel, setRealFeel] = useState("");

    useEffect(() => {
    axios
    .get("http://dataservice.accuweather.com/currentconditions/v1/330289?apikey=gl1kPHFBQKns6clBxYMp19MgsbXr9aKc&language=en-us&details=true")
    .then(response => {
      setWeather(response.data[0]);
      setTemperature(response.data[0].Temperature.Imperial);
      setRealFeel(response.data[0].RealFeelTemperature.Imperial)
    })
    .catch(error => {
      console.log("Something went Wrong!", error)
    })
  }, []);




  return (
    <div className = "Top">
      <MainContainer>
      <Api weather = {weather} temperature = {temperature} realFeel = {realFeel}></Api>
      <Sidebar></Sidebar>
      </MainContainer>
    </div>
  );
}

export default App;
