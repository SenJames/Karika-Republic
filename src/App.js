import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import Home from "./Pages/Home";

function App() {
  const [landing, setLanding ] =  useState(false)
  const [secondLand, setSecondLand ] = useState(false)
  const [seconds, setSeconds ] = useState(8)


  useEffect(() =>{

    const timer = seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    if(seconds === 5){
      setLanding(true)
    }
    else if(seconds === 0){
      setSecondLand(true)
      // setSecondLand(false)
    }
    
    return () => clearInterval(timer);
    
  }, [seconds])

  if(landing === false){
    return (
      <BrowserRouter>
        <FirstScreen />
      </BrowserRouter>
    )
  }
  else if(landing === true && secondLand === false){
    return (
      <BrowserRouter>
        <SecondScreen />
      </BrowserRouter>
    )
  }
  else if(landing === true && secondLand === true){

    return (
      <BrowserRouter>
        
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
