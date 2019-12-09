import React, { Component } from 'react';
import { CssBaseline, Typography, Container, Grid, Avatar, Link } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
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

          <div className="containers">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <img src={'https://cdn.worldvectorlogo.com/logos/medium-wordmark.svg'} style={style.logo}></img>
              <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
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
            <Navbar bg="light" variant="light">
              <Nav className="mr-auto" style={{ fontSize: '14px', fontWeight: '300' }}>
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
              </Nav>
            </Navbar>
          </div>
        </React.Fragment>

      </div >
    )
  }
}

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed style={{ marginTop: '15px' }}>
          <Grid container direction="row" justify="space-between">
            <div>
              <Card style={{ width: '400px', height: '0px' }}>
                <Card.Img variant="top" src={"https://imgur.com/download/NdEYlzZ"} />
                <Card.Body style={{ marginLeft: '40px' }}>
                  <Card.Title className="card-title">Do Not Give Up Coffee</Card.Title>
                  <Card.Text>
                    Both regular and decaf boost your health
                  </Card.Text>
                  <Card.Text>
                    <span className="black">Dave Gershgorn in OneZero</span> <br></br>
                    Sep 30 . 3 min read
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Media style={{ width: '350px' }}>
                <img
                  width={100}
                  height={100}
                  className="mr-3"
                  src={"https://imgur.com/download/p6gCwnY"}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Delete Your Slack Message Right Now. Here's How.</h5>
                  <br></br>
                  <p><span className="black">Dave Gershgorn in OneZero</span>
                    <br></br>Dec 6 . 3 min read
                  </p>
                </Media.Body>
              </Media>
              <Media style={{ width: '350px' }}>
                <img
                  width={100}
                  height={100}
                  className="mr-3"
                  src={"https://imgur.com/download/p6gCwnY"}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Delete Your Slack Message Right Now. Here's How.</h5>
                  <br></br>
                  <p><span className="black">Dave Gershgorn in OneZero</span>
                    <br></br>Dec 6 . 3 min read
                  </p>
                </Media.Body>
              </Media>
              <Media style={{ width: '350px' }}>
                <img
                  width={100}
                  height={100}
                  className="mr-3"
                  src={"https://imgur.com/download/p6gCwnY"}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Delete Your Slack Message Right Now. Here's How.</h5>
                  <br></br>
                  <p><span className="black">Dave Gershgorn in OneZero</span>
                    <br></br>Dec 6 . 3 min read
                  </p>
                </Media.Body>
              </Media>
            </div>
            <div>
              <Card style={{ width: '350px', height: '0px' }}>
                <Card.Img variant="top" src={"https://imgur.com/download/NdEYlzZ"} style={{ width: '350px', height: '160px' }} />
                <Card.Body>
                  <Card.Title className="card-title">Do Not Give Up Coffee</Card.Title>
                  <Card.Text>
                    Both regular and decaf boost your health
                  </Card.Text>
                  <Card.Text>
                    <span className="black">Dave Gershgorn in OneZero</span> <br></br>
                    Sep 30 . 3 min read
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Grid>
        </Container>
        <div className="containers">
          <p style={{ textAlign: 'right', marginBottom: '15px' }}><Link href="">SEE ALL FEATURED <ArrowForwardIosIcon style={{ fontSize: 12 }} /></Link></p>
          <hr></hr>
        </div>
        <div className='containers'>
          <Row >
            <Col sm={3}>
              <div style={{ marginTop: '20px' }}>
                <h2>Popular on Medium</h2>
                <hr></hr>
                <br></br>
                <br></br>
                <ol>
                  <li>
                    <h5>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h5>
                    <p><span className="black">Corinne Purtill in OneZero</span>
                      <br></br>
                      Sep 30 . 3 min read
                    </p>
                  </li>
                  <li>
                    <h5>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h5>
                    <p><span className="black">Corinne Purtill in OneZero</span>
                      <br></br>
                      Sep 30 . 3 min read
                    </p>
                  </li>
                  <li>
                    <h5>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h5>
                    <p><span className="black">Corinne Purtill in OneZero</span>
                      <br></br>
                      Sep 30 . 3 min read
                    </p>
                  </li>
                  <li>
                    <h5>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h5>
                    <p><span className="black">Corinne Purtill in OneZero</span>
                      <br></br>
                      Sep 30 . 3 min read
                    </p>
                  </li>
                </ol>
                <hr></hr>

              </div>
              <div>
                <Navbar bg="light" variant="light" style={{ padding: '0', height: '20px' }}>
                  <Nav style={{ fontSize: '12px', maxWidth: '330px' }}>
                    <Nav.Link href="#home" style={{ paddingLeft: '0' }}>Help</Nav.Link>
                    <Nav.Link href="#features">Status</Nav.Link>
                    <Nav.Link href="#pricing">Writers</Nav.Link>
                    <Nav.Link href="#features">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Careers</Nav.Link>
                  </Nav>
                </Navbar>
                <Navbar bg="light" variant="light" style={{ paddingLeft: '0', padding: '0', height: '20px' }}>
                  <Nav style={{ fontSize: '12px', maxWidth: '330px' }}>
                    <Nav.Link href="#pricing" style={{ paddingLeft: '0' }}>Privacy</Nav.Link>
                    <Nav.Link href="#features">Terms</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                  </Nav>
                </Navbar>
              </div>
            </Col>
            <Col sm={{ span: 8, offset: 1 }}>
              <div>
                <Media>
                  <Media.Body>
                    <h3>MENTAL HEALTH <span className="italic">Popular topic</span></h3>
                    <h4>Want a Happier, More Fulfilling life? 75-year Harvard Study Says Focus on This 1 Thing</h4>
                    <p>
                      A Google search for "secret to happiness" return 7,500,000+ results. That's a lot of people searching for something Harvard already found.
                    </p>
                    <br></br>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                    >
                      <p><span className="black">Patrick Ewers in Better Humans</span> <br></br>
                        Sep 30 . 3 min read</p>
                      <div>
                        <BookmarkBorderIcon style={{ fontSize: 25 }} />
                        <MoreHorizIcon style={{ fontSize: 25 }} />
                      </div>
                    </Grid>

                  </Media.Body>
                  <img
                    width={150}
                    height={170}
                    className="ml-3"
                    src={"https://imgur.com/download/vRUSjFt"}
                    alt="Generic placeholder"
                  />
                </Media>
              </div>
              <br></br>
              <br></br>
              <div>
                <Media>
                  <Media.Body>
                    <h3>MENTAL HEALTH <span className="italic">Popular topic</span></h3>
                    <h4>Want a Happier, More Fulfilling life? 75-year Harvard Study Says Focus on This 1 Thing</h4>
                    <p>
                      A Google search for "secret to happiness" return 7,500,000+ results. That's a lot of people searching for something Harvard already found.
                    </p>

                    <p><span className="black">Patrick Ewers in Better Humans</span> <br></br>
                      Sep 30 . 3 min read</p>
                  </Media.Body>
                  <img
                    width={150}
                    height={170}
                    className="ml-3"
                    src={"https://imgur.com/download/vRUSjFt"}
                    alt="Generic placeholder"
                  />
                </Media>
              </div>
              <br></br>
              <br></br>
              <div>
                <Media>
                  <Media.Body>
                    <h3>MENTAL HEALTH <span className="italic">Popular topic</span></h3>
                    <h4>Want a Happier, More Fulfilling life? 75-year Harvard Study Says Focus on This 1 Thing</h4>
                    <p>
                      A Google search for "secret to happiness" return 7,500,000+ results. That's a lot of people searching for something Harvard already found.
                    </p>
                    <br></br>
                    <p><span className="black">Patrick Ewers in Better Humans</span> <br></br>
                      Sep 30 . 3 min read</p>
                  </Media.Body>
                  <img
                    width={150}
                    height={170}
                    className="ml-3"
                    src={"https://imgur.com/download/vRUSjFt"}
                    alt="Generic placeholder"
                  />
                </Media>
              </div>
              <br></br>
              <br></br>
              <div>
                <Media>
                  <Media.Body>
                    <h3>MENTAL HEALTH <span className="italic">Popular topic</span></h3>
                    <h4>Want a Happier, More Fulfilling life? 75-year Harvard Study Says Focus on This 1 Thing</h4>
                    <p>
                      A Google search for "secret to happiness" return 7,500,000+ results. That's a lot of people searching for something Harvard already found.
                    </p>
                    <br></br>
                    <p><span className="black">Patrick Ewers in Better Humans</span> <br></br>
                      Sep 30 . 3 min read</p>
                  </Media.Body>
                  <img
                    width={150}
                    height={170}
                    className="ml-3"
                    src={"https://imgur.com/download/vRUSjFt"}
                    alt="Generic placeholder"
                  />
                </Media>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

export default App;

