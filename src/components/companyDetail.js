import React, { useEffect, useState } from 'react';
import '../css/companyDetail.css';
import {compData} from '../data/company';
import Navbar from './navbar';
import axios from 'axios';

export default function CompanyDetail(props){
    const [comp,setComp]= useState([]);

   const getComp = ()=>{
    axios.get("https://dummy-wireframe.iecsemanipal.com/stock/"+props.match.params.id,{
        params:{
            apikey:process.env.REACT_APP_API_KEY
        }
    })
    .then((resp)=>{
        setComp(resp.data.data);
        console.log(resp.data.data);
    })
    .catch(err=>{
        console.log(err);
    })
   }

    useEffect(()=>{
        //getComp();
        setComp(compData.data[0]);
        console.log(comp);
    });
    return(
        <div className="container comp-container">
            <Navbar></Navbar>
            <br/><br/>
            <div>
                <h1>{comp.Name}</h1>
                <p  className="comp-content">{comp.Description}</p>
                <div>
                    
                </div>
            </div>
        </div>
    )
}