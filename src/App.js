import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import Home from "./Pages/Home";

function App() {
  useEffect(() =>{
    
  }, [])
  return (
    <BrowserRouter>
      
      <Home />
    </BrowserRouter>
  );
}

export default App;
