import React, {useState, useEffect} from 'react'

function Portfolio() {
    const [myRepos, setMyRepos] = useState([])
    const fetchGithubRepo = async () => {
        const res = await fetch('https://api.github.com/users/eyadal/repos')
        const repos = await res.json()
        setMyRepos(repos)
    }
    useEffect (() => {
        fetchGithubRepo()

    }, [])
    
    return (
        <div>
            <h2>Portfolio</h2>
            <ul>
                {myRepos.map(({id, name, description, updated_at, html_url}) =>( 
                   <li key ={id}>
                    <h3>{name}</h3>
                    <p>Description {description}</p>
                    <p>Last updated {updated_at}</p>
                    <a href={html_url} target="_blank">Github</a>
                </li> 
                ))}
                
            </ul>
                   
        </div>
    )
}

export default Portfolio
