import React, {useState} from 'react'
import axios from 'axios'

const MY_API = {
  key: "a25bf647af5a1e26d79456d892a32166",
  base: "http://api.openweathermap.org/data/2.5"
}

const App = () => {
  const [query, setQuery] = useState('')
  const[weather, setWeather] = useState('');

  const search = async (event) => {
    console.log('yyyyy')
    if (event.key !== 'Enter') {
      return
    }

    console.log('enter press here! ')
    try {
      // http://api.openweathermap.org/data/2.5/weather?q=new%20jersey&units=metric&APPID=a25bf647af5a1e26d79456d892a32166
      const response = await axios.get(`${MY_API.base}/weather?q=${query}&units=metric&APPID=${MY_API.key}`)

      const result = response.data
      console.log(result);

      setWeather(result);
      setQuery('');
    } catch(err) {
      console.log(err.message)
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
        {typeof weather.main === "undefined"  && ('')}
        {(typeof weather.main !== "undefined") && (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
          )
        }
      </main>
    </div>
  )
}

export default App
