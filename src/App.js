import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Component } from "react";
import React, { useState } from "react";
import MealList from "./MealList";

function App() {
  const [meal, setMeal] = useState([]);
  const [calories, setCalories] = useState("2000");

  function handleChange(e) {
    setCalories(e.target.value);
  }

  useEffect(() => {
    getMeal();
  }, []);

  function getMeal() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=e334cd6dcac847b186d691a310bba213`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.results);
      })
      .catch(() => {
        console.log("error");
      });
  }

  const mealArr = meal.map((meal, key) => {
    if (key < 3) {

      return (
        <li key = {key}>
      
        <h1>Meal {key + 1}</h1>
        <h2>{meal.title}</h2>
        <img src={meal.image}/>
      </li>
    )
  } else {
    return
  }
  })

  return (
    <div>
      <section className="userData">
        <input type="number" placeholder="Calories" onChange={handleChange} />
      </section>
      <button onClick={getMeal}>Get Meal Plan</button>
      <MealList Meal={mealArr} />
    </div>
  );
}

export default App;
