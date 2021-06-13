import React,{useEffect, useState} from 'react';
import Navbar from './navbar';
import '../css/postDetails.css';
import { Icon, InlineIcon } from '@iconify/react';
import tagsIcon from '@iconify/icons-el/tags';
import likeFilled from '@iconify/icons-ant-design/like-filled';
import chromeClose from '@iconify/icons-codicon/chrome-close';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function PostDetail(props){
    const [post,setPost] = useState([]);
    const [tags,setTags] = useState([]);
    const [owner,setOwner] = useState([]);
    const [opentags,setOpenTags] = useState(false);

const getPost = ()=>{
    axios.get("https://dummy-wireframe.iecsemanipal.com/social-media/post/"+props.match.params.id,{
            params:{
                apikey:process.env.REACT_APP_API_KEY
            }
        })
        .then((resp)=>{
            setPost(resp.data.data);
            setTags(resp.data.data.tags);
            setOwner(resp.data.data.owner)
        })
        .catch(err=>{
            console.log(err);
        })
}

const showTags = ()=>{
    //console.log(post.tags);
    setOpenTags(!opentags);
}

    useEffect(()=>{
        getPost();
    },[])
    return(
        <div className="container-fluid">
            <Navbar></Navbar>
<br/>
<div className="post-container">
   <h1>Post </h1>
   <button className="back"><Link to="/posts">
   <Icon icon={chromeClose} style={{fontSize: '20px'}} />
       </Link></button>
   <div className="row">
       <div className='col-md-12'>
           <img className=" post-img"src={post.image} alt="Post image"></img>
       </div>
   </div>
   <a target="_blank" href={post.link}>Link</a>
   <div className="post-text">
       <p>{post.text}</p>
   </div>
   <div className="col-xs-10 owner">
              <span>Published by : {owner.firstName} {owner.lastName}</span>
          </div>
   <div className={opentags?"showicons":"closeicons"}>
           {tags.map((tag,key)=>(
               <p key={key}>{tag}</p>
           ))}   
    </div>
   <div className="row">
       <div className="col-xs-2">
          <button className="iconbtn" onClick={showTags}><Icon icon={tagsIcon} style={{color: 'white', fontSize: '50px'}} />
          </button></div>
<div className="col-xs-10 pubdate">
    <span>Published on {post.publishDate}</span>
</div>
           <div className="col-xs-2">
            <div className="likeiconno">{post.likes}   </div>
   <Icon className="likeicon" icon={likeFilled} style={{color: 'white', fontSize: '50px'}} />
   </div>
   </div>


 
</div>
        </div>
    )
}