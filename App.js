import React, { Component } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Form, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './komen.css'
import CustomizedTabs from './Tabs'
import Comment from './Comment'






class App extends Component {
  render() {
    return (
      <div>
        <Comment />
      </div>

    );
  }
}

export default App;
