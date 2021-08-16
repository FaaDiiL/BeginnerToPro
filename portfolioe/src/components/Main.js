import React from 'react'
import Project from './Project/Project'
import Contact from './Contact'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Bio from './Bio'

function Main() {
  return (
    <main>
      <section id='Bio' />
      <Bio />
      <section />

      <section id='WorkExperience' />
      <WorkExperience />
      <section />

      <section id='Education' />
      <Education />
      <section />

      <section id='Portfolio' />
      <h3>Last Edited Projects</h3>
      <Project last={3} />
      <h3>All Projects</h3>
      <Project />
      <section />

      <section id='Contact' />
      <Contact />
      <section />
    </main>
  )
}

export default Main
