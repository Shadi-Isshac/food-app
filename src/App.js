import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Component } from "react";
import React, {useState} from "react";
import MealList from "./MealList";

function App() {

  const [meal, setMeal] = useState(null);
  const [calories, setCalories] = useState("2000");

  function handleChange (e) {
    setCalories(e.target.value);

  }
useEffect(() => {
  getMeal()
},[])
  function getMeal (){
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d299386456af4cce8794dafca7cc4f14`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }


  return(
    <div>
      <section className="userData">
      <input
      type= "number"
      placeholder="Calories"
      onChange = {handleChange} />

      </section>


    

   </div>
  );
  
  }
export default App;
   


