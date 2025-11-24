import React from 'react'

export default function Education({ items = [] }) {
  if (!items.length) return null
  return (
    <section>
      <h2>Education</h2>
      <ul className="cv-list">
        {items.map((it, i) => (
          <li key={i}>
            <strong>{it.degree || it.study || it.program}</strong>
            <div className="muted">{it.school || it.institution}</div>
            <div className="muted">{it.year || it.period}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
