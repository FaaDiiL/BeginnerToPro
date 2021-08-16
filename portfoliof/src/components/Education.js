import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '333px',
  },
  li: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'space-evenly',
    border: '1px black solid',
    margin: '10px 0',
    padding: '0 10px',
  },
})

function Education() {
  const classes = useStyles()

  return (
    <Grid container id='work-experience'>
      <Grid item xs={12}>
        <h3>Education</h3>
      </Grid>

      <Grid item xs={12}>
        <ul>
          <li className={classes.li}>
            <h4>
              <b>School: </b>KYH Stockholm
            </h4>
            <p>
              <b>Date: </b>Augusti 2020 - Juni 2022
            </p>
            <p>
              <b>Location: </b>Stockholm, Sverige
            </p>
            <p>
              <b>Description: </b>Front-end Developer
            </p>
          </li>
          <li className={classes.li}>
            <h4>
              <b>School: </b>Udemy
            </h4>
            <p>
              <b>Date: </b>2019 juni - nu{' '}
            </p>
            <p>
              <b>Location: </b>http://www.udemy.com
            </p>
            <p>
              <b>Description: </b>
              MERN-Stack (MongoDB, ExpressJS, ReactJS, NodeJS), Javascript
              fundamentals, ReactJS, SQL-Database ...
            </p>
          </li>
          <li className={classes.li}>
            <h4>
              <b>School: </b>John bauer Hässleholm
            </h4>
            <p>
              <b>Date: </b>Augusti 2009 - maj 2012 (3 år)
            </p>
            <p>
              <b>Location: </b>Hässleholm, Sverige
            </p>
            <p>
              <b>Description: </b>It-Teknin
            </p>
          </li>
        </ul>
      </Grid>
    </Grid>
  )
}

export default Education
