import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  Paper,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Typography,
  Box,
  Link,
  makeStyles,
  Dialog
} from "@material-ui/core"
import NotificationIcon from "@material-ui/icons/Notifications"
import FeedList from "./FeedList"

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: "180px",
    borderRadius: 0,
    "&:hover": {
      textDecoration: "none",
      color: "#000000"
    },
    "&:active": {
      color: "#15766b"
    },
    "&:visited": {
      color: "#000000"
    }
  },
  link: {
    "&:hover": {
      textDecoration: "none",
      color: "#ffffff"
    },
    "&:active": {
      color: "#15766b"
    },
    "&:visited": {
      color: "#ffffff"
    }
  },
  iframe: {
    [theme.breakpoints.down("xs")]: {
      width: "300px"
    },
    [theme.breakpoints.up("sm")]: {
      width: "400px"
    },
    [theme.breakpoints.up("md")]: { 
      width: "500px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "600px"
    },
    height:"760px"
  }
}))

const SiteMenu = () => {
  const classes = useStyles()
  const [value, setValue] = useState("about")
  const [open, setOpen] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper elevation={0} square>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography component="h1" variant="h1">
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
              variant="inherit"
              className={classes.link}
            >
              <Box ml={1} pt={3}>
                Orcasound
              </Box>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Button
        variant="contained"
        centered="true"
        fullWidth={true}
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        <Typography component="div">
          <Box zIndex={1}>
            <div
              color="inherit"
              variant="inherit"
              className={classes.link}
            >
              Get notified when there's whale activity
            </div>
          </Box>
        </Typography>
        <Box p={0.2}>
          <NotificationIcon />
        </Box>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegvsTLoxOE1-kRsI6M4dQzDGtqI7YVPlHrMk91Zz_uyqjBTg/viewform?embedded=true"
                className={classes.iframe}/>
      </Dialog>
      <Tabs
        variant="fullWidth"
        centered
        value={value}
        indicatorColor="primary"
        onChange={handleChange}
        scrollButtons="off"
      >
        <Tab
          className={classes.button}
          value="about"
          label="About"
          component={RouterLink}
          to="/"
        />
        <Tab value="listen" label="Listen Live" component={FeedList} />
      </Tabs>
    </Paper>
  )
}

export default SiteMenu
