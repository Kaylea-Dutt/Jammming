import './App.css';

function App() {

const CLIENT_ID = "5185c6db0d36414d892de9fe5afa1dba";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

  return (
    <div className="App">
      <h1>Spotify App</h1>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>login to spotify</a>
    </div>
  );
}

export default App;
