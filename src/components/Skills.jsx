import React from 'react'

function LevelBadge({ level }) {
  if (!level) return null
  const cls = level.toLowerCase()
  return <span className={`level-badge level-${cls}`}>{level}</span>
}

export default function Skills({ items = [] }) {
  if (!items || !items.length) return null
  return (
    <section>
      <h2>Skills</h2>
      <div className="skill-grid">
        {items.map((s) => {
          const name = typeof s === 'string' ? s : s.name
          const icon = s.icon_url || s.icon || null
          const years = s.years_of_experience || s.yoe || null
          const isMain = s.is_main || false
          const level = s.level || null
          return (
            <div key={name} className={`skill-card ${isMain ? 'skill-main' : ''}`}>
              <div className="skill-left">
                {icon ? (
                  <img src={icon} alt={name} className="skill-icon" />
                ) : (
                  <div className="skill-icon-placeholder">{name[0]}</div>
                )}
              </div>
              <div className="skill-right">
                <div className="skill-title">{name}</div>
                <div className="skill-meta">
                  <LevelBadge level={level} />
                  {years ? <span className="skill-years">{years} yr</span> : null}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
