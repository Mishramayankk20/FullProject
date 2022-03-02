import axios from "axios";
import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { useHistory, Link, useParams } from "react-router-dom";
//import User from "./User";
function EditUser() {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    comment: '',
  });
  //distruption  feature of es6
  //const { first_name, last_name, email, phone, comment } = user;
  // const onInputChange = (event) => {
  //     setUser({ ...user, [event.target.name]: event.target.value });
  // }
  const onInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setUser({ ...user, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://172.20.0.3:31002/edituser/${id}`, user)
      .then((res) => {
        alert(res.data.message);
        history.push("/");
      });
  };
  useEffect(() => {
    const LoadUser = async () => {
      const result = await axios.get(`http://172.20.0.3:31002/edituser/${id}`);
      console.log(result.data);
      setUser(result.data.rows[0]);
     // console.log(result.data.first_name);
      //console.log(user);
    };
    LoadUser();
  }, []);

  //console.log(first_name);
  return (
    <div className=" row ">
       {/*<div className="col-6">  <User /></div>*/}

      <div className="w-50 col-6 mx-auto shadow p-5 bg-light">
        <h2 className="text-center mb-4">UPDATE-RECORD : {id}</h2>
       
        <form onSubmit={onSubmit}>
          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="first_name"
                name="first_name"
                value={user.first_name}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="last_name"
                name="last_name"
                value={user.last_name}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="abc@gmail.com"
                name="email"
                value={user.email}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="xxxx1234 "
                name="phone"
                value={user.phone}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="col-12 mx-2 my-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="comments for user "
                name="comment"
                value={user.comment}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="container">
            <Link className="btn btn-dark my-2 col-5 mx-4" to="/">
              <Icon.ArrowLeft />
              BACK
            </Link>
            <button className="btn btn-md btn-success col-5 mx-2" type="submit">
              Submit
            </button>
          </div>
        </form>
        {/* ))}*/}
      </div>
    </div>
  );
}

export default EditUser;
