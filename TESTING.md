# 🧪 Testing Guide

## Manual Testing Checklist

### Core Features
- [ ] Tambah tugas baru
- [ ] Edit tugas
- [ ] Hapus tugas
- [ ] Mark tugas sebagai selesai/pending
- [ ] Filter berdasarkan kategori
- [ ] Search tugas
- [ ] Toggle dark/light mode
- [ ] Export CSV
- [ ] Export JSON
- [ ] Import JSON

### Edge Cases
- [ ] Tambah tugas tanpa nama (harus error)
- [ ] Deadline kosong (boleh)
- [ ] Website kosong (boleh)
- [ ] Data localStorage hilang (backup/import)

### Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ |
| Firefox | Latest | ⏳ Belum test |
| Safari | Latest | ⏳ Belum test |
| Edge | Latest | ⏳ Belum test |

### Mobile Testing

| Device | Browser | Status |
|--------|---------|--------|
| Android | Chrome | ⏳ Belum test |
| iOS | Safari | ⏳ Belum test |

## Bug Report Template

```markdown
**Browser:** Chrome 120
**OS:** Windows 11
**Steps to reproduce:**
1. Buka website
2. Klik tombol X
3. Error muncul

**Expected:** Seharusnya...
**Actual:** Yang terjadi...
**Screenshot:** (link gambar)
