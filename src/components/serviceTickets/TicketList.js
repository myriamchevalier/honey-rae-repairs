import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { TicketForm } from "./TicketForm"
import "./TicketList.css"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((ticketData) => {
                    setTickets(ticketData)
                }
                )
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>

            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`} className={ticket.emergency ? "emergency" : "ticket"}>
                            <p>{ticket.emergency ? "🚑" : ""} 
                            <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> 
                            </p>
                            <p>submitted by {ticket.customer.name}, worked on by {ticket.employee.name}.</p>
                        </div>
                    }
                )
            }
        </>
    )
}
