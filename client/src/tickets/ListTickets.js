import React, {Fragment, useEffect, useState} from "react";

import EditTickets from "./EditTickets";

const ListTickets = () => {

    const [tickets, setTickets] = useState([]);

    // Delete ticket function

    const deleteTicket = async (id) => {
        try {
            await fetch(`http://localhost:5000/tickets/${id}`, {
                method: "DELETE"
            });

            setTickets(tickets.filter(ticket => ticket.ticketid !== id));
        } catch (err) {
            console.error(err.message)
        }
    }

    const getTickets = async () => {
        try {
            const response = await fetch("http://localhost:5000/tickets")
            const jsonData = await response.json()

            setTickets(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getTickets();
    }, [])

    return <Fragment><table className="table table-dark table-striped mt-5 text-center">
    <thead>
      <tr>
        <th>TicketID</th>
        <th>Price</th>
        <th>Type</th>
        <th>Artist</th>
        <th>Date</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {tickets.map(ticket => (
            <tr key={ticket.ticketid}>
                <td>{ticket.ticketid}</td>
                <td>{ticket.price}</td>
                <td>{ticket.type}</td>
                <td>{ticket.artist}</td>
                <td>{ticket.date}</td>
                <td><EditTickets ticket={ticket} /> </td>
                <td>
                    <button className="btn btn-danger" color="#ff5c5c" onClick={() => deleteTicket(ticket.ticketid)}>Delete</button>
                </td>
            </tr>
        ))}
        {/* <tr>
        <td>Default</td>
        <td>Defaultson</td>
        <td>def@somemail.com</td>
      </tr>   
      <tr class="table-primary">
        <td>Primary</td>
        <td>Joe</td>
        <td>joe@example.com</td>
      </tr>
      <tr class="table-success">
        <td>Success</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr class="table-danger">
        <td>Danger</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr class="table-info">
        <td>Info</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
      <tr class="table-warning">
        <td>Warning</td>
        <td>Refs</td>
        <td>bo@example.com</td>
      </tr>
      <tr class="table-active">
        <td>Active</td>
        <td>Activeson</td>
        <td>act@example.com</td>
      </tr>
      <tr class="table-secondary">
        <td>Secondary</td>
        <td>Secondson</td>
        <td>sec@example.com</td>
      </tr>
      <tr class="table-light">
        <td>Light</td>
        <td>Angie</td>
        <td>angie@example.com</td>
      </tr>
      <tr class="table-dark text-dark">
        <td>Dark</td>
        <td>Bo</td>
        <td>bo@example.com</td>
      </tr>*/}
    
      
    </tbody>
  </table></Fragment>
};

export default ListTickets;

