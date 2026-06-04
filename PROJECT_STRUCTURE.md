# Project Structure

## 📁 Directory Overview

```
xenon-airdop-task-tracker/
├── 📄 Documentation
│   ├── README.md              # Main documentation with features & roadmap
│   ├── CHANGELOG.md           # Version history and updates
│   ├── CONTRIBUTING.md        # Contribution guidelines
│   ├── INSTALLATION.md        # Installation & setup guide
│   ├── PROJECT_STRUCTURE.md   # This file
│   ├── LICENSE                # MIT License
│   └── CITATION.cff           # Citation metadata
│
├── 🔧 Configuration
│   ├── vercel.json            # Vercel deployment config
│   ├── docker-compose.yml     # Docker configuration
│   ├── Dockerfile             # Docker image definition
│   ├── manifest.json          # PWA manifest
│   ├── markdownlint.json      # Markdown linting rules
│   ├── renovate.json          # Dependency update automation
│   ├── .prettierrc            # Code formatting rules
│   ├── .gitignore             # Git ignore patterns
│   ├── .gitattributes         # Git attributes
│   ├── .nojekyll              # Disable Jekyll on GitHub Pages
│   ├── .env.example           # Environment variables template
│   └── .gitmessage            # Git commit message template
│
├── 🌐 Web Files
│   ├── index.html             # Main application (36KB, 1000+ lines)
│   ├── robots.txt             # SEO robots configuration
│   ├── sitemap.xml            # XML sitemap
│   └── public/                # Static assets directory
│       └── .well-known/
│           └── farcaster.json # Farcaster verification
│
├── 🔨 JavaScript Files
│   ├── main.js                # Main application logic (373 lines)
│   ├── api-client.js          # API client utilities (136 lines)
│   ├── chart-config.js        # Chart.js configuration (279 lines)
│   ├── storage.js             # LocalStorage management (227 lines)
│   ├── utils.js               # Utility functions (167 lines)
│   └── sw.js                  # Service Worker (38 lines)
│
├── 🐙 GitHub
│   └── .github/
│       ├── ISSUE_TEMPLATE/
│       │   ├── bug_report.md      # Bug report template
│       │   ├── feature_request.md # Feature request template
│       │   └── config.yml         # Issue template config
│       └── PULL_REQUEST_TEMPLATE.md # PR template
│
├── 🔧 Development Tools
│   ├── .vscode/
│   │   └── settings.json      # VS Code settings
│   ├── Makefile               # Build automation
│   ├── PGP-key.asc            # PGP public key
│   └── pokemon.txt            # Easter egg file
│
└── 📸 Assets
    └── Screenshot (79).png    # Application screenshot
```

---

## 📊 File Statistics

| Category | Files | Lines | Size |
|----------|-------|-------|------|
| **Documentation** | 4 | 543 | 15.7 KB |
| **Configuration** | 10 | - | 4.5 KB |
| **JavaScript** | 6 | 1,220 | 33.8 KB |
| **Web Files** | 4 | 1,000+ | 36.0 KB |
| **GitHub** | 4 | - | 2.0 KB |
| **Total** | 28+ | 2,763+ | 92+ KB |

---

## 🎯 Key Components

### index.html (36 KB)
The main application file containing:
- HTML structure with semantic markup
- Embedded CSS with neon design system
- JavaScript application logic
- Chart.js integration
- Flatpickr calendar
- Font Awesome icons

**Features:**
- Task management interface
- Search & filter system
- Analytics dashboard
- Dark/Light theme toggle
- Real-time notifications
- Data export functionality

### main.js (373 lines)
Core application logic:
- Task CRUD operations
- Event handling
- DOM manipulation
- Data validation

### chart-config.js (279 lines)
Chart.js configuration:
- Chart initialization
- Data processing
- Color schemes
- Responsive settings

### storage.js (227 lines)
LocalStorage management:
- Data persistence
- Backup/restore
- Data validation

### api-client.js (136 lines)
API utilities:
- HTTP requests
- Response handling
- Error management

### utils.js (167 lines)
Helper functions:
- Date formatting
- String manipulation
- Validation helpers

---

## 🔄 Data Flow

```
User Input (UI)
    ↓
Event Handlers (main.js)
    ↓
Data Processing (utils.js)
    ↓
Storage (storage.js)
    ↓
LocalStorage (Browser)
    ↓
Display Update (index.html)
```

---

## 🚀 Deployment

### Vercel Configuration
- **Build**: Static HTML/CSS/JS
- **Routes**: SPA routing to index.html
- **Headers**: Security headers configured
- **Performance**: Optimized for fast loading

### Docker Support
- Dockerfile for containerization
- docker-compose.yml for orchestration
- .dockerignore for build optimization

---

## 📦 Dependencies

### External Libraries
- **Chart.js 4.4.0** - Data visualization
- **Flatpickr** - Date picker
- **Font Awesome 6** - Icon library

### No Build Tools Required
- Pure HTML/CSS/JavaScript
- No npm/yarn dependencies
- Works in any modern browser

---

## 🔐 Security

- Security headers configured in vercel.json
- XSS protection enabled
- Clickjacking protection
- Content-Type sniffing prevention

---

## 📱 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🎨 Design System

### Color Palette
- Primary: Cyan (#00d9ff)
- Secondary: Pink (#ff1493)
- Accent: Purple (#ff00ff)
- Success: Lime (#00ff88)
- Warning: Orange (#ffaa00)
- Danger: Red (#ff3366)

### Typography
- Font Family: Segoe UI, Inter, system-ui
- Sizes: Responsive scaling
- Weights: 400, 600, 700, 800

---

## 🔄 Version Control

- Git repository with full history
- Conventional commits
- GitHub integration
- Automated workflows

---

**Last Updated:** June 4, 2024
