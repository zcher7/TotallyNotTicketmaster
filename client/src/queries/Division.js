import React, {Fragment, useState} from "react";

const Division = () => {

    const [division, setDivision] = useState([]);

    const getDivision = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/division`)
            const jsonData = await response.json()
            setDivision(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }


    return <Fragment>
        <h1 className="mt-5 text-center">DIVISION</h1>
        <h3 className="mt-3 text-center">TBD</h3>
        <table className="table table-dark table-striped mt-3 text-center">
    <thead>
      <tr>
        <th>Division</th>
      </tr>
    </thead>
    <tbody> 
        {division.map(a => (
            <tr key={a.avg}>
                <td>{a.avg}</td>
            </tr>
        ))}
    </tbody>
  </table>

    <form onSubmit={getDivision} className="d-flex">   
                <button className="btn btn-info mt-5" >Query</button>
                
    </form>
  
  </Fragment>
};

export default Division;

