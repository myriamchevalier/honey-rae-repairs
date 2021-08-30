import React from "react"
import { ApplicationViews } from "./ApplicationViews.js"
import { NavBar } from "./nav/NavBar.js"



export const Repairs = () => {
    return (
        <>  
            <NavBar/>
            <h1>Honey Rae's Repair Shop</h1>
                <ApplicationViews/>
            </>
    )
}