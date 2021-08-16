import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  description: {
    height: 50,
  },
})

function Project({ last }) {
  const classes = useStyles()
  const [githubRepos, setGithubRepos] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/eyadal/repos?sort=updated&order')
      .then((response) => response.json())
      .then((data) => setGithubRepos(data))
  }, [])

  return (
    <Grid container spacing={2}>
      {last
        ? githubRepos
            .filter((repo, i) => {
              return i <= 2
            })
            .map(({ name, updated_at, id, description, html_url }) => (
              <Grid item xs={12} md={6} lg={4} key={id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt='Contemplative Reptile'
                      height='140'
                      image='https://picsum.photos/200/300'
                      title='Contemplative Reptile'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {name.charAt().toUpperCase() + name.slice(1)}
                      </Typography>
                      <CardContent>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='p'
                          className={classes.description}
                        >
                          {description}
                        </Typography>
                      </CardContent>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size='small' color='primary'>
                      <a href={html_url}>Github</a>
                    </Button>
                    <Button size='small' color='primary'>
                      <a href={html_url}>Surge</a>
                    </Button>
                  </CardActions>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Updated: {updated_at.slice(0, 10)}
                  </Typography>
                </Card>
              </Grid>
            ))
        : githubRepos.map(({ name, updated_at, id, description, html_url }) => (
            <Grid item xs={12} md={6} lg={4} key={id}>
              <Card className={classes.root}>
                (
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='140'
                    image='https://picsum.photos/200/300'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {name.charAt().toUpperCase() + name.slice(1)}
                    </Typography>
                    <CardContent>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                        className={classes.description}
                      >
                        {description}
                      </Typography>
                    </CardContent>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    <a href={html_url}>Github</a>
                  </Button>
                  <Button size='small' color='primary'>
                    <a href={html_url}>Surge</a>
                  </Button>
                </CardActions>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Updated: {updated_at.slice(0, 10)}
                </Typography>
              </Card>
            </Grid>
          ))}
    </Grid>
  )
}

export default Project
