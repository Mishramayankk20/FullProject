import axios from "axios";
import React,{useState} from "react";
import { NavLink ,useHistory} from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
 // const [search, setSearch] = useState("");
  const [search,setSearch] = useState();
  // const onInputChange = (event) =>{
  //   const {name,value}  = event.target;
  //   setSearch({...search,[name]:value});
  //   console.log(search);
  // } 
  console.log(search);
  //const {name} = search;
  const submit = async (e) => {
    e.preventDefault();
    await axios.get(`http://172.20.0.3:31002/search/${search}`).then((res) => {
      console.log(res.data);
      //setUsers(res.data);
      history.push("/")
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          User-management
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                ABOUT
              </NavLink>
            </li>
            {/*<li className="nav-item">
              <NavLink className="nav-link" exact to="/adduser">
                ADDUSER
              </NavLink>
            </li>*/}
          </ul>
        </div>

        <form className="form-inline d-flex flex-row"  onSubmit={submit} noValidate>
          <input
            className="form-control me-2"
            type="search"
            placeholder="search"
            onChange = {(e)=>{setSearch(e.target.value)}}
            name="search"
            aria-label="Search"
            
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
