import React from 'react'
const api = {
  key: "a25bf647af5a1e26d79456d892a32166",
  base: "http://api.openweathermap.org/data/2.5/"
}

const App = () => {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()] //Returns 1-7 to choose a day Monday-Sunday
    let date = d.getDate(); 
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
 }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
        </div>
        <div className="location-box">
          <div className="location">
            New York City, USA
          </div>
          {/* <div className="date">{dateBuilder(newDate())}</div> */}
        </div>
        <div className="weather-box">
          <div className="temp">
            15°C
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  )
}

export default App


