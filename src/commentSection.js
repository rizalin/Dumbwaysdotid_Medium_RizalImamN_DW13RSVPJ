import React, { Component } from 'react';
import { Grid, Avatar, TextField } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Form, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Comment from './Comment'






class CommentSection extends Component {
  render() {
    return (
      <div style={{marginTop:'20px'}}>
        <h4>Responses</h4>
        <br></br>
        <div className="comment" style={{display: 'flex'}}>
          <Avatar style={{ fontSize: '20px', height: '50px', width: '50px' }}>R</Avatar>
          <TextField
          
          style={{ marginLeft: 20, marginTop: 8, width: '80%'}} 
          
          margin="normal"
          placeholder="Write a response..."
          InputLabelProps={{borderColor: 'blue'
          }}
        />
        </div>
        <br></br>
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default CommentSection;
