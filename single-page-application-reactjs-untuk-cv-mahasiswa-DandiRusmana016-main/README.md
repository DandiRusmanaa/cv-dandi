# Ringkasan Pekerjaan — SPA CV menggunakan React + Vite

Dokumen ini menjelaskan apa saja yang sudah dikerjakan pada tugas Single Page Application (CV Mahasiswa) dan bagaimana menjalankan proyek secara lokal.

## Apa yang sudah saya kerjakan
- Scaffold project menggunakan Vite + React.
- Menambahkan komponen modular:
  - `Header` — menampilkan nama, judul, dan foto (mendukung foto lokal di `src/assets` sebagai fallback).
  - `About` — ringkasan singkat / bio.
  - `Skills` — grid kartu skill dengan ikon, badge level, dan tahun pengalaman.
  - `Experience` — daftar pengalaman (thumbnail/logo, judul, organisasi, periode terformat, deskripsi, chips teknologi).
  - `Education` dan `Contact` sebagai komponen tambahan.
- Normalisasi data `profile` di `src/App.jsx` sehingga komponen menerima objek konsisten: `name`, `title`, `photo`, `about`, `email`, `phone`, `website`, `nim`, `prodi`, `angkatan`.
- Menghubungkan data dari `dataMahasiswa.json` (file JSON berada di folder tugas). Aplikasi mencoba fetch dari path internal project.
- Styling dasar dan print-friendly CSS di `src/styles.css` (termasuk aturan responsif dan styling untuk badge/chips).
- Menambahkan tombol `Print / Save PDF` untuk menyimpan CV sebagai PDF.

## File penting
- `index.html`, `vite.config.js`
- `src/main.jsx`, `src/App.jsx`
- `src/components/*` (Header, About, Skills, Experience, Education, Contact)
# Ringkasan Pekerjaan — SPA CV menggunakan React + Vite

Dokumen ini menjelaskan perubahan penting pada proyek Single Page Application (CV Mahasiswa) dan bagaimana menjalankan proyek secara lokal.

## Perubahan terbaru (ringkas)
- Menambahkan entry pengalaman magang: **Telkom Indonesia** (01 Maret 2022 — 01 Juni 2022).
- Menambahkan/menyimpan logo untuk pengalaman di `public/assets`:
  - `/assets/telkom.svg` — logo Telkom (placeholder)
  - `/assets/kri.svg` — logo Kontes Robot Indonesia (placeholder)
  - `/assets/robot-research-ums.svg` — logo Robot Research UMS (placeholder)
  - `/assets/kemdikbud.svg` — logo Kemdikbudristek (placeholder)
- Memperbarui `dataMahasiswa.json` agar setiap entri experience menunjuk ke path `/assets/*.svg`.
- Memperbarui `src/components/Experience.jsx` untuk menampilkan logo dari `image_url` dengan `loading="lazy"` dan fallback `onError` untuk menyembunyikan gambar bila gagal dimuat.

## Apa yang sudah saya kerjakan (fitur utama)
- Scaffold project menggunakan Vite + React.
- Komponen modular: `Header`, `About`, `Skills`, `Experience`, `Education`, `Contact`.
- Data terpusat di file JSON `dataMahasiswa.json` dan diambil oleh aplikasi.
- Styling dasar dan print-ready CSS di `src/styles.css`.

## Lokasi file penting
- `index.html`, `vite.config.js`
- `src/main.jsx`, `src/App.jsx`
- `src/components/*` (Header, About, Skills, Experience, Education, Contact)
- `src/styles.css`
- Data mahasiswa: `single-page-application-reactjs-untuk-cv-mahasiswa-DandiRusmana016-main/dataMahasiswa.json`
- Logo assets (dipanggil sebagai `/assets/...` di runtime): `public/assets/*.svg`

## Cara menjalankan (lokal)
Pastikan Anda berada di folder proyek utama (yang berisi `package.json`). Di PowerShell:

```powershell
npm install
npm run dev
```

Buka browser ke URL yang ditunjukkan Vite (mis. `http://localhost:5173`) dan periksa bagian "Experience" pada CV untuk melihat logo.
