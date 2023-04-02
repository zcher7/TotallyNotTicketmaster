import React, { Fragment, useState } from "react";

const InputTickets = () => {

    const [ticketid, setTicketid] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [artist, setArtist] = useState("");
    const [date, setDate] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {ticketid, price, type, artist, date}
            console.log(JSON.stringify(body))
            await fetch("http://localhost:5000/tickets", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/tickets";
        } catch (err) {
            console.error(err.message)
        }
    }

    const validate = () => {
        return ticketid.length && price.length && type.length && artist.length && date.length;
        
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Add Ticket</h1>
            <form onSubmit={onSubmitForm} style={{justifyContent: "center", textAlign: "center"}}>
                <p style={{fontSize: 20, fontWeight: "bold"}}>
                    Ticket ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>
                        <input type="number" className="form-control mt-3" placeholder="Enter TicketID" value={ticketid} onChange={e =>
                setTicketid(e.target.value)}/>
                </label>
                </p>
                <p style={{fontSize: 20, fontWeight: "bold"}}>
                    Price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>
                        <input type="number" className="form-control" placeholder="Enter Price" value={price} onChange={e =>
                setPrice(e.target.value)}/>
                </label>
                </p>
                <p style={{fontSize: 20, fontWeight: "bold"}}>
                    Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>
                        <input type="text" className="form-control" placeholder="Enter Type" value={type} onChange={e =>
                setType(e.target.value.replace(/[^a-z]/gi, ""))}/>
                </label>
                </p>
                <p style={{fontSize: 20, fontWeight: "bold"}}>
                    Artist: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>
                        <input type="text" className="form-control" placeholder="Enter Artist" value={artist} onChange={e =>
                setArtist(e.target.value.replace(/[^a-z]/gi, ""))}/>
                </label>
                </p>
                <p style={{fontSize: 20, fontWeight: "bold"}}>
                    Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>
                        <input type="date" className="form-control" placeholder="Enter Date" value={date} onChange={e =>
                setDate(e.target.value.replace(/[^0-9-]*$/gmi, ""))}/>
                </label>
                </p>       
                <button className="btn btn-success" disabled={!validate()}>Add</button>
            </form>
        </Fragment>
        
    )
}

export default InputTickets;