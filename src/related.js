import React from 'react';
import { CssBaseline, Typography, Container, Grid, Avatar, Link } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { CardDeck, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './related.css';
import ArticleMap from './articleMap'
import Article from './article'

function Related() {
  return (
    <Row className='containers'>
      <Article />
      <Article />
      <Article />

    </Row >

  );
}

export default Related;
