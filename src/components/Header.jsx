import React from 'react'
import fotoFallback from '../assets/foto-dandi.jpg'

export default function Header({ profile = {} }) {
  const name = profile.name || profile.full_name || profile.fullName || ''
  const title = profile.title || profile.headline || ''
  const nim = profile.nim || profile.NIM || ''
  const prodi = profile.prodi || profile.program || ''
  const angkatan = profile.angkatan || profile.year || ''
  const location = profile.location || profile.city || ''
    // Use local asset when available (better for dev/build). If JSON provides a different local filename via `local_photo`, prefer that.
    // `profile.photo` is expected to be a URL; prefer `profile.local_photo` or the bundled fallback.
    const photo = profile.local_photo || fotoFallback || profile.photo || profile.photo_url || profile.photoUrl || ''
  return (
    <header className="cv-header">
      <div className="cv-header-left">
        {photo ? <img src={photo} alt={`${name}`} className="cv-photo" /> : null}
      </div>
      <div className="cv-header-right">
        <h1>{name || 'Nama Lengkap'}</h1>
        <p className="cv-title">{title || 'Judul / Jurusan'}</p>
        <div className="cv-profile-meta">
          {nim ? <span className="meta-item">NIM: {nim}</span> : null}
          {prodi ? <span className="meta-item">Program: {prodi}</span> : null}
          {angkatan ? <span className="meta-item">Angkatan: {angkatan}</span> : null}
          {location ? <span className="meta-item">{location}</span> : null}
        </div>
      </div>
    </header>
  )
}
