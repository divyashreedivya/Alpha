import React,{useEffect, useState} from 'react';
import '../css/inst.css';
import {instData} from '../data/inst';
import Navbar from './navbar';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Insts(){
    const [insts,setInsts] = useState([]);

    const getInsts = ()=>{
            axios.get("https://dummy-wireframe.iecsemanipal.com/institutions",{
                params:{
                    apikey: process.env.REACT_APP_API_KEY
                }
            })
            .then((resp)=>{
                setInsts(resp.data.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    useEffect(()=>{
    //setInsts(instData.data);
getInsts();
    },[])

    return(
        <div className="container-fluid insts-container">
            <Navbar></Navbar>
            <h1>Institutions</h1>
            <br/>
            <div className="row">
                {insts.map((inst,key)=>(
                    <Link to={`/institutions/${inst._id}`} key={key} className="col-md-6">
                    <div>
                        <div className="inst-card">
                        <p className="area"> {inst.area_name}</p>
                        <p>{inst.variable}</p>
                        </div> 
                        </div>
                        </Link>
                ))}
            </div>
        </div>
    )
}