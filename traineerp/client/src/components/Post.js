import React from 'react'
import Posts from './Posts'

function Post({body, id}) {
    return (
        <div>
            <h1>{body}</h1>
        </div>
    )
}

export default Post
