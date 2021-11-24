import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SecondScreen from "./components/SecondScreen";
import Home from "./Pages/Home";

function App() {
  const [landing, setLanding ] =  useState(false)
  const [seconds, setSeconds ] = useState(3)


  useEffect(() =>{

    const timer = seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    if(seconds === 2){
      setLanding(true)
    }
    return () => clearInterval(timer);
    
  }, [seconds])

  if(landing === false){
    return (
      <BrowserRouter>
        <SecondScreen />
      </BrowserRouter>
    )
  }
  else {

    return (
      <BrowserRouter>
        
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
