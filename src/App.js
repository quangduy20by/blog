
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Switch , Route, } from "react-router-dom";
function App() {
  const user = true;
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
        <Route path="/post">
            <Single/>
        </Route>
        
      </Switch>    
    </Router>
  );
}

export default App;
