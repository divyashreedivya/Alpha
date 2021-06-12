import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Users from './components/users';
import UserDetail from './components/userDetail';
import './css/nav.css';
import Company from './components/company';
import Posts from './components/posts';
import Insts from './components/inst';
import PostDetail from './components/postDetail';
import InstDetail from './components/instDetail';
import CompanyDetail from './components/companyDetail';

require('dotenv').config();

function App() {
  return (
    <div className="App">
     <Router>
       <Route path="/" exact component={Home}/>
       <Route path="/users" exact component={Users}/>
       <Route path="/users/:id" exact component={UserDetail}/>
       <Route path="/posts" exact component={Posts}/>
       <Route path="/posts/:id" exact component={PostDetail}/>
       <Route path="/stocks" exact component={Company}/>
       <Route path="/stocks/:id" exact component={CompanyDetail}/>
       <Route path="/institutions" exact component={Insts}/>
       <Route path="/institutions/:id" exact component={InstDetail}/>
     </Router>
    </div>
  );
}

export default App;
