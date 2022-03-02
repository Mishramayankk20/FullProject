import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //console.log("Hello");
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://172.20.0.3:31002/");
    setUsers(result.data);
    //console.log(users.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://  172.20.0.3:31002/${id}`, users);
    loadUsers();
    //history.push("/");
  };
  return (
    <div className="container">
    <div style={{ display: "flex" }}>
    <NavLink className="btn nav-link float-right" exact to="/adduser">
      <button className="btn  btn-light py-2">
        <Icon.PersonPlusFill size={30} />
      </button>
    </NavLink>
  </div>
  <div className="py-2">
    <table className="table table-light table-hover table-bordered ">
      <caption>users</caption>
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First_Name</th>
          <th scope="col">Last_Name</th>
          <th scope="col">Email</th>
          <th scope="col">phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <Link to={`/viewuser/${user.id}`} className="btn btn-primary mx-2">
                <Icon.EyeFill />
              </Link>
              <Link to={`/edituser/${user.id}`} className="btn btn-success mx-2">
                <Icon.PenFill />
              </Link>
              <Link to={`/`} className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                <Icon.TrashFill />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      
  );
};
export default Home;
