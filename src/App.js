
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import axios from "axios";

import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Switch , Route, useParams} from "react-router-dom";
function App() {
  const user = true;
  const[articles,setAricles] = useState([]);
  useEffect(()=>{
            axios.get('https://61a9984633e9df0017ea3e6d.mockapi.io/api/v1/articles').then(
                res =>{
                    setAricles(res.data)
                }
            )
        },[])
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/register">
            {<Register/>}
        </Route>
        <Route path="/login">
        {<Login/>}

        </Route>
        <Route path="/write">
        {user ? <Write/> :<Register/>}

        </Route>
        <Route path='/post'>
          <Single />  
        </Route> 
      </Switch>    
    </Router>
  );
}

export default App;
