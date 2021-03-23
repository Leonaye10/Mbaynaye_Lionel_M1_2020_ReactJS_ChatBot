import React, { Fragment } from 'react'
//import Box from "@material-ui/core/Box";
//import Typography from "@material-ui/core/Typography";

class Message extends React.Component {

  render() {
    const styles = {
      incommingMsgBox: {
        display: 'flex',
        alignItems: 'center',
      },
      incommingMsgText: {
        color: 'black',
        background: '#e5e5ea',
        borderRadius: 10,
        padding: 5,
        margin: 5,
      },
      sendMsgBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row-reverse',
      },
      sendMsgText: {
        color: 'white',
        alignSelf: 'flex-end',
        background: '#0b93f6',
        borderRadius: 10,
        padding: 5,
        margin: 5,
      },
      img: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        margin: '2px 5px',
      },
    }


    return (
      <Fragment>
        {/* ChatBot message */
          this.props.incommingMsg && (
            <div style={styles.incommingMsgBox}>
              <img style={styles.img} src='https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg' alt='ChatBot' />
              <p style={styles.incommingMsgText}>{this.props.message}</p>
            </div>

          )
        }

        {/* User message */
          this.props.sendMsg && (
            <div style={styles.sendMsgBox}>
              <img style={styles.img} src='https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png' alt='Leo' />
              <p style={styles.sendMsgText}>{this.props.message}</p>
            </div>
          )
        }
      </Fragment>
    )

  }
}
export default Message
