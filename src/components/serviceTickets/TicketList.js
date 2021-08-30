import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])

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
