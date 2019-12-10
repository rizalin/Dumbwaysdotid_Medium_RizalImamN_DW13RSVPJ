import React, { Component } from 'react';
import { CssBaseline, Typography, Container, Grid, Avatar, Link } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import { Navbar, Nav, Card, Media, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const style = {

  logo: {
    height: '22px',
  },
}





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

class Header extends Component {

  render() {

    return (
      <div>
        <React.Fragment>

          <div className="containers">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <img src={'https://cdn.worldvectorlogo.com/logos/medium-wordmark.svg'} style={style.logo}></img>
              <div style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  style={{ width: '100px' }}>
                  <SearchIcon style={{ fontSize: 25 }} />
                  <NotificationsNoneIcon style={{ fontSize: 25 }} />
                  <Avatar style={{ fontSize: '15px', height: '30px', width: '30px' }}>H</Avatar>
                </Grid>
              </div>


            </Grid>
          </div>
          <div className="containers">
            <Navbar >
              <Nav className="auto" style={{ fontSize: '14px', fontWeight: '300' }}>
                <ChevronLeftIcon style={{color:'#d9d9d9'}} />
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#features">ONEZERO</Nav.Link>
                <Nav.Link href="#pricing">ELEMENTAL</Nav.Link>
                <Nav.Link href="#features">GEN</Nav.Link>
                <Nav.Link href="#pricing">ZORA</Nav.Link>
                <Nav.Link href="#pricing">FORGE</Nav.Link>
                <Nav.Link href="#features">HUMAN PARTS</Nav.Link>
                <Nav.Link href="#pricing">MARKER</Nav.Link>
                <Nav.Link href="#pricing">LEVEL</Nav.Link>
                <Nav.Link href="#features">HEATED</Nav.Link>
                <Nav.Link href="#pricing">MODUS</Nav.Link>
                <Nav.Link href="#pricing">MORE</Nav.Link>
                <ChevronRightIcon  style={{color:'#d9d9d9'}}/>
              </Nav>
            </Navbar>
          </div>
        </React.Fragment>

      </div >
    )
  }
}

export default App;