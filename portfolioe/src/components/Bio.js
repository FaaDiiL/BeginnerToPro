import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))
function Bio() {
  const classes = useStyles()

  return (
    <Grid container id='Bio'>
      <section>
        <h2>Bio</h2>
        <p>
          Im Eyad Al Farhan, Im 31 year and I want to become a great Javascript
          developer!
        </p>
      </section>
    </Grid>
  )
}

export default Bio
