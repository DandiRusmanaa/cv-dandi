import React from 'react'

export default function Contact({ contact = {} }) {
  const email = contact.email || contact.email_address || null
  const phone = contact.phone || contact.phone_number || null
  const website = contact.website || contact.portfolio_url || contact.portfolio || null
  if (!email && !phone && !website) return null
  return (
    <section>
      <h2>Contact</h2>
      <ul>
        {email ? <li>Email: <a href={`mailto:${email}`}>{email}</a></li> : null}
        {phone ? <li>Phone: {phone}</li> : null}
        {website ? <li>Website: <a href={website} target="_blank" rel="noreferrer">{website}</a></li> : null}
      </ul>
    </section>
  )
}
