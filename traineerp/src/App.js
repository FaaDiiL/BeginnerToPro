import { useEffect, useState } from 'react'

import Posts from './components/Posts'

import './App.css';

function App() {

  // TODO 1. save the data you fetch to an object
  // Todo 2. Use the data like this
    // TODO 2 <div> <h1>{title}</h1> <h3>{id}</h3> <textarea>{body}</textarea> </div>
    let [myUsersData, setMyUsersData] = useState([])
    
    function addUser(e){
      e.preventDefault()
      
        fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((usersData) => {
          setMyUsersData([...myUsersData, ...usersData.results])
        })
      }
      
      useEffect(() => {
        console.log(myUsersData)
        
      }, [myUsersData]);
    
  return (
    <div className="App">
    <Posts />
      <button onClick={addUser}>Generate User</button>
        {
            myUsersData.map((user)=>(<div key={user.login.uuid}><h1>{user.name.first}</h1> <img src={user.picture.large} alt={user.name.first} /></div>))
        }
    </div>
  );
}

export default App;
