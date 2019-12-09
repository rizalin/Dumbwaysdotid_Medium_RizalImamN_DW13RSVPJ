import React, {Component} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Register from "./register"

library.add(fab, faChevronLeft)

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #FFF',
    boxShadow: theme.shadows[5],
    padding: '0px',
    textAlign: "center",
    flexDirection: "row",
    display: "flex",
    maxWidth:'70%',
    maxHeight: '80%'

  },
  isiContent: {
    paddingLeft: '200px',
    paddingRight: '200px',
    marginTop: '20px',
    paddingTop: '0px',
    width: '400px'
  }
}));

const useStyles2 = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      display: 'block',
      textAlign: 'center',

    },

  },
  root2: {
    margin: theme.spacing(1),
    display: "inline-block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: '25px',
    textAlign: "center",
    paddingLeft: '15px',
    paddingRight: '15px',
  }
}));



const ColorButton = withStyles(theme => ({
  root: {
    color: '#FFF',
    backgroundColor: '#000',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
}))(Button);


export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes2 = useStyles2();

  
  
  return (
    <div>
      <Router>
        <Button type="button" onClick={handleOpen} variant='contained'>
          Get Started
      </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className={classes.isiContent}>
                <h1 id="transition-modal-title" style={{ margin: '10px' }}>Sign in with email</h1>
                <p id="transition-modal-description" style={{ fontSize: '14px', color: '#757575' }}>Enter the email address
              associated with your account, and we'll send a magic link to your inbox.</p>

                <div className={classes2.root}>
                  <form className={classes2.root2} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Your E-mail"  />
                    <br></br>
                    <br></br>
                    <br></br> 
                    <TextField
                      id="standard-password-input"
                      label="Your password"
                      className={classes2.textField}
                      type="password"
                      autoComplete="current-password"
                      
                    />

                    <br></br>
                    <br></br>
                    <br></br>
                    <ColorButton type='submit' variant="outlined" color="default">
                      Continue
                  </ColorButton>
                  </form>
                </div>
                <br></br>
                <p style={{ fontWeight: 'bold' }}><Link to='/1.register'><FontAwesomeIcon icon="chevron-left" style={{ marginRight: '5px' }} />All sign in option</Link> </p>
                <br></br>
                <br></br>
                <br></br>
                <Switch>
                  <Route path="/1.register">
                    <Register />
                  </Route>
                </Switch>
              </div>


            </div>

          </Fade>
        </Modal>
      </Router>
    </div>

  );
}
