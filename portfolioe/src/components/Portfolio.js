import React, { useState, useEffect } from 'react'

function Portfolio() {
  const [myRepos, setMyRepos] = useState([])
  const [lastEditedRepos, setLastEditedRepos] = useState([])

  const fetchGithubRepo = async () => {
    const res = await fetch('https://api.github.com/users/eyadal/repos')
    const repos = await res.json()
    setMyRepos(repos)
  }
  const fetchLastEditedRepos = async () => {
    const res = await fetch(
      'https://api.github.com/search/repositories?q=org:eyadal&sort=updated&order=desc'
    )
    const repos = await res.json()
    setLastEditedRepos(repos.items)
  }
  useEffect(() => {
    fetchGithubRepo()
    fetchLastEditedRepos()
  }, [])

  return (
    <div className='portfolio'>
      <h2>Portfolio</h2>
      <h3>Last Edited Repository</h3>
      <ul>
        {lastEditedRepos
          .filter((repo, i) => {
            return i <= 2
          })
          .map(({ id, name, description, updated_at, html_url }) => (
            <li key={id}>
              <h3>{name}</h3>
              <p>Description {description}</p>
              <p>Last updated {updated_at}</p>
              <a href={html_url} target='_blank'>
                Github
              </a>
            </li>
          ))}
      </ul>
      <br />
      <h3>All Projects</h3>
      <ul>
        {myRepos.map(({ id, name, description, updated_at, html_url }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>Description {description}</p>
            <p>Last updated {updated_at}</p>
            <a href={html_url} target='_blank'>
              Github
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio
