import React from 'react'
import Project from './Project/Project'
import Contact from './Contact'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Bio from './Bio'
import { Grid, Typography } from '@material-ui/core'

function Main() {
  return (
    <div>
      <Grid container>
        <Bio />
        <WorkExperience />
        <Education />

        <Typography variant='h4' color='textPrimary' component='h4'>
          Last Edited Projects
        </Typography>
        <Project last={3} />
        <Typography variant='h4' color='textPrimary' component='h4'>
          All Projects
        </Typography>
        <Project />
        <Contact />
      </Grid>
    </div>
  )
}

export default Main
