

import './App.css';
import Routers from './Routers/routes';
import {Navbar} from "./Navbar";

import {setAuthToken} from "./Helpers/setAuthToken";

function App() {

  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }

  return (
    <div className="App">
      <Navbar />
      <Routers/>
    
    </div>
  );
}

export default App;
