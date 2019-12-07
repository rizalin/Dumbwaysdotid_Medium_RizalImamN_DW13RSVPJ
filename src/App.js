import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



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
    padding: theme.spacing(1, 1, 1),
    textAlign: "center",
    flexDirection: "row",
    display: "flex",
    marginLeft: "250px",
    marginRight: "250px",
    marginTop: '50px',
  },
  isiContent: {
    paddingLeft: '30px',
    paddingRight: '30px',
    marginTop: '5px',
    paddingTop: '0px',
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
    textAlign: "center",


  }
}));

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


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
            <div>
              <img src={'https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png'} />
            </div>
            <div className={classes.isiContent}>
              <h1 id="transition-modal-title" style={{ margin: '10px' }}>Join Medium.</h1>
              <p id="transition-modal-description" style={{ fontSize: '14px' ,color:'#757575'}}>Create an account to receive great stories in your inbox,
              personalize your homepage, and follow authors and topics that your love.</p>

              <div className={classes2.root}>
                <form className={classes2.root2} noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Your Username" />
                  <TextField
                    id="standard-password-input"
                    label="Your password"
                    className={classes2.textField}
                    type="password"
                    autoComplete="current-password"
                  />
                  <TextField id="standard-basic" label="Your Email" />
                  <br></br>
                  <br></br>
                  <ColorButton type='submit' variant="outlined" color="default">
                    Registration
                  </ColorButton>
                </form>
              </div>
              <br></br>
              <p style={{ fontWeight: 'bold' }}>Already have an account? <a href='/login'>Sign in</a> </p>
              <p style={{ fontSize: '14px', color:'#757575' }}>To make Medium work, we log user data and share it with service provider. Click "Sign Up" above to accept
                  Medium's <u>Term of Service</u> and <u>Privacy Policy.</u>
              </p>

            </div>
            <div>
              <img src={"https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png"} />
            </div>

          </div>

        </Fade>
      </Modal>
    </div>
  );
}
