import axios from 'axios';
import React,{useEffect, useState} from 'react';
import '../css/posts.css';
import {postsData} from '../data/posts';
import Navbar from './navbar';
import {Link} from 'react-router-dom';

export default function Posts(){
    const [posts,setPosts] = useState([]);
    const [allposts,setAllposts] = useState([]);
    const [searchtext,setSearchtext] = useState("");
    const getPosts=()=>{
        axios.get("https://dummy-wireframe.iecsemanipal.com/social-media/posts",{
            params:{
                apikey:process.env.REACT_APP_API_KEY
            }
        })
        .then((resp)=>{
            setPosts(resp.data.data);
            setAllposts(resp.data.data);
            console.log(allposts);
        })
        .catch(err=>{
            console.log(err);
        })
    }
const excludeCols = ["link","likes"];
   const handleChange=(value)=>{
       setSearchtext(value);
       filterPosts(value);
   }

   const filterPosts = (value)=>{
       const lvalue = value.toLowerCase().trim();
       if(lvalue==="") setPosts(allposts);
       
       else{
           const filteredPosts = posts.filter((item)=>{
               return Object.keys(item).some(key=>
                excludeCols.includes(key) ? false : item[key].toString().toLowerCase().includes(lvalue));
           });
           setPosts(filteredPosts);
       }
   }

useEffect(()=>{
    //getPosts();
    //console.log(postsData.data);
    setPosts(postsData.data);
    setAllposts(postsData.data);
    //console.log(posts);
},[]);

    return(
        <div className="container-fluid posts-container">
            <Navbar></Navbar>
            <br/><br/>
            <h1>Social media posts</h1>
            <br/>
           <form>
               <input type="text" className="form-control" placeholder="Search posts"
               onChange={e=>handleChange(e.target.value)}></input>
           </form>
           <br/>
            <div className="row">
                
                {posts.map((post,key)=>(
                    <Link key={key} to={`/posts/`+post._id} className="col-md-6">
                    <div >
                        <div className="posts">
                        {post.tags.map((tag)=>(
                            <span className="badge bg-primary tags">{tag}</span>
                        ))}
                        <p>{post.text}</p>
                    </div>

                    {/* <div className="col-md-6"></div> */}
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
