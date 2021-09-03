import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Ticket = () => {
    const [ticket, set] = useState({})  // State variable for current ticket object
    const { ticketId } = useParams()  // Variable storing the route parameter
    const [employees, setEmployees] = useState([])

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

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to 
                    <select id="employee">
                        {
                            employees.map((employee) => {
                                return <option key={`employee--${employee.id}`}>
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
