import React from 'react'


import './App.css';
import TodoApp from './components/eyadProject/todoApp/TodoApp';

function App() {
    
  return (
    <div className="App">
     
    {/* <Posts />
    <Eyad /> */}
    {/* <Fadil /> */}
    <TodoApp />

      {/* <button onClick={addUser}>Generate User</button>
        {
            myUsersData.map((user)=>(<div key={user.login.uuid}><h1>{user.name.first}</h1> <img src={user.picture.large} alt={user.name.first} /></div>))
        } */}
    </div>
  );
}

export default App;
