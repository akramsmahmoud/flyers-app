import { makeStyles } from "@material-ui/core/styles";

const FlyerItemStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  media: {
    height: 160,
    width: "100%",
  },
  cartContent: {
    paddingBottom: 0,
    width: "100%",
  },
  retailer: {
    fontSize: "0.7rem",
    fontWeight: 600,
    marginBottom: 5,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  title: {
    fontSize: "1.1rem",
    marginBottom: 5,
    fontWeight: 600,
  },
  category: {
    fontSize: "0.9",
    textTransform: "capitalize",
    color: "#9c9c9c",
  },
  cardActions: {
    alignItems: "center",
    width: "100%",
    marginTop: "auto",
  },
  icon: {
    paddingTop: 0,
  },
});


export default FlyerItemStyles;