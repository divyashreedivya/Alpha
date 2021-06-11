import React, {useState,useEffect} from'react';
import '../css/userDetail.css';
import Navbar from './navbar';
import axios from 'axios';

export default function UserDetail(props){
    const [user,setUser] = useState([]);
    const [loc,setLoc] = useState([]);

const getUser = ()=>{
    axios.get("https://dummy-wireframe.iecsemanipal.com/social-media/user/"+props.match.params.id,{
        params:{
            apikey: process.env.REACT_APP_API_KEY
        }
    })
    .then((resp)=>{
        console.log(resp.data.data.location);
        setUser(resp.data.data);
        setLoc(resp.data.data.location);
    })
    .catch((err)=>{
        console.log(err);
    })
}

    useEffect(()=>{
        getUser();
    },[]);
    return(
        <div className="container-fluid userDetail">
        <Navbar></Navbar>
        <h1>User details</h1>
        
        <div className="row">
            <div className="col-md-6 order-md-2">
                <img src={user.picture} alt="User pic"
                className="userPic"></img>
            <div className="userLoc">
                {/* <p>State: {user.location.state}</p>
                <p>Street:{user.location.street}</p>
                <p>City: {user.location.city}</p>
                <p>Timezone:{user.location.timezone}</p>
                <p>Country:{user.location.country}</p> */}
                 <p>State: {loc.state}</p>
                <p>Street:{loc.street}</p>
                <p>City: {loc.city}</p>
                <p>Timezone:{loc.timezone}</p>
                <p>Country:{loc.country}</p>
            </div>
            </div>
            <div className="col-md-6 order-md-1">
            <br/><br/>
            <div className=" userInfo">
            <p>First Name : {user.firstName}</p>
            <hr/>
            <p>Last Name:{user.lastName}</p>
            <hr/>
            <p>Email: {user.email}</p>
            <hr/>
            <p>Phone no: {user.phone}</p>
            <hr/>
            <p>DOB: {user.dateOfBirth}</p>
            <hr/>
            <p>Gender:{user.gender}</p>
            <hr/>
            <p>Register Date: {user.registerDate}</p>
            </div>
            </div>
        </div>
    </div>
    )

}