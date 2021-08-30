import React from "react"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./employees/EmployeeList.js"
import { NavBar } from "./nav/NavBar.js"
import { TicketList } from "./serviceTickets/TicketList.js"


export const Repairs = () => {
    return (
        <>  
            <NavBar/>
            <h1>Honey Rae's Repair Shop</h1>
            <h2>Customer List</h2>
            <CustomerList />
            <h2>Employee List</h2>
            <EmployeeList />
            <h2>Ticket List</h2>
            <TicketList />
        </>
    )
}