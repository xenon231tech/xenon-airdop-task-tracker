# Code Style Guide

## HTML
- Indentasi **2 spasi**
- Gunakan **lowercase** untuk tag
- Tambahkan `alt` untuk semua gambar
- Gunakan semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)

## CSS
- Nama class: **kebab-case** (contoh: `.user-profile`)
- Urutkan properti: position → display → margin → padding → lainnya
- Hindari `!important` sebisa mungkin

## JavaScript
- Gunakan **camelCase** untuk variabel dan fungsi
- Gunakan **const** dan **let** (hindari `var`)
- Tambahkan komentar untuk fungsi yang kompleks
- Gunakan **===** dan **!==** (bukan `==` dan `!=`)

## Contoh Kode

### ✅ Bagus
```javascript
const userName = 'Xenon';
let taskCount = 0;

function addNewTask(taskName) {
    // Logika di sini
    return true;
}
