import React, {Fragment, useEffect, useState} from "react";

const Join = () => {

    const [join, setJoin] = useState([]);
    const [artist, setArtist] = useState("");
    let array = [];

    const getJoin = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/tickets/join/Drake`)
            const jsonData = await response.json()
            setJoin(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }


    return <Fragment>
        <h1 className="mt-3 text-center">JOIN Query</h1>
        
        <table className="table table-dark table-striped mt-5 text-center">
    <thead>
      <tr>
        <th>UserID</th>
        <th>TicketID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody> 
        {join.map(a => (
            <tr key={a.userid}>
                <td>{a.userid}</td>
                <td>{a.ticketid}</td>
                <td>{a.firstname}</td>
                <td>{a.lastname}</td>
            </tr>
        ))}
    </tbody>
  </table>

    <form onSubmit={getJoin} className="d-flex">
                <input type="text" className="form-control mt-5" placeholder="Enter Artist" value={artist} onChange={e =>
                setArtist(e.target.value)}/>       
                <button className="btn btn-info mt-5" >Query</button>
                
    </form>
  
  
  
  
  
  
  
  
  
  
  </Fragment>
};

export default Join;

