import React from 'react';
import logo from './logo.svg';
import './App.css';



var unirest = require("unirest");

var req = unirest("GET", "https://live-score-api.p.rapidapi.com/scores/live.json");

req.query({
	"secret": "SUO28Q4IUpKrGECj",
	"key": "jQw0shEhvuPFXn5PiURrKW9FmU72zKlS"
});

req.headers({
	"x-rapidapi-host": "live-score-api.p.rapidapi.com",
	"x-rapidapi-key": "583e725f2bmsh624049e1dea4a67p1955aejsn6a2ab3c40cae"
});


req.end(function (res) {
	console.log(res.body);
});

var x = JSON.loads(req.text)

function App() {
  return (
    
    <body>
      <h1>Football - Score</h1>
      <table>
        <td>Home</td>
        <td>Score</td>
        <td>Away</td>
      <div>
      {(x['comments'][0]['message'])}
      </div>
      </table>
    </body>
  )
}

export default App;
