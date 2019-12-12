import React from 'react';
import { CssBaseline, Typography, Container, Grid, Avatar, Link } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { CardDeck, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function RelatedArticles() {
  return (
    <Row className='containers'>
      <Col>
        <Card>
          <Card.Img variant="top" src={"https://imgur.com/download/fEslAxG"} />
          <Card.Body>
            <h2>My Horoscope Doesn't Control My Life -- I Do</h2>
            <br></br>
            <Grid
              container
              direction="row"
              justify="space-between"
            >
              <Row>
                <Avatar style={{ fontSize: '15px', height: '40px', width: '40px', marginLeft: '10px', marginRight: '10px' }}>H</Avatar>
                <div>
                  <h5 class="writerR">Adrianne Luther</h5>
                  <h5>Jan 7 . 5 min read</h5>
                </div>
              </Row>
              <Row style={{ marginTop: '10px', marginRight: '5px' }}>
                <ThumbUpIcon style={{ fontSize: 25 }} />
                <h5 style={{ marginTop: '5px', marginRight: '5px', marginLeft: '5px' }}>23k</h5>
                <h4> | </h4>
                <BookmarkBorderIcon style={{ fontSize: 25 }} />
              </Row>
            </Grid>
          </Card.Body>
        </Card>
      </Col >
      <Col>
        <Card>
          <Card.Img variant="top" src={"https://imgur.com/download/fEslAxG"} />
          <Card.Body>
            <h2>My Horoscope Doesn't Control My Life -- I Do</h2>

            <h5 class="writerR">Adrianne Luther</h5>
            <h5>Jan 7 . 5 min read</h5>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={"https://imgur.com/download/fEslAxG"} />
          <Card.Body>
            <h2>My Horoscope Doesn't Control My Life -- I Do</h2>
            <h5 class="writerR">Adrianne Luther</h5>
            <h5>Jan 7 . 5 min read</h5>
          </Card.Body>
        </Card>
      </Col>

    </Row >

  );
}

export default RelatedArticles;
