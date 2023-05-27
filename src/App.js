import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import React , {useState} from 'react'

function App() {

  const [mode, setMode] = useState("light");

  const ToggleMode = () => {
    if (mode ==="dark") {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#3d454c"
      document.body.style.color = "white"
    }
  }
  
      
  return (
    <>
    
      <Navbar mode={mode} togglemode={ToggleMode} />
      <Alert />
      <Textarea heading="Enter text below"  />
   
    </>
  );
}
export default App;
