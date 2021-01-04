import React, { Fragment } from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

class Message extends React.Component {

    render() {
        const styles = {
            incommingMsgBox: {
                backgroundColor: 'grey',
                maxWidth: '45%',
                borderRadius: 10,
                padding: 5,
                margin: 5,
                borderWidth: 0.5,
                borderColor: 'grey'
            },
            incommingMsgText: {
                color: 'black',
                fontSize: 15
            },
            sendMsgBox: {
                float: "right",
                backgroundColor: 'blue',
                maxWidth: '45%',
                borderRadius: 10,
                padding: 5,
                margin: 5
            },
            sendMsgText: {
                color: 'white',
                fontSize: 15
            }
        
        }
        

        return (
            <Fragment>
            {/* ChatBot message */
                this.props.incommingMsg && (
                    <Box style={styles.incommingMsgBox}>
                        <Typography style={styles.incommingMsgText}>{this.props.message}</Typography>
                        <Typography> {new Date().toLocaleDateString()} </Typography>
                    </Box>
                    
                )
            }
            
            {/* User message */ 
                this.props.sendMsg && (
                    <Box style={styles.sendMsgBox}>
                        <Typography style={styles.sendMsgText}>{this.props.message}</Typography>
                        <Typography style={{color: 'white'}}> {new Date().toLocaleDateString()} </Typography>
                    </Box>
                )
            } 
        </Fragment>
        )

    }
}
export default Message
