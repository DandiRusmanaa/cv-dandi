import React from 'react'

export default function Contact({ contact = {} }) {
  const email = contact.email || contact.email_address || contact.contact_email || null
  const phone = contact.phone || contact.phone_number || contact.contact_phone || null
  const website = contact.website || contact.portfolio_url || contact.portfolio || null
  const instagram = contact.instagram || contact.ig || contact.instagram_username || null

  if (!email && !phone && !website && !instagram) return null

  return (
    <section>
      <h2>Contact</h2>
      <ul>
        {email ? (
          <li>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        ) : null}

        {phone ? (
          <li>
            <strong>Phone:</strong>{' '}
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
        ) : null}

        {website ? (
          <li>
            <strong>Website:</strong>{' '}
            <a href={website} target="_blank" rel="noreferrer">
              {website}
            </a>
          </li>
        ) : null}

        {instagram ? (
          <li>
            <strong>Instagram:</strong>{' '}
            <a href={`https://instagram.com/${instagram.replace(/^@/, '')}`} target="_blank" rel="noreferrer">
              @{instagram.replace(/^@/, '')}
            </a>
          </li>
        ) : null}
      </ul>
    </section>
  )
}
