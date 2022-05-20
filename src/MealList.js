import React from "react";
import { Meal } from "./Meal";

export default function MealList(props) {
    

    
    return (
       
       
       <main>
        <section className= "nutrients">
        <ul>
            {props.Meal}
        </ul>
        </section>
        </main>
    );
}
