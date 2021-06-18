import React ,{ useEffect, useState } from 'react'

function Portfolio() {
     const [myRepos, setMyRepos] = useState([])
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
     useEffect(() => {
          fetchGithubRepo()
     }, []);

     return (
          <div>
          <h2>Portfolio</h2>
               <ul>
               {myRepos.map(({id,name,description,updated_at,html_url})=>(
                    <li key={id}>
                         <h3>{name}</h3>
                         <p>Description: {description}</p>
                         <p>Last Updated: {updated_at}</p>
                         <a href={html_url} target="_blank">GITHUB</a>
                    </li>
               ))}
                    
               </ul>
          </div>
     )
}

export default Portfolio
