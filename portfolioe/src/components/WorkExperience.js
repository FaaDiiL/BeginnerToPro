import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))
function WorkExperience() {
  const classes = useStyles()

  return (
    <Grid container id='work-experience'>
      <h3>Work Experience</h3>
      <ul>
        <li>
          <p>
            <b>Company: </b> Kristianstad Kommun - Kulltorp School
          </p>
          <p>
            <b>Date: </b>Feb 2015 - Dec 2016 {/* (2 år 3 månader) */}
          </p>
          <p>
            <b>Location: </b>Kristianstad City, Sweden
          </p>
          <p>
            <b>Description: </b>I worked at a municipal school as a student
            assistant and extra resource.
          </p>
        </li>

        <li>
          <p>
            <b>Company: </b> Markona AB - Construction worker
          </p>
          <p>
            <b>Date: </b>Jan 2014 - Okt 2014{/* (2 år 3 månader) */}
          </p>
          <p>
            <b>Location: </b>Uppsala City, Sweden
          </p>
          <p>
            <b>Description: </b>I worked as a construction worker on a project
            where we would develop and enlarge the train station in Knivsta,
            Uppsala.
          </p>
        </li>

        <li>
          <p>
            <b>Company: </b> Aleris AB - Care assistant
          </p>
          <p>
            <b>Date: </b>Jan 2013 - August 2014{/* (2 år 3 månader) */}
          </p>
          <p>
            <b>Location: </b>Uppsala City, Sweden
          </p>
          <p>
            <b>Description: </b>Here at Aleris, I worked as a care assistant,
            visited elderly people and people who need support to offer them
            service and care and give them help with everyday care.
          </p>
        </li>

        <li>
          <p>
            <b>Company: </b> Reffect AB - Telemarketer
          </p>
          <p>
            <b>Date: </b>Jan 2012 - April 2013{/* (2 år 3 månader) */}
          </p>
          <p>
            <b>Location: </b>Uppsala City, Sweden
          </p>
          <p>
            <b>Description: </b>This company collaborated with other companies
            and marketed their services and products. I was a salesman who sold
            electricity contracts for one of Sweden's largest electricity
            companies, Vattenfall AB. I was selected as the best seller of the
            month on several occasions.
          </p>
        </li>
      </ul>
    </Grid>
  )
}

export default WorkExperience
