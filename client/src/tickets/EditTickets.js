import React, {Fragment, useState} from "react";

const EditTickets = ({ticket}) => {
    const [price, setPrice] = useState(ticket.price);
    const [type, setType] = useState(ticket.type);
    const [artist, setArtist] = useState(ticket.artist);
    const [date, setDate] = useState(ticket.date);

    // Edit Ticket function
    const updateTicket = async e => {
        e.preventDefault();
        try {
            const body = {price, type, artist, date}
            console.log(body)
            await fetch(`http://localhost:5000/tickets/${ticket.ticketid}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/tickets";
        } catch (err) {
            console.error(err.message)
        }
    }

    const resetAll = async e => {
      setPrice(ticket.price)
      setType(ticket.type)
      setArtist(ticket.artist)
      setDate(ticket.date)
    }


    return <Fragment>
    <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${ticket.ticketid}`}>
      Edit
    </button>
    
    <div className="modal" id={`id${ticket.ticketid}`} data-toggle="static">
      <div className="modal-dialog">
        <div className="modal-content">
    
          <div className="modal-header">
            <h4 className="modal-title">Edit Ticket</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
    
          <div className="modal-body">
            <input type="number" className="form-control" value={price} onChange={e => setPrice(e.target.value)}/>
            <input type="text" className="form-control" value={type} onChange={e => setType(e.target.value.replace(/[^a-z]/gi, ""))}/>
            <input type="text" className="form-control" value={artist} onChange={e => setArtist(e.target.value.replace(/[^a-z]/gi, ""))}/>
            <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value.replace(/[^0-9-]*$/gmi, ""))}/>
          </div>
    
          <div className="modal-footer">
          <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateTicket(e)}>Edit</button>
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={e => resetAll()}>Close</button>
          </div>
    
        </div>
      </div>
    </div></Fragment>
};

export default EditTickets;