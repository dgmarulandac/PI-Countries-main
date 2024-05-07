import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import landingPage from './components/LandingPage'
import Home from './components/HomePage';
import ActivityCreate from './components/ActivityCreate'
import Detail from './components/Detail';
import Activity from './components/AcivitysHome';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
       <Route exact path = '/' component = {landingPage}/>
       <Route exact path = '/home' component={Home}/>
       <Route exact path ='/Activities' component ={ActivityCreate}/>
       <Route exact path ='/home/:id' component ={Detail}/>
       <Route exact path ='/Activity' component ={Activity}/>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
