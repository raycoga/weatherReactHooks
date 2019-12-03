import React from "react";

const WeatherResult = ({ result }) => {
  const { name, main } = result;
  if (!name)
    return null; /* al colocar esta linea, se retornara null si no encuentra un name  */
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>
          El clima de {name} es:{" "}
        </h2>
        <p className="temperatura" > 
        {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
        </p >
        <p >
          High Temp: {parseInt(main.temp_max - kelvin, 10)} &#x2103;
        </p>
        <p >
          Min Temp: {parseInt(main.temp_min - kelvin, 10)} &#x2103;
        </p>
      </div>
    </div>
  );
};

export default WeatherResult;
