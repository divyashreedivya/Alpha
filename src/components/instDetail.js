import React,{useEffect, useState} from 'react';
import '../css/instDetail.css';
import Navbar from './navbar';
import axios from 'axios';
import { Icon, InlineIcon } from '@iconify/react';
import chromeClose from '@iconify/icons-codicon/chrome-close';
import {Link} from 'react-router-dom';

export default function InstDetail(props){
    const [inst,setInst] = useState([]);

    const getInst = ()=>{
        axios.get("https://dummy-wireframe.iecsemanipal.com/institution/"+props.match.params.id,{
            params:{
                apikey: process.env.REACT_APP_API_KEY
            }
        })
        .then((resp)=>{
            setInst(resp.data.data);
            //console.log(inst);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
    getInst();
    },[]);
    return(
        <div className="container-fluid inst-container">
            <Navbar></Navbar>
            <h1>Institution</h1>
<br/>
            <button className="backbtn"><Link to="/institutions">
   <Icon icon={chromeClose} style={{fontSize: '20px'}} />
       </Link></button>
       <br/>
            <div className="instdetail">
                <p>Area name : {inst.area_name}</p>
                <hr/>
                <p>Type: {inst.type}</p>
                <hr/>
                <p>Year : {inst.year}</p>
                <hr/>
                <p>Variable: {inst.variable}</p>
                <hr/>
                <p>Value: {inst.value}</p>
            </div>
        </div>
    )
}