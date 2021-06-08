import React, { useEffect, useState } from 'react'

import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  const axios = require('axios')

  useEffect(() => {
    console.log(posts)
  }, [posts])

  const fetchData = (e) => {
    e.preventDefault()

    //  let res = await fetch ('https://jsonplaceholder.typicode.com/posts/1')
    //  let data = await res.json()
    //  console.log(data.userId)
    // // .then(res => res.json())
    // // .then(data => console.log(data))
    
    axios.get('https://jsonplaceholder.tyicode.com/posts/1')
    .then((res) => console.log(res.data))
    .catch( (err) => {console.error(err)})
  
  }


  

  // h1 title
  // p body
  return (
    <div>
      <button onClick={fetchData}>Click Me! </button>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </div>
  )
}

export default Posts
