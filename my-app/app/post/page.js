'use client'
import next from 'next'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'

export default function PostPage() {
    const [posts, setPosts] = useState([])
    const [load, setload] = useState(false)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 120 } })
            .then(res => res.json())
            .then(res => setPosts(res))
        
            setload(true)
    }, [])

    const postJSX = posts.map((post) => {
        return (
            <Link key={post.id} href={`/post/${post.id}`} style={{ width: '70%' }}>
                <div style={{
                    width: '100%',
                    background: 'white',
                    color: 'black',
                    padding: "10px",
                    borderRadius: "10px",
                    marginTop: '20px',
                }}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </Link>
        );
    })
    if (load) {
        return (
            <div>
                <h1>Posts Page</h1>

                {/* POST start */}
                <div style={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center',
                    flexDirection: "column"
                }}>
                    {postJSX}
                </div>
                {/* POST end */}
            </div>
        );
    }
    else {
        return (
            <h1>Loading...</h1>
        )
    }

}