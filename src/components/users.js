import React,{useEffect, useState} from 'react';
import '../css/users.css';
import Navbar from './navbar';
import {userData} from '../data/users.js';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Users(){
    const [users,setUsers] = useState([]);
    const getUsers = ()=>{
        axios.get("https://dummy-wireframe.iecsemanipal.com/social-media/users",{
            params:{
                apikey: process.env.REACT_APP_API_KEY
            }
        })
        .then((resp)=>{
            setUsers(resp.data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        // console.log(userData.data[0].picture);
         setUsers(userData.data);
        //getUsers();
    },[])
    return(
        <div className="container-fluid usersContainer">
            <Navbar></Navbar>
            <h1>Users</h1>
            <div className="row">
                {users.map((user,key)=>(
                    <Link to={`users/${user._id}`}  key={key} className="col-md-3 userCard">
                     <div>
                    <div className=" userDisp">
                         <img src={user.picture} className="userImg" alt="Profile pic"></img>
                     <div className="usersInfo">
                     <p className="userName">{user.firstName}</p>
                     </div>
                     </div>
                     </div></Link>
                ))}

        </div>
        </div>
    )
}