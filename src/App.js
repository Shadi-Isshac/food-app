import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Form from "./Components/Form";
import { Component } from "react";
import React, {useState} from "react";
import MealList from "./MealList";

function App() {

  const [meal, setMeal] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange () {

  }

  function getMeal (){

  }

  

  return (

   <div className="App">

  <section className= "userData">
      <input type= "number"
      placeholder ="Calories" 
      onChange = {handleChange}/>
      </input>
      </section>
      <button onClick={getMeal}> Get Meal Plan</button>

</div>
  

export default App;

   


