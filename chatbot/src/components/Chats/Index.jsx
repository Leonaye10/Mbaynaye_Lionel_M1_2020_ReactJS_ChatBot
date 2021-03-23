import React from 'react';
import List from '@material-ui/core/List';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';
// import { Fragment } from 'react';
//import Contacts from './Contacts';

import { connect } from 'react-redux';
import store from '../../store';
import { sendMessage, receveMessage } from './actions';

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ""
    }
  }

  handleInput(e) {
    this.setState({
      message: e.target.value
    })
  }


  onSendMessage = () => {
    const { dispatch } = store;
    const { message } = this.state;

    dispatch(sendMessage(message));

    setTimeout(() => {
      this.IncommingMessage(message)
      this.setState({ message: '' })
    }, 500)
  }

  IncommingMessage = (q) => {
    const { dispatch } = store;
    const data = this.props.data;
    for (let index = 0; index < data.length; index++) {
      if (data[index].question.includes(q.toLowerCase())) {
        dispatch(receveMessage(data[index].reponse));
        return;
      }
    }
    dispatch(receveMessage('Message non reconnu'));
  }

  render() {

    const styles = {
      chatList: {
        height: "85vh",
        margin: "auto",
        padding: 5,
        overflowY: "scroll",
        backgroundColor: '#282c34',
      },
      container: {
        margin: 'auto',
        width: "100%",
      },
      message: {
        width: "95%",
        color: 'white',
      },
      sendBtn: {
        width: '5%',
      }
    }

    const { chats } = this.props.chatsList;

    return (
        <div styles={styles.container}>
          <List style={styles.chatList}>
            {
              chats.map((item, id) => (
                <Message
                  key={id}
                  message={item.message}
                  incommingMsg={item.incommingMsg}
                  sendMsg={item.sendMsg}
                />
              ))
            }
          </List>

          <TextField
            placeholder="Entrez un message"
            style={styles.message}
            value={this.state.message}
            onChange={(value) => this.handleInput(value)}
          />
          <Button
            color="primary"
            style={styles.sendBtn}
            onClick={() => this.onSendMessage()}
            disabled={this.state.message ? false : true}
          >
            <SendIcon />
          </Button>
        </div>
    )
  }
}

const mapToProps = (state) => ({
  data: state.data,
  chatsList: state.chatsList
});

export default connect(mapToProps)(Index);
