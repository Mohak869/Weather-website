import React, { useState } from 'react'
import './Weather_App.css'
import axios from 'axios'


function Weather_App() {
    const [city,setCity] = useState();
    const [weather,setWeather]=useState();
    function handleChange(event){
        setCity(event.target.value);
    }   
    const featchWeather = async ()=>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'778a7eb7dd2c413d1256afb031ee0488'}`)
            console.log(response)
            setWeather(response);
        }
        catch(error){
             console.log("featch error ",error);
        }
    }
    function handleClick(){
      featchWeather();
    }
   
  return (
    <div>
      <div className='Container' >
      
        <h3>Weather App</h3> 
        
         <input type="text" placeholder='Enter city'value={city} onChange={handleChange} />
         
         <button onClick={handleClick}> get Weather </button>
      
        {weather && <>
         <h3>{weather.data.name}</h3>
           Temperature: {(weather.data.main.temp - 273.15).toFixed(2)}°C
          <p>{weather.data.weather[0].description}</p>
        </>}
      </div>
    </div>
  )
}

export default Weather_App
