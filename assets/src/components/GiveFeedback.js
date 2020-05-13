import React from "react"
import { AppBar, Button, Grid, makeStyles, Dialog } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: "0",
    backgroundColor: "none",
    width: "9.25rem"
  },
  button: {
    bottom: 0,
    background: theme.palette.common.black,
    width: "9.25rem",
    height: "3rem",
    position: "fixed",
    borderRadius: ".5rem .5rem 0rem 0rem",
    opacity: ".8",
    "&:hover": {
      background: theme.palette.common.black
    },
    "&:focus": {
      outline: "none"
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

const GiveFeedback = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="relative" className={classes.appBar} color="inherit">
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-end"
      >
        <Grid item>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Give Feedback
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScE_6z5Mt6hijpKtgHITX2rpJqegSxI0KfENqpGnt_QYCXa0Q/viewform?embedded=true"
                    className={classes.iframe}/>
          </Dialog>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default GiveFeedback
