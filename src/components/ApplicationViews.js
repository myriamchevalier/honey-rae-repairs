import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { Employee } from "./employees/Employee"
import { EmployeeHireForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { Ticket } from "./serviceTickets/Ticket"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <Employee/>
            </Route>

            <Route path="/employees/create">
                <EmployeeHireForm />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>

            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket/>
            </Route>

        </>
    )
}
