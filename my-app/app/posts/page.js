'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function PostPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.error("Failed to fetch posts:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    if (loading) {
        return (
            <div className="section-padding container">
                <div className="section-title">
                    <div className="loading-skeleton" style={{ width: '200px', height: '1.5rem', marginBottom: '1rem', margin: '0 auto' }}></div>
                    <div className="loading-skeleton" style={{ width: '300px', height: '2.5rem', margin: '0 auto' }}></div>
                </div>
                <div className="grid">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="loading-skeleton"></div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="section-padding">
            <div className="container">
                <div className="section-title">
                    <span className="badge">Community Feed</span>
                    <h1>Latest Posts</h1>
                    <p style={{ color: 'var(--secondary)', maxWidth: '600px', margin: '1rem auto' }}>
                        Join the conversation, explore thoughts and ideas from our global community.
                    </p>
                </div>

                <div className="grid">
                    {posts.map((post) => (
                        <Link key={post.id} href={`/posts/${post.id}`}>
                            <div className="card">
                                <span className="badge" style={{ background: '#fef3c7', color: '#d97706' }}>Post #{post.id}</span>
                                <h3 style={{
                                    textTransform: 'capitalize',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    minHeight: '3rem'
                                }}>
                                    {post.title}
                                </h3>
                                <p style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {post.body}
                                </p>
                                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: '600', fontSize: '0.875rem' }}>
                                    Read Full Post
                                    <svg style={{ marginLeft: '0.5rem', width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}