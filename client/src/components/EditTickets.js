import React, {Fragment, useState} from "react";

const EditTickets = ({ticket}) => {
    const [price, setPrice] = useState(ticket.price);

    // Edit Ticket function
    const updateTicket = async e => {
        e.preventDefault();
        try {
            const body = {price}
            console.log(body)
            const response = await fetch(`http://localhost:5000/tickets/${ticket.ticketid}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }


    return <Fragment>
    <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${ticket.ticketid}`}>
      Edit
    </button>
    
    <div className="modal" id={`id${ticket.ticketid}`} onClick={e => setPrice(ticket.price)}>
      <div className="modal-dialog">
        <div className="modal-content">
    
          <div className="modal-header">
            <h4 className="modal-title">Edit Ticket</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
    
          <div className="modal-body">
            <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)}/>

          </div>
    
          <div className="modal-footer">
          <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateTicket(e)}>Edit</button>
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={e => setPrice(ticket.price)}>Close</button>
          </div>
    
        </div>
      </div>
    </div></Fragment>
};

export default EditTickets;