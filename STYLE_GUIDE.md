# Style Guide

## HTML
- Gunakan indentasi 2 spasi
- Gunakan lowercase untuk nama tag
- Tambahkan `alt` untuk semua gambar

## CSS
- Gunakan class naming: `kebab-case`
- Urutkan properti: position → display → margin → padding → lainnya

## JavaScript
- Gunakan `camelCase` untuk variabel
- Gunakan `const` dan `let` (hindari `var`)
- Tambahkan komentar untuk fungsi kompleks

## Contoh
```javascript
// ✅ Bagus
const userName = 'Xenon';

// ❌ Tidak bagus
var user_name = 'Xenon';

---

### 3️⃣ `CODEOWNERS` (di folder `.github/`)
```markdown
# CODEOWNERS - Siapa yang review PR

* @xenon231tech

# File penting
/index.html @xenon231tech
/README.md @xenon231tech
/SECURITY.md @xenon231tech
/CODE_OF_CONDUCT.md @xenon231tech

# Folder
/.github/ @xenon231tech
/.vscode/ @xenon231tech
