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
- `src/styles.css`
- `src/assets/foto-dandi.jpg` (foto lokal yang digunakan sebagai fallback)
- `single-page-application-reactjs-untuk-cv-mahasiswa016-main/dataMahasiswa.json` (file data mahasiswa asli)

## Cara menjalankan (lokal)
Pastikan Anda berada di folder proyek utama (yang berisi `package.json`). Di PowerShell:

```powershell
npm install
npm run dev
```

Lalu buka browser ke URL yang ditunjukkan oleh Vite (mis. `http://localhost:5173`).

Catatan: aplikasi fetch `dataMahasiswa.json` dari folder tugas. Jika Anda memindahkan JSON, perbarui path di `src/App.jsx`.

## Contoh perintah Git (commit & push)
Jika Anda ingin mengumpulkan tugas ke GitHub:

```powershell
git add .
git commit -m "Perbaikan: tampilan Skills & Experience; normalisasi profile; tambah foto lokal"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

