'use client'
import React from 'react'
import { useEffect, useState } from 'react'
function Todos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 120 } })
            .then(response => response.json())
            .then(data => setTodos(data))
    }, [])


    return (
        <div>
            <ul>
                {todos.map((todo) => {

                    if (todo.id <= 20) {
                        return (
                            <li key={todo.id}>{todo.id} - {todo.title}</li>
                        )
                    }

                })}
            </ul>
        </div>
    )
}

export default Todos