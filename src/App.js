
import Home from './components/Home'
import Detail from './components/Detail';
import Signup from './components/Signup';
import Login from './components/Login';
import PagenotFound from './components/pagenotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return(<>
  <Router>
    <Switch>
    <Route exact path="/">
              <Home />
      </Route>
      <Route exact path="/details/:isbn">
              <Detail />
      </Route>
      <Route  path="/log-in">
              <Login />
      </Route>
      <Route  path="/register">
              <Signup />
      </Route>
      
      
      <Route  path="*">
              <PagenotFound/>
      </Route>

    </Switch>
  </Router>
  
  </>)
}

export default App;
