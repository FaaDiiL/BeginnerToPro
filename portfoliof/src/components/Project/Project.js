import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles({
  root: {},
  media: {
    height: 140,
  },
  description: {
    height: 50,
  },
})

function Project({ last }) {
  const classes = useStyles()
  const [gitRepositories, setGithubRepositories] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/FaaDiiL/repos?sort=updated&order')
      .then((response) => response.json())
      .then((data) => setGithubRepositories(data))
  }, [])

  return (
    <Grid container spacing={2}>
      {
        last ? gitRepositories.filter((repo,i)=>{
          return i <= 2
        }).map(({name, updated_at, id, description, html_url})=>(
          <Grid item xs={12} md={6} lg={4} key={id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://picsum.photos/200/300'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {name.substring(0, 1).toUpperCase() + name.slice(1)}
                </Typography>
                <Typography
                  variant='body2'
                  color='text'
                  component='p'
                  className={classes.description}
                >
                  Description:
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    className={classes.description}
                  >
                    {description ? description : 'No Description yet!'}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                <a href={html_url} target='_blank'>
                  Github
                </a>
              </Button>
              <Button
                size='small'
                color='primary'
                onClick={(e) => alert('Demo site Coming soon!')}
              >
                Demo
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                {`Updated at: ${updated_at.substring(
                  0,
                  10
                )} ${updated_at.substring(11, updated_at.length - 1)}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        )):gitRepositories.map(({name, updated_at, id, description, html_url})=>(
          <Grid item xs={12} md={6} lg={4} key={id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://picsum.photos/200/300'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {name.substring(0, 1).toUpperCase() + name.slice(1)}
                </Typography>
                <Typography
                  variant='body2'
                  color='text'
                  component='p'
                  className={classes.description}
                >
                  Description:
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    className={classes.description}
                  >
                    {description ? description : 'No Description yet!'}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                <a href={html_url} target='_blank'>
                  Github
                </a>
              </Button>
              <Button
                size='small'
                color='primary'
                onClick={(e) => alert('Demo site Coming soon!')}
              >
                Demo
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                {`Updated at: ${updated_at.substring(
                  0,
                  10
                )} ${updated_at.substring(11, updated_at.length - 1)}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        ))
      }
    </Grid>
  )
}

export default Project
