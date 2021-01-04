import React from 'react'
import List from '@material-ui/core/List'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import Message from './Message'
import { Fragment } from 'react'


const data = [
    {
        id: '0',
        question: 'Leo',
        reponse: 'Bonjour'
    },
    {
        id: '1',
        question: 'hi bot',
        reponse: 'Hello'
    },
    {
        id: '2',
        question: 'Leo',
        reponse: 'Bonjour'
    },
    {
        id: '3',
        question: 'hi bot',
        reponse: 'Hello'
    }
]
let chats = []
class Index extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            message: "",
            data: data
        }
    }

    handleInput(e) {
        this.setState({
          message: e.target.value
        })
      }
    

    onSendMessage = () => {
        chats = [...chats, {
            message: this.state.message,
            incommingMsg: false,
            sendMsg: true
        }]
        console.log(chats.message);
        setTimeout(() => {
            this.IncommingMessage(this.state.message)
        }, 1000)
        this.setState({message: ''})
    }

    IncommingMessage = (q) => {
        for(let i=0; i< data.lenght; i++){
            if(data[i].question.includes(q.toLowerCase())){
                chats = [...chats, { 
                    message: data[i].reponse,
                    incommingMsg: true,
                    sendMsg: false
                }]
                return;
            }
        }
        chats = [...chats, { 
            message: "Message non reconnu",
            incommingMsg: true,
            sendMsg: false
        }]
        return;

    }

    render() {

        const styles = {
            chatList: {
                maxWidth: "1200px",
                height: "85vh",
                margin: "auto",
                width: "100%",
                padding: 5,
                overflowY: "scroll"
            }
        }        

        return (
            <Fragment>
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
                <Container>
                    <TextField 
                        placeholder="Entrez un message"
                        style={{width:"90%"}}
                        value={this.state.message}
                        onChange={(value) => this.handleInput(value)}
                    />
                    <Button
                        color="primary"
                        style={{width:"5%"}}
                        onClick={()=> this.onSendMessage()}
                        disabled={this.state.message? false : true}
                    >
                        <SendIcon/>
                    </Button>
                </Container>
            </Fragment>
        )
    }
}


export default Index
