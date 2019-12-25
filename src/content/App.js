import React,{Component,Fragment} from 'react';
import '../style/style.css';
import Home from './Home/Home';

import Form from './event/event';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="wrapper">
          <div className="header">
            <div className="navbar">
              <div className="logo">
                <img className="imgfluid" src={require("./opm.jpg")}/>
              </div>
              <div className="menu">
                <ul>
                  <Link to="/home" className="li">Home</Link>
                  <Link to="#" className="li">Blogs</Link>
                  <Link to="#" className="li">Galery</Link>
                  <Link to="/form" className="li">Kontak</Link>
                  <Link to="/event" className="li">Simple Event</Link>
                </ul>
            </div>
          </div>
          </div>
          <Fragment>
            <Route path="/home" component={Home}/>
            <Route path="/form" component={Form}/>
          </Fragment>
        </div>
      </Router>
    );
  }
}

export default App;
