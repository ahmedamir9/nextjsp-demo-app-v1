'use client'
import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
                const data = await response.json()
                setTodos(data)
            } catch (error) {
                console.error("Failed to fetch todos:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchTodos()
    }, [])

    if (loading) {
        return (
            <div className="card" style={{ padding: '2rem' }}>
                <div className="loading-skeleton" style={{ width: '150px', height: '1.5rem', marginBottom: '1.5rem' }}></div>
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="loading-skeleton" style={{ height: '2.5rem', marginBottom: '1rem', width: '100%' }}></div>
                ))}
            </div>
        )
    }

    return (
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', background: 'white' }}>
                <h3 style={{ margin: 0 }}>Community Task List</h3>
            </div>
            <div style={{ padding: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {todos.map((todo) => (
                        <li key={todo.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.875rem 0',
                            borderBottom: '1px solid #f1f5f9',
                            fontSize: '0.95rem'
                        }}>
                            <div style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '6px',
                                border: todo.completed ? 'none' : '2px solid var(--border)',
                                background: todo.completed ? '#22c55e' : 'transparent',
                                marginRight: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {todo.completed && (
                                    <svg style={{ width: '12px', height: '12px', color: 'white' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            <span style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? 'var(--secondary)' : 'var(--foreground)',
                                textTransform: 'capitalize'
                            }}>
                                {todo.title}
                            </span>
                        </li>
                    ))}
                </ul>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <button className="btn" style={{ fontSize: '0.875rem', color: 'var(--primary)', padding: '0.5rem' }}>
                        View All Tasks
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todos