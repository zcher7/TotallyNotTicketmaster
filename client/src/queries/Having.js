import React, {Fragment, useState} from "react";

const Having = () => {

    const [having, setHaving] = useState([]);

    const getHaving = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/having`)
            const jsonData = await response.json()
            setHaving(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }


    return <Fragment>
        <h1 className="mt-5 text-center">HAVING</h1>
        
        <table className="table table-dark table-striped mt-3 text-center">
    <thead>
      <tr>
        <th>Availability</th>
        <th>Average Cost of Sold Tickets</th>
      </tr>
    </thead>
    <tbody> 
        {having.map(a => (
            <tr key={a.available}>
                <td>{a.available}</td>
                <td>{a.avg}</td>
            </tr>
        ))}
    </tbody>
  </table>

    <form onSubmit={getHaving} className="d-flex">   
                <button className="btn btn-info mt-5" >Query</button>
    </form>
  
  
  
  
  
  
  
  
  
  
  </Fragment>
};

export default Having;

