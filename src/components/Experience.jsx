import React from 'react'

function formatPeriod(it) {
  if (it.period) return it.period
  if (it.duration) return it.duration
  const s = it.start_date || it.start || null
  const e = it.end_date || it.end || null
  if (s || e) {
    const opts = { year: 'numeric', month: 'short' }
    const start = s ? new Date(s).toLocaleDateString(undefined, opts) : ''
    const end = it.is_current ? 'Present' : (e ? new Date(e).toLocaleDateString(undefined, opts) : '')
    return `${start}${start && end ? ' — ' : ''}${end}`
  }
  return ''
}

export default function Experience({ items = [] }) {
  if (!items || !items.length) return null

  return (
    <section>
      <h2>Experience</h2>
      <div className="experience-list">
        {items.map((it) => (
          <article key={it.id || it.title} className="experience-item">
            {it.image_url ? (
              <img src={it.image_url} alt={it.organization || it.title} className="exp-thumb" />
            ) : null}
            <div className="exp-body">
              <div className="exp-header">
                <strong className="exp-title">{it.position || it.role || it.title}</strong>
                {it.is_current ? <span className="pill pill-current">Current</span> : null}
              </div>
              <div className="muted exp-sub">{it.organization || it.company || it.institution}</div>
              <div className="muted exp-period">{formatPeriod(it)}</div>
              {it.description ? <p className="exp-desc">{it.description}</p> : null}
              {it.technologies && it.technologies.length ? (
                <div className="tech-list">
                  {it.technologies.map((t, i) => (
                    <span key={i} className="tech-chip">{t}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
