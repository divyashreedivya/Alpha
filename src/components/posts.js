import axios from 'axios';
import React,{useEffect, useState} from 'react';
import '../css/posts.css';
import {postsData} from '../data/posts';
import Navbar from './navbar';
import {Link} from 'react-router-dom';

export default function Posts(){
    const [posts,setPosts] = useState([]);
    const getPosts=()=>{
        axios.get("https://dummy-wireframe.iecsemanipal.com/social-media/posts",{
            params:{
                apikey:process.env.REACT_APP_API_KEY
            }
        })
        .then((resp)=>{
            setPosts(resp.data.data);
            console.log(resp.data.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
useEffect(()=>{
    getPosts();
    //console.log(postsData.data);
    // setPosts(postsData.data);
    //console.log(posts);
},[]);

    return(
        <div className="container-fluid posts-container">
            <Navbar></Navbar>
            <br/><br/>
            <h1>Social media posts</h1>
            <br/>
           <form>
               <input type="text" className="form-control" placeholder="Search posts by tags"></input>
           </form>
           <br/>
            <div className="row">
                
                {posts.map((post,key)=>(
                    <Link to={`/posts/`+post._id} className="col-md-6">
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
