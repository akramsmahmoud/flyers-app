import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import LeftDrawer from "./common/Drawer";
import FlyerList from "./flyers/FlyersList";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "1.5rem"
  },
}));

const App = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <LeftDrawer />
            <Typography variant="h1" className={classes.title}>
              Shopfully
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <FlyerList />
        </Container>
      </div>
    );
};

export default App;



