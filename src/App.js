import React, { useState,useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import WeatherResult from "./components/WeatherResult";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult]=useState({})
  useEffect(() => {
    /* Para prevenir la ejecucion por primera vez de este useEffect, se usa una condicional */
    if(city==='') return /* Con est ya se previene q se ejecute todo */
    const apiQuery = async () => {
      /* Como es una consulta a una api, la funcion se hace async */
      const appId = "ae4a53c3bd482314b5a00ab9f1a44870";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
      const response = await fetch(url)
      const result = await response.json()
      setResult(result)
  
    };
    apiQuery()
  }, [city,country]);


  const dataConsult = data => {
    if (data.city === "" || data.country === "") {
      setError(true);
      return;
    }
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  };



  /* Cargar un component condicionalmente */
  let component;
  if (error) {
    /* Existe error, se debera de mostrar */
    component = <Error message="Both fields are required" />;
  }else if(result.cod==='404'){
    component= <Error message={result.message} />;
  } else {
    /* No existe error, se debera de mostrar el clima*/
    component = <WeatherResult result={result}/>;
  }

  return (
    <div className="App">
      <Header title="Weather React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form dataConsult={dataConsult} />
            </div>
            <div className="col s12 m6">
              {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
