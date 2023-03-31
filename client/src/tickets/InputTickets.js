import React, { Fragment, useState } from "react";

const InputTickets = () => {

    const [ticketid, setTicketid] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");
    const [artist, setArtist] = useState("");
    const [date, setDate] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {ticketid, price, available, artist, date}
            console.log(JSON.stringify(body))
            await fetch("http://localhost:5000/tickets", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    const validate = () => {
        return ticketid.length && price.length && available.length && artist.length && date.length;
        
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Totally Not Ticketmaster</h1>
            <h2 className="text-center mt-5">Add Ticket</h2>
            <form onSubmit={onSubmitForm}>
                <input type="number" className="form-control mt-3" placeholder="Enter TicketID" value={ticketid} onChange={e =>
                setTicketid(e.target.value)}/>
                <input type="number" className="form-control mt-3" placeholder="Enter Price" value={price} onChange={e =>
                setPrice(e.target.value)}/>
                <input type="text" className="form-control mt-3" placeholder="Enter Availability" value={available} onChange={e =>
                setAvailable(e.target.value)}/>
                <input type="text" className="form-control mt-3" placeholder="Enter Artist" value={artist} onChange={e =>
                setArtist(e.target.value)}/>
                <input type="text" className="form-control mt-3" placeholder="Enter Date" value={date} onChange={e =>
                setDate(e.target.value)}/>        
                <button className="btn btn-success mt-5" disabled={!validate()}>Add</button>
            </form>
        </Fragment>
        
    )
}

export default InputTickets;