//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
import React from 'react'
import './index.css'

const api = {
  key: "a25bf647af5a1e26d79456d892a32166",
  base: "http://api.openweathermap.org/data/2.5/"
}

const App = () => {
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
      </main>
    </div>
  )
}

export default App


