import React from 'react';
import { Box, Grid } from "@material-ui/core";
import Header from './components/Layouts/Header'
import Home from './components/Index'

const App = () => {
  return (
      <Box 
        className="App"
        style={{height: "100%"}}>
        <Header/>

        <Grid container 
              style={{ height: "calc(100vh - 100px)", justifyContent: "center" }}      
        >
          <Home/>
        </Grid>

      </Box>
  );
}

export default App;
