import React, {useState, useEffect} from 'react';
import School from "./Components/school.js"
import Personal from "./Components/personal.js";
import Api from "./Components/api.js"
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import axios from "axios";

import './App.scss';







const MainContainer = styled.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  
  
`;

const LinksContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  margin: 80px 20px 20px 20px;
  padding: 10px;
  border: 3px solid #fefc81;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  opacity: .8;
  
`;

// const Main = styled.div `
//   text-align: center;
//   background-image: url("../Assets/Background/asia-background-beautiful-963040.jpg");
//   background-attachment: fixed;
//   background-size: cover;
//   background-position: center;
//   height: 100vh;


// `;

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



console.log(Object.values(weather));
console.log(weather);

  return (
    <div className = "App">
      <MainContainer>
      <LinksContainer>
      <School></School>
      </LinksContainer>
      <Api weather = {weather} temperature = {temperature} realFeel = {realFeel}></Api>
      <LinksContainer>
      <Personal></Personal>
      </LinksContainer>
      </MainContainer>
    </div>
  );
}

export default App;
