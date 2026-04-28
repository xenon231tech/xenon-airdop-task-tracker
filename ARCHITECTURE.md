```markdown
# 🏗️ Architecture Overview

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Styling | Glassmorphism, CSS Grid, Flexbox |
| Charts | Chart.js CDN |
| Storage | LocalStorage (browser) |
| Hosting | GitHub Pages + Vercel |
| CI/CD | GitHub Actions |

## Project Structure

```

xenon-airdrop-task-tracker/
├── index.html              # Main entry point (semua kode di sini)
├── README.md               # Dokumentasi utama
├── LICENSE                 # MIT License
├── SECURITY.md             # Security policy
├── CONTRIBUTING.md         # Panduan kontribusi
├── CHANGELOG.md            # Catatan perubahan
├── FAQ.md                  # Pertanyaan umum
├── DEPLOYMENT.md           # Panduan deploy
├── CODE_OF_CONDUCT.md      # Kode etik
├── Screenshot (79).png     # Preview gambar
└── .github/                # GitHub templates & configs
├── ISSUE_TEMPLATE/     # Template issue
├── FUNDING.yml         # Donation links
├── CODEOWNERS          # File ownership
├── dependabot.yml      # Auto dependency
├── labeler.yml         # Auto label PR
└── stale.yml           # Auto close stale issues

```

## Data Flow

```

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ User Input  │ ──→ │ JavaScript  │ ──→ │ LocalStorage│
└─────────────┘     └─────────────┘     └─────────────┘
│
▼
┌─────────────┐
│   Display   │
│   (Table)   │
└─────────────┘
│
▼
┌─────────────────────┐
│ Export: CSV / JSON  │
│ Import: JSON        │
└─────────────────────┘

```

## Key Functions

| Function | Location | Description |
|----------|----------|-------------|
| `addTask()` | index.html | Menambah tugas baru ke localStorage |
| `deleteTask()` | index.html | Menghapus tugas berdasarkan ID |
| `toggleStatus()` | index.html | Ubah status pending ↔ done |
| `editTask()` | index.html | Edit nama, notes, deadline, website |
| `exportCSV()` | index.html | Export ke file CSV |
| `exportData()` | index.html | Export ke file JSON |
| `importData()` | index.html | Import dari file JSON |
| `renderTasks()` | index.html | Render tabel tugas |
| `updateProgress()` | index.html | Update progress bar & statistik |
| `setFilter()` | index.html | Filter tugas berdasarkan kategori |
| `toggleTheme()` | index.html | Dark/light mode toggle |

## State Management

Data disimpan di `localStorage` dengan key: **`xenon_tasks`**

### Task Object Structure
```javascript
{
  id: 1234567890,           // timestamp
  name: "zkSync Era",       // string
  category: "L2",           // DeFi/NFT/L1/L2/GameFi/Social
  priority: "High",         // High/Mid/Low
  desc: "Bridge + swap",    // string (optional)
  deadline: "2026-05-15",   // YYYY-MM-DD (optional)
  website: "https://...",   // string (optional)
  status: "pending"         // pending/done
}
```

Styling Approach

· Glassmorphism: backdrop-filter: blur(12px)
· Gradient Background: Radial gradient
· Responsive: Media queries untuk mobile
· Dark/Light Mode: CSS class toggle on body

Deployment Flow

```
Git Push → GitHub Actions (if any) → GitHub Pages (auto)
                                   ↘ Vercel (auto)
```

Security Headers (via vercel.json)

Header Value
X-Content-Type-Options nosniff
X-Frame-Options DENY
X-XSS-Protection 1; mode=block

---

Understand the code before modifying! 🔧
