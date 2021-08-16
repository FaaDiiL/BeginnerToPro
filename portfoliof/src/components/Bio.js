import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '333px'
  },
})

function Bio() {
     const classes = useStyles()

     return (
          <Grid container id='work-experience'>
            <Grid item xs={12} id="Bio">     
              <h3>Bio</h3>
              <p>
                I am a person who love to code in HTML/CSS/React, Redux and many more.
                My main goal is to get certification in fullstack developing and get
                better in coding.
              </p>
            </Grid>
          </Grid>
     )
}

export default Bio

