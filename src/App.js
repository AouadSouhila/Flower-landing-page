import React, {useState} from "react";
import DropDown from "./components/DropDown";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyle";



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <GlobalStyle/>
    <NavBar toggle={toggle}/>
    <DropDown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={SliderData}/>
    </>

  );
}

export default App;
