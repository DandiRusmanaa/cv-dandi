import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Try to fetch `dataMahasiswa.json` from project root. If you placed it elsewhere, adjust the path.
    fetch('/single-page-application-reactjs-untuk-cv-mahasiswa-DandiRusmana016-main/dataMahasiswa.json')
      .then((r) => r.json())
      .then((json) => setData(json))
      .catch(() => {
        // fallback to root if file placed there
        fetch('/dataMahasiswa.json')
          .then((r) => r.json())
          .then((json) => setData(json))
          .catch(() => setData(null))
      })
  }, [])

  return (
    <div className="cv-root">
      <div className="cv-container">
        <div className="cv-actions">
          <button onClick={() => window.print()}>Print / Save PDF</button>
        </div>

        {data ? (() => {
          // Normalize profile so child components receive consistent keys
          const raw = data.profile || data
          const profile = {
            name: raw.full_name || raw.name || raw.fullName || '',
            title: raw.headline || raw.title || raw.prodi || '',
            photo: raw.photo_url || raw.photo || raw.photoUrl || '',
            about: raw.short_bio || raw.about || raw.headline || '',
            location: raw.location || '',
            nim: raw.nim || raw.NIM || '',
            prodi: raw.prodi || '',
            angkatan: raw.angkatan || raw.year || '',
            website: raw.portfolio_url || raw.portfolio || raw.website || '',
            email: raw.email || raw.email_address || '',
            phone: raw.phone || raw.phone_number || ''
          }

          return (
            <>
              <Header profile={profile} />
              <main>
                <About about={data.about || profile.about} />
                <Experience items={data.experiences || data.experience || data.work || []} />
                <Education items={data.education || []} />
                <Skills items={data.skills || []} />
                <Contact contact={data.contact || { email: profile.email, phone: profile.phone, website: profile.website }} />
              </main>
            </>
          )
        })() : (
          <div className="cv-empty">Data not found. Please ensure `dataMahasiswa.json` exists at the project root.</div>
        )}
      </div>
    </div>
  )
}
