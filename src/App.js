import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './App.css';
import Login from './login';
import RegisterModal from './registerModal';

const Home = () => (
  <div>
    <RegisterModal />
  </div>
);



class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            </Switch>
        </Router>

      </div>

    );
  }
}

export default App;
