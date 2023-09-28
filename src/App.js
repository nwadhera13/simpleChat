import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

// import { withStyles } from "@mui/material/styles";
// import { styled } from '@mui/system';
const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    boxShadow: 'none',
  }
});


class App extends Component {
  state = {
    isLoggedIn:false,
    messages:[],
    value:'',
    name:'',
    room:'vacad',
  }
  client = new W3CWebSocket('ws://localhost:8000/ws/chat/' + this.state.room + '/');

  onButtonClicked = (e) => {
    this.client.send(JSON.stringify({
      type: "message",
      message: this.state.value,
      name: this.state.name
    }));
    this.state.value = ''
    e.preventDefault();
  }


  componentDidMount() {
    this.client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    this.client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer.type);
      if (dataFromServer) {
        this.setState((state) =>
          ({
            messages: [...state.messages,
            {
              msg: dataFromServer.message,
              name: dataFromServer.name,
            }]
          })
        );
      }
    };
  }
  render(){
    const {classes} =this.props;
    return (
      <div className="container dark">
        <div className='app'>
      <Container component="main" maxWidth="xs">

{this.state.isLoggedIn ?
          <div className='app'>
            <Typography component="h1" variant="h5">
              <div className='app-header'>
                simpleChat
              </div>
                </Typography>
                <div className='note'>
            <div className='note-header'>
                <p>Room Name: {this.state.room}</p>
            </div>
        </div>
            
            <Paper style={{ height: 500, maxHeight: 500, overflow: 'auto', boxShadow: 'none', }}>
              {this.state.messages.map(message => <>
                <Card className="">
                  <CardHeader
                    avatar={
                      <Avatar className="">
                        R
                  </Avatar>
                    }
                    title={message.name}
                    subheader={message.msg}
                  />
                </Card>
              </>)}
            </Paper>

            <form className="" noValidate onSubmit={this.onButtonClicked}>
              <TextField
                id="outlined-helperText"
                label="Enter Message"
                defaultValue="Default Value"
                variant="standard"
                value={this.state.value}
                fullWidth
                color='success'
                onChange={e => {
                  this.setState({ value: e.target.value });
                  this.value = this.state.value;
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                className=""
              >
                Send Text
                </Button>
            </form>
          </div>
          :
          <div className='app'>
            <CssBaseline />
            
            
              <Typography component="h1" variant="h5">
              <div className='app-header'>
                simpleChat
              </div>
                </Typography>
               
              <form className="" noValidate onSubmit={value => this.setState({ isLoggedIn: true })}>
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Chatroom Name"
                  name="Chatroom Name"
                  autoFocus
                  color="success"
                  value={this.state.room}
                  onChange={e => {
                    this.setState({ room: e.target.value });
                    this.value = this.state.room;
                  }}
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="Username"
                  label="Username"
                  type="Username"
                  id="Username"
                  color="success"
                  value={this.state.name}
                  onChange={e => {
                    this.setState({ name: e.target.value });
                    this.value = this.state.name;
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                  className=""
                >
                  Start Chatting
                  </Button>
              </form>
            
          </div>}


      </Container>
      </div>
      </div>
    )
  }
}
// export default withStyles(useStyles)(App)
export default (App)