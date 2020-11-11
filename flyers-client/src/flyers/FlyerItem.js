import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import FlyerItemStyles from './FlyerItemStyles';
import {getFavoriteFlyers} from "./selectors";
import f1 from "../img/f1.jpg";
import f2 from "../img/f2.jpg";
import f3 from "../img/f3.jpg";
import f4 from "../img/f4.jpg";
import f5 from "../img/f5.jpg";
import f6 from "../img/f6.jpg";

const possibleImage = [f1,f2,f3,f4,f5,f6];


const FlyerItem = ({ flyer, imageNum, onFavoritePressed, favoriteFlyers }) => {
  const classes = FlyerItemStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={possibleImage[imageNum]}
        title="Paella dish"
      />
      <CardContent className={classes.cartContent}>
        <Typography variant="h3" className={classes.retailer}>
          {flyer.retailer}
        </Typography>
        <Typography variant="h2" className={classes.title}>
          {flyer.title}
        </Typography>
        <Typography variant="body2" className={classes.category}>
          {flyer.category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="add to favorites"
          className={classes.icon}
          onClick={() => onFavoritePressed(flyer)}
          color={favoriteFlyers.some((f) => f.id === flyer.id) ? "primary" : "default"}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}


const mapStateToProps = (state) => ({
  favoriteFlyers: getFavoriteFlyers(state),
});

export default connect(mapStateToProps)(FlyerItem);