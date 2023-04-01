import React, { Fragment, useState } from "react";

const InputUsers = () => {

    const [userid, setUserid] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {userid, firstname, lastname, email, birthday}
            console.log(JSON.stringify(body))
            await fetch("http://localhost:5000/users", {
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
        return userid.length && firstname.length && lastname.length && email.length && birthday.length;
        
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Add User</h1>
            <form onSubmit={onSubmitForm}>
                <input type="number" className="form-control mt-3" placeholder="Enter UserID" value={userid} onChange={e =>
                setUserid(e.target.value)}/>
                <input type="text" className="form-control mt-3" placeholder="Enter First Name" value={firstname} onChange={e =>
                setFirstname(e.target.value)}/>
                <input type="text" className="form-control mt-3" placeholder="Enter Last Name" value={lastname} onChange={e =>
                setLastname(e.target.value)}/>
                <input type="text" className="form-control mt-3" placeholder="Enter Email" value={email} onChange={e =>
                setEmail(e.target.value)}/>
                <input type="text" className="form-control mt-3" placeholder="Enter Birthday" value={birthday} onChange={e =>
                setBirthday(e.target.value)}/>        
                <button className="btn btn-success mt-5" disabled={!validate()}>Add</button>
            </form>
        </Fragment>
        
    )
}

export default InputUsers;