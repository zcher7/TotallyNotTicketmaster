import React, {Fragment, useEffect, useState} from "react";

const ListUsers = () => {

    const [users, setUsers] = useState([]);

    // Delete User function

    const deleteUser = async (id) => {
        try {
            await fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            });

            setUsers(users.filter(user => user.userid !== id));
        } catch (err) {
            console.error(err.message)
        }
    }

    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/users")
            const jsonData = await response.json()

            setUsers(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return <Fragment><table className="table table-dark table-striped mt-5 text-center">
    <thead>
      <tr>
        <th>UserID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Birthday</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {users.map(user => (
            <tr key={user.userid}>
                <td>{user.userid}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.birthday}</td>
                <td>
                    <button className="btn btn-danger" color="#ff5c5c" onClick={() => deleteUser(users.userid)}>Delete</button>
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

export default ListUsers;

