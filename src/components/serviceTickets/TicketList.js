import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

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
            <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
        </div>

            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                        <p>{ticket.description}</p>
                        <p>submitted by {ticket.customer.name}</p>
                        <p>worked on by {ticket.employee.name}</p>
                        </div>
                    }
                )
            }
        </>
    )
}
