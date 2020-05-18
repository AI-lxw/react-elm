import React from 'react';
import '../src/common/index.scss';
import Home from './components/home';
import {BrowserRouter as Router,NavLink,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <NavLink to={'/'} component={Home}></NavLink>
      </Router>
    </div>
  );
}

export default App;
