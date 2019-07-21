import React from "react";
import styled from "styled-components";


const WeatherDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    justify-content: flex-start;
    margin: 80px auto auto auto;
    background-color: #fefc81;
    opacity: .8;
    padding: 5px;
    border: 2px solid gold;
    border-radius: 20px;
    box-shadow: 5px 5px 10px black;

    

`;

const WeatherInfo = styled.div `
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
    width: 100%;
`;

const Span = styled.span `
    font-size: 1.4rem;
    font-weight: bolder;
    text-align: center;
    
`;
const Paragraph = styled.p `
    font-size: 1.2rem;

`;


function Api(props) {
  return (
    <>
    <WeatherDiv>
      <h1>Lancaster, PA</h1>
      <iframe src="http://free.timeanddate.com/clock/i6uvqc1t/n4561/fs18/tcfefc81/ftb/tt0/tw1/tm1/tb4" frameborder="0" width="160" height="44" ></iframe>
      <Paragraph><Span>{props.weather.WeatherText}</Span></Paragraph>
      <WeatherInfo>
      <Paragraph>Temperature: <Span>{props.temperature.Value}°</Span></Paragraph>
      <Paragraph>Real Feel: <Span>{props.realFeel.Value}°</Span></Paragraph>
      <Paragraph>Humidity: <Span>{props.weather.RelativeHumidity}</Span></Paragraph>
      </WeatherInfo>
    </WeatherDiv>
    </>
  );
}

export default Api;
