import React, { useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import FlyerItem from "./FlyerItem";
import useInfiniteScroll from "../customHooks/useInfiniteScroll";

import {
  getPublishedFlyers,
  getFlyersLoading,
  getFlyersPage
} from "./selectors";
import { loadFlyers, toggleFavorites } from "./thunks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem 0.5rem",
  },
}));

const FlyerList = ({ loadFlyers, isLoading, publishedFlyers, page, useInfiniteScroll, onFavoritePressed}) => {
  const classes = useStyles();
  let bottomBoundaryRef = useRef(null);

  useInfiniteScroll(bottomBoundaryRef);
  useEffect(() => {
    loadFlyers(page);
  }, [page]);

  let imageNum = 0;
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {publishedFlyers.map((flyer, index) => (
          <Grid key={index} xs={6} sm={3} item>
            <FlyerItem
              flyer={flyer}
              onFavoritePressed={onFavoritePressed}
              imageNum={(imageNum = imageNum >= 5 ? 0 : imageNum + 1)}
            />
          </Grid>
        ))}

        {isLoading && <div style={{width: "100%"}}><LinearProgress /></div>}

        <div
          id="page-bottom-boundary"
          style={{ border: "1px solid red" }}
          ref={bottomBoundaryRef}
        ></div>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: getFlyersLoading(state),
  publishedFlyers: getPublishedFlyers(state),
  page: getFlyersPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFlyers: (page) => dispatch(loadFlyers(page)),
  useInfiniteScroll: (ref) => dispatch(useInfiniteScroll(ref)),
  onFavoritePressed: (flyer) => dispatch(toggleFavorites(flyer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlyerList);
