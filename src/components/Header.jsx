import React from 'react'
import fotoFallback from '../assets/foto-dandi.jpg'

export default function Header({ profile = {} }) {
  const name = profile.name || profile.full_name || profile.fullName || ''
  const title = profile.title || profile.headline || profile.prodi || ''
  // Prefer normalized photo, then legacy keys, then local static import fallback
  const photo = profile.photo || profile.photo_url || profile.photoUrl || fotoFallback
  return (
    <header className="cv-header">
      <div className="cv-header-left">
        {photo ? <img src={photo} alt={`${name}`} className="cv-photo" /> : null}
      </div>
      <div className="cv-header-right">
        <h1>{name || 'Nama Lengkap'}</h1>
        <p className="cv-title">{title || 'Judul / Jurusan'}</p>
      </div>
    </header>
  )
}
