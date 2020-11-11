import React from "react";
import { connect } from "react-redux";
import { getFavoriteFlyers } from "./selectors";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  fullList: {
    width: "auto",
    padding: ".5rem 1rem",
  },
  listItem: {
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
});

const FavoriteList = ({ favoriteFlyers  }) => {
  const classes = useStyles();

  return (
    <List className={classes.fullList}>
      {favoriteFlyers.length ? favoriteFlyers.map((flyer, i) => (
        <ListItem
          button
          key={i}
          className={classes.listItem}
          disableGutters={true}
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary={flyer.title} />
        </ListItem>
      )) : <div>Add some favorite flyers!</div>}
    </List>
  );
};

const mapStateToProps = (state) => ({
  favoriteFlyers: getFavoriteFlyers(state),
});

export default connect(mapStateToProps)(FavoriteList);