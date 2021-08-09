import React, { useEffect, useState } from 'react'

function Portfolio() {
  const [myRepos, setMyRepos] = useState([])
  const [lastEditedRepos, setLastEditedRepos] = useState([])
  // https://api.github.com/users/FaaDiiL/repos
  const fetchGithubRepo = async () => {
    try {
      const res = await fetch('https://api.github.com/users/FaaDiiL/repos')

      const repos = await res.json()
      setMyRepos(repos)
    } catch (error) {
      console.log(error)
    }
  }
  const lastUpdatedRepos = async () => {
    try {
      const res = await fetch(
        'https://api.github.com/search/repositories?q=org:FaaDiiL&sort=updated&order=desc'
      )
      const repos = await res.json()
      setLastEditedRepos(repos.items)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchGithubRepo()
    lastUpdatedRepos()
  }, [])

  return (
    <div>
      <h2>Portfolio</h2>
      <h3>3 last edited projects</h3>
      <ul>
        {lastEditedRepos
          .filter((last, i) => {
            return i <= 2
          })
          .map(({ id, name, description, updated_at, html_url }) => (
            <li key={id}>
              <h3>{name}</h3>
              <p>Description: {description}</p>
              <p>Last Updated: {updated_at}</p>
              <a href={html_url} target='_blank'>
                GITHUB
              </a>
            </li>
          ))}
      </ul>
      <br />
      <h3>All projects</h3>

      <ul>
        {myRepos.map(({ id, name, description, updated_at, html_url }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>Description: {description}</p>
            <p>Last Updated: {updated_at}</p>
            <a href={html_url} target='_blank'>
              GITHUB
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio
