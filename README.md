# Book Management with Javascript

## Deskripsi
Ini adalah aplikasi manajemen buku sederhana yang dibuat dengan menggunakan Node.js. Aplikasi ini memungkinkan pengguna untuk menambah, mencari, menghapus, dan melihat daftar buku. Selain itu, pengguna juga dapat mencari buku berdasarkan harga.

Fitur Utama
- Menambah Buku: Pengguna dapat menambahkan buku baru dengan memasukkan judul, kategori, penulis, genre, dan harga.
- Mencari Buku: Pengguna dapat mencari buku berdasarkan judul.
- Menghapus Buku: Pengguna dapat menghapus buku dari daftar berdasarkan judul.
- Menampilkan Semua Buku: Pengguna dapat melihat semua buku yang ada dalam daftar.
- Mencari Buku Berdasarkan Harga: Pengguna dapat mencari buku berdasarkan harga.

## Instalasi
Jalankan perintah berikut untuk menginstal dependensi yang diperlukan:
```bash
npm install
```

Setelah mengkloning repositori, jalankan perintah di atas untuk menginstal semua dependensi yang diperlukan.

## Penggunaan
Jalankan perintah berikut untuk menjalankan aplikasi:
```bash
node app.js
```

## Contoh Input-Output
Berikut adalah contoh input dan output dari aplikasi:

Menambah Buku:
```
Masukkan judul buku: Buku A
Masukkan kategori buku: Fiksi
Masukkan penulis buku: Penulis A
Masukkan genre buku: Drama
Masukkan harga buku: 50000
Buku berhasil ditambahkan!
```

Mencari Buku:
```
Masukkan judul buku yang ingin dicari: Buku A
Buku ditemukan: { judul: 'Buku A', kategori: 'Fiksi', penulis: 'Penulis A', genre: 'Drama', harga: 50000 }
```

Menghapus Buku:
```
Masukkan judul buku yang ingin dihapus: Buku A
Buku berhasil dihapus!
```

## Dependecy
- `prompt-sync`: digunakan untuk menerima input dari pengguna.