# KONVEKSINDO.PH — Technical Architecture

## 1. Project Overview

KONVEKSINDO.PH adalah website company profile untuk bisnis konveksi dan custom clothing.

Versi pertama website berfokus pada public company profile.

Admin/CMS akan dikembangkan pada tahap berikutnya.

---

# 2. Architecture

Architecture yang digunakan:

```text
User
  │
  ▼
React Frontend
  │
  │ HTTP / REST API
  ▼
Laravel Backend
  │
  ▼
MySQL Database
```

Frontend tidak boleh mengakses database secara langsung.

---

# 3. Frontend

Technology:

* React
* Vite
* JavaScript
* Tailwind CSS

Responsibility:

* Menampilkan UI
* Responsive design
* Navigation
* Menampilkan produk
* Menampilkan layanan
* Menampilkan portfolio
* Menampilkan informasi perusahaan
* Menampilkan contact CTA
* Mengonsumsi REST API ketika backend sudah tersedia

Folder:

```text
frontend/
```

---

# 4. Backend

Technology:

* Laravel
* PHP

Responsibility:

* REST API
* Business logic
* Data validation
* Authentication untuk admin pada tahap berikutnya
* CRUD data
* Contact message handling
* Database communication

Folder:

```text
backend/
```

---

# 5. Database

Technology:

MySQL

Database bertanggung jawab menyimpan data dinamis seperti:

* Products
* Services
* Portfolios
* Testimonials
* FAQs
* Contact Messages
* Admin Users

Database tidak digunakan untuk data statis yang belum membutuhkan CMS.

---

# 6. Public Website — MVP

Halaman/section utama:

1. Navbar
2. Hero
3. About
4. Services
5. Products
6. Portfolio
7. Production Process
8. Why Choose Us
9. Contact
10. Footer

Urutan dapat berubah berdasarkan hasil UI/UX.

---

# 7. Contact Flow

Primary CTA:

Hubungi Kami

Alur utama:

```text
Customer
    │
    ▼
Website
    │
    ▼
Hubungi Kami
    │
    ▼
WhatsApp KONVEKSINDO.PH
```

WhatsApp:

089681890000

---

# 8. Business Order Flow

Alur bisnis yang diketahui:

```text
Konsultasi
     ↓
Produk & Desain
     ↓
Jumlah & Harga
     ↓
DP 25%
     ↓
Approval Desain
     ↓
Produksi
     ↓
Pelunasan
     ↓
Pengiriman / Pengambilan
```

Website dapat menampilkan alur ini sebagai informasi kepada calon pelanggan.

---

# 9. Future API Architecture

Backend nantinya menyediakan REST API.

Contoh endpoint:

```text
GET    /api/products
GET    /api/services
GET    /api/portfolios
GET    /api/testimonials
GET    /api/faqs
POST   /api/contact
```

Admin API akan ditentukan pada fase CMS.

---

# 10. Repository Structure

Target structure:

```text
konveksindo-ph/
│
├── frontend/
│
├── backend/
│
├── docs/
│   └── architecture.md
│
├── Project_Brief.md
├── AI_Rules.md
└── Task_Board.md
```

---

# 11. Development Flow

Development dilakukan secara bertahap:

```text
Planning
   ↓
UI/UX
   ↓
Frontend
   ↓
Backend
   ↓
Database
   ↓
Integration
   ↓
Testing
   ↓
Documentation
   ↓
Deployment
```

Tidak semua tahap harus dikerjakan sekaligus.

---

# 12. Git Strategy

Setiap perubahan yang sudah diuji harus disimpan menggunakan Git.

Format commit:

```text
type: description
```

Contoh:

```text
docs: update architecture
feat: add navbar
feat: add hero section
fix: resolve product card error
style: improve hero responsive layout
```

---

# 13. Environment Separation

Development:

```text
Local Machine
```

Production:

```text
Hosted Frontend
Hosted Backend
Hosted Database
```

Credentials dan secret tidak boleh dimasukkan ke repository.

---

# 14. Security Principles

Frontend:

* Tidak menyimpan database credentials.
* Tidak menyimpan secret backend.
* Tidak mengekspos private API keys.

Backend:

* Validasi input.
* Authentication untuk admin.
* Authorization untuk operasi admin.
* Environment variables untuk credentials.
* Jangan commit `.env`.

---

# 15. Future CMS

CMS akan dikembangkan setelah MVP public website selesai.

Fitur yang direncanakan:

```text
Admin Login
     ↓
Dashboard
     ├── Products
     ├── Services
     ├── Portfolio
     ├── Testimonials
     ├── FAQ
     └── Contact Messages
```

CMS bukan bagian dari tahap pertama.

---

# 16. Current Status

Phase:

PM-002 — Technical Architecture

Status:

IN PROGRESS

Next:

UI/UX Planning
