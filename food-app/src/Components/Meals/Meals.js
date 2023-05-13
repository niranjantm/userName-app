import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import React from "react";

export default function Meals(){
    return(
        <React.Fragment>
        <MealsSummary></MealsSummary>
        <AvailableMeals></AvailableMeals>
        </React.Fragment>
    )
}