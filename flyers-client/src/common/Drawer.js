import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FavoriteList from "../flyers/FavoriteList";
import avatar from "../img/avatar.png"
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  drawerTop: {
    padding: `2rem 1rem 0.5rem`,
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  subTitle: {
    fontSize: "0.8rem",
  },
  avatar: {
    marginBottom: `1rem`,
  },
});

export default function LeftDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        className={classes.drawer}
      >
        <div
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
          className={classes.list}
        >
          <header className={classes.drawerTop}>
            <Avatar
              alt="Remy Sharp"
              className={classes.avatar}
              src={avatar}
            />
            <Typography variant="h5" className={classes.title}>
              Favourites
            </Typography>
            <Typography variant="body1" className={classes.subTitle}>
              The list of your preferred flyers
            </Typography>
          </header>

          <Divider />

          <FavoriteList />
        </div>
      </Drawer>
    </React.Fragment>
  );
}
