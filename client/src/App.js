import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import landingPage from './components/LandingPage'
import Home from './components/HomePage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
       <Route exact path = '/' component = {landingPage}/>
       <Route path = '/home' component={Home}/>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
