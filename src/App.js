import React, { Component } from 'react';
import { Grid, Avatar, TextField } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Form, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CommentSection from './commentSection'
import Comment from './Comment'






class App extends Component {
  render() {
    return (
      <div className='article'>
        <CommentSection />
      </div>
    );
  }
}

export default App;
