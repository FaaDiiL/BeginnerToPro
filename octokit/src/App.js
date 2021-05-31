import { Octokit } from "@octokit/rest"
import { useEffect, useState } from 'react'

import './App.css';

function App() {

  const octokit = new Octokit();
  const [fetchedData, setFetchedData] = useState([])
  useEffect(() => {
    octokit.rest.repos.get({
      owner: "microbit-matt-hillsdon",
      repo: "python-editor-modules-task",
 })
 .then(({ data }) => {
  setFetchedData([{
    name: data.name,
    description: data.description,
    image: data.owner.avatar_url,
    
  }])
 });
  }, [])

  setTimeout(() => {
    
  }, timeout);

console.log(fetchedData)
  return (
    <div className="App">

    </div>
  );
}

export default App;
