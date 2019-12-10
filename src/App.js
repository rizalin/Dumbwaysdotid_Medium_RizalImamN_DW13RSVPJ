import React, { Component } from 'react';
import { CssBaseline, Typography, Container, Grid, Avatar, Link } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Button, Row, Col, Media } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const style = {

  logo: {
    height: '35px',
  },
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />

      </div>
    );
  }
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
                    <Button variant="outline-dark" size="sm" style={{marginRight:'10px'}}>Upgrade</Button>
                    <Avatar style={{ fontSize: '15px', height: '30px', width: '30px' }}>H</Avatar>
                  </Grid>
                </div>

              </Grid>
            </div>
          </div>
          <div className="containers" style={{ maxHeight: '55px', padding: '8px 0' }}>
            <Row>
              <Col md lg="2">
                <img src={'https://s39jk6x0eh-flywheel.netdna-ssl.com/wp-content/uploads/2018/11/MISSION-Logo-Black-1-1024x249.png'}
                  style={{ maxHeight: '36px' }}></img>
              </Col>
              <Col md lg="3" style={{ padding: "10px 0" }}>
                <h3>MISSION ORIGINAL <span style={{ padding: "0 10px" }}>|</span>SUBSCRIBE</h3>
              </Col>
              <Col>
              </Col>
            </Row>
          </div>
        </React.Fragment>
      </div >
    )
  }
}

class Content extends Component {

  render() {
    return (
      <div className="konten">
        <div className='containers' style={{ paddingBottom: '20px' }}>
          <img src={'https://imgur.com/download/TJf2oHV'}></img>
          <p className='imgDesc'>Books</p>
        </div>

        <div className="article">
          <div>
            <h1>
              If You Only Read A Few Books in 2019, Read These
          </h1>
            <br></br>
            <Row style={{ margin: '0px' }}>
              <Col style={{ padding: '0px' }}>
                <Row className="profile">
                  <Avatar style={{ height: '50px', width: '50px' }}>A</Avatar>
                  <Col className='profilTop'>
                    <div className='proText'>
                      <p style={{ color: "black", fontWeight: '300px' }}>Ryan Holiday</p>
                      <Button variant="outline-success" size="sm">Follow</Button>
                    </div>
                    <div>
                      <p>Jun 26, 2018. 10 min read</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col style={{ padding: '0px', margin: '15px 0px 0px', textAlign: 'end' }}>
                <TwitterIcon />
                <LinkedInIcon />
                <FacebookIcon />
                <BookmarkBorderIcon />
              </Col>

            </Row>
            <br></br>
            <p>
              If you’d like to be jerked around less, provoked less, and more productive and inwardly focused, where should you start in 2019?
            <br></br>
              <br></br>
              To me, the answer is obvious: by turning to wisdom. Below is a list of 15 books that will help lead you to a better, stronger, happier 2019.
          </p>
            <br>
            </br>
            <div style={{ padding: '40px', letterSpacing: '20px', textAlign: 'center' }}><p>&middot;&middot;&middot;</p></div>
            <p><span className="bolU">Deep Work: Rules for Focused Success in a Distracted World by Call New port.</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus augue, suscipit vel scelerisque id, ullamcorper quis tellus.
              Nam at suscipit velit. Pellentesque eget tortor quis ipsum dapibus tincidunt nec eget odio. Donec ut condimentum velit. Maecenas id ultricies eros.
              Ut laoreet molestie lectus ut imperdiet. Vestibulum velit erat, congue a molestie non, vulputate ut ipsum. Aliquam vel ex risus. Quisque leo arcu,
              ullamcorper quis neque efficitur, semper dictum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Duis eleifend nisi consequat tellus elementum fermentum. Nullam vestibulum non ante ac commodo. Donec ut ultrices enim. Suspendisse eget fringilla nulla.
              Fusce venenatis nibh porta, dictum ligula eget, porttitor nibh. Etiam gravida quis lorem sed pretium. Integer eleifend hendrerit diam vitae pretium.
              Praesent feugiat libero quis risus laoreet, euismod gravida odio feugiat. Cras a enim nisi. Integer posuere ligula condimentum, congue sapien sed,
              aliquam tortor. Aenean vehicula placerat.
          </p>
            <br></br>
            <p><span className="bolU">Deep Work: Rules for Focused Success in a Distracted World by Call New port.</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus augue, suscipit vel scelerisque id, ullamcorper quis tellus.
              Nam at suscipit velit. Pellentesque eget tortor quis ipsum dapibus tincidunt nec eget odio. Donec ut condimentum velit. Maecenas id ultricies eros.
              Ut laoreet molestie lectus ut imperdiet. Vestibulum velit erat, congue a molestie non, vulputate ut ipsum. Aliquam vel ex risus. Quisque leo arcu,
              ullamcorper quis neque efficitur, semper dictum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Duis eleifend nisi consequat tellus elementum fermentum. Nullam vestibulum non ante ac commodo. Donec ut ultrices enim. Suspendisse eget fringilla nulla.
              Fusce venenatis nibh porta, dictum ligula eget, porttitor nibh. Etiam gravida quis lorem sed pretium. Integer eleifend hendrerit diam vitae pretium.
              Praesent feugiat libero quis risus laoreet, euismod gravida odio feugiat. Cras a enim nisi. Integer posuere ligula condimentum, congue sapien sed,
              aliquam tortor. Aenean vehicula placerat.
          </p>
            <br></br>
            <p><span className="bolU">Deep Work: Rules for Focused Success in a Distracted World by Call New port.</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus augue, suscipit vel scelerisque id, ullamcorper quis tellus.
              Nam at suscipit velit. Pellentesque eget tortor quis ipsum dapibus tincidunt nec eget odio. Donec ut condimentum velit. Maecenas id ultricies eros.
              Ut laoreet molestie lectus ut imperdiet. Vestibulum velit erat, congue a molestie non, vulputate ut ipsum. Aliquam vel ex risus. Quisque leo arcu,
              ullamcorper quis neque efficitur, semper dictum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Duis eleifend nisi consequat tellus elementum fermentum. Nullam vestibulum non ante ac commodo. Donec ut ultrices enim. Suspendisse eget fringilla nulla.
              Fusce venenatis nibh porta, dictum ligula eget, porttitor nibh. Etiam gravida quis lorem sed pretium. Integer eleifend hendrerit diam vitae pretium.
              Praesent feugiat libero quis risus laoreet, euismod gravida odio feugiat. Cras a enim nisi. Integer posuere ligula condimentum, congue sapien sed,
              aliquam tortor. Aenean vehicula placerat.
          </p>
            <br></br>
            <p><span className="bolU">Deep Work: Rules for Focused Success in a Distracted World by Call New port.</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus augue, suscipit vel scelerisque id, ullamcorper quis tellus.
              Nam at suscipit velit. Pellentesque eget tortor quis ipsum dapibus tincidunt nec eget odio. Donec ut condimentum velit. Maecenas id ultricies eros.
              Ut laoreet molestie lectus ut imperdiet. Vestibulum velit erat, congue a molestie non, vulputate ut ipsum. Aliquam vel ex risus. Quisque leo arcu,
              ullamcorper quis neque efficitur, semper dictum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Duis eleifend nisi consequat tellus elementum fermentum. Nullam vestibulum non ante ac commodo. Donec ut ultrices enim. Suspendisse eget fringilla nulla.
              Fusce venenatis nibh porta, dictum ligula eget, porttitor nibh. Etiam gravida quis lorem sed pretium. Integer eleifend hendrerit diam vitae pretium.
              Praesent feugiat libero quis risus laoreet, euismod gravida odio feugiat. Cras a enim nisi. Integer posuere ligula condimentum, congue sapien sed,
              aliquam tortor. Aenean vehicula placerat.
          </p>
            <br></br>
          </div>


        </div>
        <Media className='profileBr'>
         <Avatar style={{ height: '75px', width: '75px', marginRight:'25px'}}>A</Avatar>
          <Media.Body style={{paddingRight: '100px'}}>
            <h3>WRITTEN BY</h3>
            <h2>Ryan Holiday</h2>
            <p>
             Bestselling author of 'Conspiracy', 'Ego is the enemy' & 'The obstacle Is The Way'
             http://amzn.to/24qKRWR
            </p>
          </Media.Body>
          <Button variant="outline-success" size="sm" style={{ marginTop:'auto', marginBottom: 'auto'}}>Follow</Button>
        </Media>
        <br></br>
      </div>

    )
  }
}

export default App;