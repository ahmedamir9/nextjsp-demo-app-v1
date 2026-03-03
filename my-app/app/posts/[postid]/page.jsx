'use client'
import React, { useEffect, useState } from "react"
import Link from "next/link"

export default function PostDetailsPage({ params: paramsPromise }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = React.use(paramsPromise)
  const { postid } = params

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error("Failed to fetch post details:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [postid])

  if (loading) {
    return (
      <div className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="loading-skeleton" style={{ width: '120px', height: '1rem', marginBottom: '2rem' }}></div>
          <div className="loading-skeleton" style={{ width: '400px', height: '3rem', marginBottom: '2rem' }}></div>
          <div className="loading-skeleton" style={{ height: '300px' }}></div>
        </div>
      </div>
    )
  }

  if (!post || !post.id) {
    return (
      <div className="section-padding container" style={{ textAlign: 'center' }}>
        <h1>Post not found</h1>
        <Link href="/posts" className="btn btn-primary" style={{ marginTop: '2rem' }}>Go Back</Link>
      </div>
    )
  }

  return (
    <div className="section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link href="/posts" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--secondary)', marginBottom: '2rem' }}>
          <svg style={{ marginRight: '0.5rem', width: '16px', height: '16px', transform: 'rotate(180deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Back to Feed
        </Link>

        <div className="card" style={{ cursor: 'default', padding: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span className="badge">Post #{postid}</span>
            <span style={{ color: 'var(--secondary)', fontSize: '0.875rem' }}>User ID: {post.userId}</span>
          </div>

          <h1 style={{ marginBottom: '2rem', textTransform: 'capitalize', lineHeight: '1.2' }}>{post.title}</h1>

          <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', lineHeight: '1.8' }}>
            {post.body}
          </p>
          <p style={{ marginTop: '2rem', fontStyle: 'italic', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            "Exploring thought through communication. This content demonstrates how a basic JSON response can be transformed into a premium reading experience."
          </p>
        </div>
      </div>
    </div>
  )
}