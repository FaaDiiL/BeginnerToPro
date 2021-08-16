import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '333px'
  },
  li: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'space-evenly',
    border: '1px black solid',
    margin: '10px 0',
    padding: '0 10px',
  }
})

function WorkExperience() {
     const classes = useStyles()

     return (
          <Grid container id='work-experience'>

          <Grid item xs={12}>
               <h3 >Work experience</h3>
          </Grid>

          <Grid item xs={12}>
          <ul>
            <li className={classes.li}>
              <h4><b>Company: </b>Kronans Apotek (ehandel) Logistik (6 månader)</h4>
              <p><b>Date: </b>Mars 2020 - Augusti 2020</p>
              <p><b>Location: </b> Enköping, Uppsala län, Sverige</p>
              <p><b>Description: </b> 
                Logistik / Lager - Truck körning, emballering, paketering, kassa,
                buffring mm.GDP GMP utförda.
              </p>
            </li>
            <li className={classes.li}>
              <h4><b>Company: </b>Nokas FLYGPLATSKONTROLLANT</h4>
              <p><b>Date: </b>juni 2019 - mars 2020 (10 månader)</p>
              <small><b>Location: </b>Stockholm, Sverige Sverige</small>
              <p><b>Description: </b>Flygplatskontrollant.</p>
            </li>
            <li className={classes.li}>
              <h4><b>Company: </b>SBK Sweden AB Administrativ - Ekonomiassistent</h4>
              <p><b>Date: </b>mars 2017 - maj 2019 (2 år 3 månader)</p>
              <p><b>Location: </b>Årsta, Stockholms län, Sverige</p>
              <p><b>Description: </b>
                Order in matning, fakturering, kassa, kundbemötande
                (direkt/mail/telefon),visma administration, Visma AutoCollect
                (Inkassotjänst) mm.
              </p>
            </li>
          </ul>
          </Grid>
        </Grid>
     )
}

export default WorkExperience

