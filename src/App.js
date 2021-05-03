import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components2/Homepage/Homepage';
import About from './Components2/About/About';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
         <Homepage/>
        
          </Route>
          <Route path="/about">
              <About/>
          </Route>
         

        </Switch>

      </Router>
    
    </div>
  );
}

export default App;               