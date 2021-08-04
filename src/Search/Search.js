import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import SimpleCard from "../SimpleCard/SimpleCard";

const useStyles = makeStyles((theme) => ({
  root: {

    padding: "10px",
    display: "flex",
    justifyContent: "center",
    width: '300px',
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  iconButton: {
    padding: 2,
  },
  mainDiv: {
    textAlign: '-webkit-center',
  }
}));

export default function Search() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
    <Paper component="form" className={classes.root}>
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
    <SimpleCard prop={null}/>
    </div>
  );
}
