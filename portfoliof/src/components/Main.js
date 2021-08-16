import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Contact from './Contact'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Bio from './Bio'
import Project from './Project/Project';

const useStyles = makeStyles({
  root: {
    width: '333px'
  },  
})

function Main() {
  const classes = useStyles()

  return (
    <main className={{className: classes.root}}>
      <Bio />
     <WorkExperience />      
      <Education />
      <section id='Portfolio'>
        <h3>3 last edited projects</h3>
        <Project last={3} />
        <h3>All projects</h3>
        <Project />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
    </main>
  )
}

export default Main
