import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))
function Education() {
  const classes = useStyles()

  return (
    <Grid container id='work-experience'>
      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <p>
              <b>School: </b>Udemy.com - HTML5 & CSS3
            </p>
            <p>
              <b>Date: </b>Dec 2022 - Feb 2021
            </p>
            <p>
              <b>Location: </b>Kristianstad City, Sweden
            </p>
            <p>
              <b>Description: </b> This is a course that i bought on Udemy.com
              to learn more advanced ways to learn modern web design, in HTML5 &
              CSS3. <p>Certificate based Course.</p>
            </p>
          </li>

          <li>
            <p>
              <b>School: </b>Udemy.com - MERN Stack Front to Back
            </p>
            <p>
              <b>Date: </b>April 2019 - Juli 2019
            </p>
            <p>
              <b>Location: </b>Kristianstad City, Sweden
            </p>
            <p>
              <b>Description: </b> This is a course that i bought on Udemy.com
              to learn how to build and deploy a social network application.
              With Node.js, Express, React, Redux & MongoDB.
              <p>Certificate based Course.</p>
            </p>
          </li>

          <li>
            <p>
              <b>School: </b>Lernia polytechnic - Javascript Fullstack
              Webdeveloper
            </p>
            <p>
              <b>Date: </b>Jan 2017 - Juni 2019
            </p>
            <p>
              <b>Location: </b>Malmö City, Sweden
            </p>
            <p>
              <b>Description: </b> Here I learned about web development
              Javascript, HTML5, CSS3, Api, Database and much more. Both
              frontend and backend.
            </p>
          </li>

          <li>
            <p>
              <b>School: </b>Soderport high school
            </p>
            <p>
              <b>Date: </b>Augusti 2009 - Juni 2012
            </p>
            <p>
              <b>Location: </b>Kristianstad City, Sweden
            </p>
            <p>
              <b>Description: </b> Business and Administration
            </p>
          </li>
        </ul>
      </section>
    </Grid>
  )
}

export default Education
