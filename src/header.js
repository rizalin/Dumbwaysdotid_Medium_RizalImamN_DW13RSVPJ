import React, { Component } from 'react';
import {Grid, Avatar} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import { Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const style = {

    logo: {
      height: '35px',
    },
  }

class Header extends Component {

    render() {
  
      return (
        <div>
          <React.Fragment>
  
            <div style={{ borderBottom: "solid #f1f1f1 2px" }}>
              <div className="containers" >
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <img src={'https://medium.com/icons/monogram-mask.svg'} style={style.logo}></img>
                  <div style={{ padding: '20px 0' }}>
                    <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      style={{ width: '200px' }}>
                      <SearchIcon style={{ fontSize: 25 }} />
                      <NotificationsNoneIcon style={{ fontSize: 25 }} />
                      <Button variant="outline-dark" size="sm" style={{ marginRight: '10px' }}>Upgrade</Button>
                      <Avatar style={{ fontSize: '15px', height: '30px', width: '30px' }}>H</Avatar>
                    </Grid>
                  </div>
  
                </Grid>
              </div>
            </div>
          </React.Fragment>
        </div >
      )
    }
  }

  export default Header;