import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

export const Ticket = () => {
    const [ticket, set] = useState({})  // State variable for current ticket object
    const { ticketId } = useParams()  // Variable storing the route parameter
    const [employees, setEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then(set)
        },
        [ticketId]  // Above function runs when the value of ticketId change
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then(
                    (data) => {
                        setEmployees(data)
                    }
                )

        },
        []
    )

    const assignEmployee = (changeEvent) => {

        const newTicketObject = {
        "customerId": parseInt(localStorage.getItem("honey_customer")),
        "employeeId":parseInt(changeEvent.target.value),
        "description": ticket.description,
        "emergency": ticket.emergency,
        "dateCompleted": ticket.dateCompleted
        }

        fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicketObject)
        })
        .then(
            () => {
                history.push("/tickets")
            }
        )
    }

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to 
                    <select id="employee" value={ticket.employeeId} onChange={ assignEmployee }>
                        {
                            employees.map((employee) => {
                                return <option value={employee.id} key={`employee--${employee.id}`}>
                                    {employee.name}
                                </option>
                            })
                        }
                    </select>
                </div>
            </section>
        </>
    )
}
