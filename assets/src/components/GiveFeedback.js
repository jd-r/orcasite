import React from "react"
import { AppBar, Button, Link, Grid, makeStyles, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, RadioGroup, Radio, FormControlLabel } from "@material-ui/core"

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
}))

const GiveFeedback = () => {
  const classes = useStyles()
  const feedbackLink = `https://forms.gle/wKpAnxzUh9a5LMfd7`
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
          <Dialog open={open} scroll="body" onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogContent>
              <DialogTitle id="form-dialog-title">Orcasound Feedback Form</DialogTitle>
              <DialogContentText color="#000000">
              Please complete this survey once for each combination of device, operating system, & browser that you test. Thank you for answering as many questions as possible to help us fully understand your experience and improve Orcasound!
              </DialogContentText>
            </DialogContent>
            <DialogContent>
              Email Address
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Your email"
                type="email"
                fullWidth
              />
            </DialogContent>

            <DialogContent>
              What brought you to Orcasound today?
              <TextField
                autoFocus
                margin="dense"
                id="what"
                label="Your answer"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogContent>
              Where did you listen to Orcasound today?
              <DialogContentText color="#000000">
              Common answers: On my bus commute to work, driving to pick up my kids, while working, at home in my living room, etc.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="where"
                label="Your answer"
                type="text"
                fullWidth
              />
            </DialogContent>  
            <DialogContent>
              What type of device are you using to listen?
              <RadioGroup aria-label="device" name="device">
                <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                <FormControlLabel value="tablet" control={<Radio />} label="Tablet" />
                <FormControlLabel value="desktop" control={<Radio />} label="Desktop" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default GiveFeedback
