import { useEffect, useState } from 'react'

import Posts from './components/Posts'
import Eyad from './components/Eyad'

import './App.css';

function App() {
    let [myUsersData, setMyUsersData] = useState([])
    
    function addUser(e){
      e.preventDefault()
      
        fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((usersData) => {
          
          setMyUsersData([...myUsersData, ...usersData.results])
          
          let test = myUsersData.reduce((acc, cur)=>{
            return acc + cur
          })
          console.log(test)
        })
      }


      
      useEffect(() => {
        console.log(myUsersData)
        
      }, [myUsersData]);
    
  return (
    <div className="App">
    <Posts />
    <Eyad />

      {/* <button onClick={addUser}>Generate User</button>
        {
            myUsersData.map((user)=>(<div key={user.login.uuid}><h1>{user.name.first}</h1> <img src={user.picture.large} alt={user.name.first} /></div>))
        } */}
    </div>
  );
}

export default App;
