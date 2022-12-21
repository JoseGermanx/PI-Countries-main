import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail';
import ActivityCreator from './components/ActivityCreator';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path= "/countries/:id" component={Detail}/>
      <Route exact path= "/activity" component={ActivityCreator}/>
     
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
