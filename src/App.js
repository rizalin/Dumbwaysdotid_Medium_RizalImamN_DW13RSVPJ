import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './App.css';
import Login from './login';
import Register from './register'

const Home = () => (
  <div>
    <Login />
  </div>
);



class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            </Switch>
        </Router>

      </div>

    );
  }
}

export default App;
