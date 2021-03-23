import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import Chats from './Chats/Index'


class Index extends React.Component {

  render() {
    return (
      <Grid item xs={12}>
        <Paper elevation={5}>
          <Chats />
        </Paper>
      </Grid>
    )
  }
}

export default Index
