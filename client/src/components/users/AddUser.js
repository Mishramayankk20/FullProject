import axios from "axios";
import React, { useState } from "react";
import { useHistory,Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    comment: "",
  });
  //distruption  feature of es6
  const {first_name,last_name,email,phone,comment} =  user;
  const onInputChange = (event) => {
    const {name,value}  = event.target;
    console.log(event.target.value);
    setUser({ ...user, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://172.20.0.3:31002/adduser", user).then((res) => {
      alert(res.data.message);
      history.push("/");
    });
  };
  return (
    <div className="container  col-12 ">
    <Link className='btn btn-dark my-2 ' to ='/'><Icon.ArrowLeft/><Icon.HouseDoorFill size={25}/></Link>
      <div className="w-75 mx-auto shadow p-5 bg-secondary">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={onSubmit}>
          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your name"
                name="first_name"
                value={first_name}
                onChange={ onInputChange}
             />
            </div>
          </div>

          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your lastname"
                name="last_name"
                value={last_name}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number "
                name="phone"
                value={phone}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your comment for user "
                name="comment"
                value={comment}
                onChange={onInputChange}
              />
            </div>
          </div>
          <button className="btn btn-success col-12" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
