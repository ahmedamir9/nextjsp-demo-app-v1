'use client'
import React, { useEffect, useState } from "react"


export default function PostDetailsPage({ params }) {
  const [post, setPost] = useState([])
  const { postid } = React.use(params)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`, { next: { revalidate: 120 } })
      .then(res => res.json())
      .then(res => setPost(res))
  }, [])
  if (post.id) {
    return (
      <div style={{
        padding: '10px'
      }}>
        <h1>Post Details</h1>

        <div style={{
          width: '100%',
          background: 'white',
          color: 'black',
          padding: "10px",
          borderRadius: "10px",
          marginTop: '20px',
        }}>
          <h1>{post.title}</h1>
          <hr />
          <h2>Post ID: {postid}</h2>
          <hr />
          <h2>Body: {post.body}</h2>
          <hr />
          <h3>User ID: {post.userId}</h3>
        </div>
      </div>
    )
  }
  else {
    return (
      <h1>Loading...</h1>
    );
  }
}