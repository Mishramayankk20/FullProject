import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'
import * as Icon from 'react-bootstrap-icons';
const User =()=>{
    const [user,setUser] = useState([]);
    useEffect(()=>{
        ViewUser();
    });
    const {id} = useParams();

    const ViewUser = async (e)=>{
       
        const res = await axios.get(`http://172.20.0.3:31002/viewuser/${id}`);
        //e.preventDefault();
        setUser(res.data);
       // console.log(user);
    } 
   
    return (
        <div className='container center'>
       
            <Link className='btn btn-dark my-5 ' to ='/'><Icon.ArrowLeft/><Icon.HouseDoorFill size={25}/></Link>
            <h1 className='display-4'>User Id:{id}</h1>
            <hr />
            {user.map((users)=>(
            <ul className='list-group w-50' >
           <div> <Icon.InfoCircleFill size={50} /></div>
                <li className='list-group-item '>first name :{users.first_name} </li>
                <li className='list-group-item'>last name :{users.last_name}</li>
                <li className='list-group-item'>email :{users.email}</li>
                <li className='list-group-item'>phone :{users.phone}</li>
                <li className='list-group-item'>comments :{users.comment}</li> 
            </ul>
            ))}
        </div>
    )
}
export default User;