import React, { Fragment, useState } from "react";

const InputPurchases = () => {

    const [purchaseid, setPurchaseid] = useState("");
    const [userid, setUserid] = useState("");
    const [ticketid, setTicketid] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {purchaseid, userid, ticketid}
            console.log(JSON.stringify(body))
            await fetch("http://localhost:5000/purchases", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/purchases";
        } catch (err) {
            console.error(err.message)
        }
    }

    const validate = () => {
        return purchaseid.length && userid.length && ticketid.length;
        
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Add Purchase</h1>
            <form onSubmit={onSubmitForm}>
                <input type="number" className="form-control mt-3" placeholder="Enter PurchaseID" value={purchaseid} onChange={e =>
                setPurchaseid(e.target.value)}/>
                <input type="number" className="form-control mt-3" placeholder="Enter UserID" value={userid} onChange={e =>
                setUserid(e.target.value)}/>
                <input type="number" className="form-control mt-3" placeholder="Enter TicketID" value={ticketid} onChange={e =>
                setTicketid(e.target.value)}/>      
                <button className="btn btn-success mt-5" disabled={!validate()}>Add</button>
            </form>
        </Fragment>
        
    )
}

export default InputPurchases;