import React from 'react'

const Card = ({ title, description, badge }) => {
  return (
    <div className="card">
      {badge && <span className="badge">{badge}</span>}
      <h3>{title || "Default Title"}</h3>
      <p>{description || "This is a placeholder description for the card component. It supports multi-line text and maintains a clean look."}</p>
      <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: '600', fontSize: '0.875rem' }}>
        Read More
        <svg style={{ marginLeft: '0.5rem', width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default Card