# **Rencana Pengembangan Detail (Baby Steps) \- SplitBill Pro**

Berikut adalah rincian langkah demi langkah untuk pengembangan aplikasi "SplitBill Pro", diadaptasi dari proposal proyek dan dijadwalkan dalam 4 minggu.

### **MINGGU 1: Analisis, Perancangan, dan Setup Proyek**

**Tujuan Minggu Ini:** Menerjemahkan ide dari proposal menjadi cetak biru (blueprint) teknis yang siap dieksekusi dan menyiapkan lingkungan kerja.

* **Hari 1: Finalisasi Kebutuhan & Perencanaan Awal**  
  1. **Review Proposal:** Baca kembali Bab I, II, dan III dari proposal untuk menyegarkan ingatan tentang tujuan, batasan, dan metodologi.  
  2. **Checklist Fitur:** Buat daftar centang (checklist) dari semua kebutuhan fungsional yang tercantum di bagian 3.4 (Tahapan Pengembangan).  
  3. **Identifikasi Alur Utama:** Petakan dua alur pengguna utama: (1) Pengguna ingin membagi tagihan secara merata. (2) Pengguna ingin membagi tagihan berdasarkan item.  
* **Hari 2-3: Desain Pengalaman & Antarmuka Pengguna (UX/UI)**  
  1. **Wireframing (Sketsa Kasar):** Buat sketsa tata letak dasar, tentukan posisi elemen kunci (Header, form, tombol, panel hasil).  
  2. **Mockup (Desain Visual):** Buat versi visual dari wireframe. Tentukan skema warna yang memenuhi standar kontras WCAG, pilih tipografi yang mudah dibaca, dan pastikan semua elemen interaktif dapat diakses melalui keyboard.  
  3. **Rancang UI States:** Rancang juga tampilan untuk kondisi spesifik seperti *Empty State* (saat daftar masih kosong) dan *Error State* (jika ada input salah).  
* **Hari 4: Desain Arsitektur & Struktur Data**  
  1. **Arsitektur Komponen React:** Buat diagram pohon komponen dan tentukan *props* yang akan dioper ke setiap komponen.  
  2. **Manajemen State:** Daftar semua *state* yang dibutuhkan (totalBill, mode, participants, items) dan putuskan untuk mengelolanya di komponen App.  
  3. **Struktur localStorage:** Definisikan struktur objek JSON yang akan disimpan di localStorage.  
* **Hari 5-6: Setup Lingkungan Pengembangan**  
  1. **Inisialisasi Proyek:** Buka terminal, jalankan npm create vite@latest splitbill-pro \-- \--template react.  
  2. **Instalasi Dependensi:**  
     * Masuk ke direktori proyek: cd splitbill-pro.  
     * **Install Tailwind CSS v3.4.1:** Jalankan perintah npm install \-D tailwindcss@3.4.1 postcss autoprefixer.  
     * **Konfigurasi Tailwind:** Jalankan npx tailwindcss init \-p untuk membuat file tailwind.config.js dan postcss.config.js.  
     * **Integrasi dengan Vite:** Ikuti dokumentasi resmi Tailwind CSS untuk mengonfigurasi path konten di tailwind.config.js dan menambahkan direktif @tailwind ke file CSS utama Anda (misalnya, src/index.css).  
     * **Install Library Tambahan:** Install npm install lucide-react qrcode.react clsx.  
  3. **Struktur Folder:** Buat folder src/components dan buat file kosong untuk setiap komponen yang telah dirancang.  
  4. **Kontrol Versi:** Inisialisasi Git dan lakukan commit pertama dengan pesan "Initial project setup with Vite, React, and Tailwind CSS v3.4.1".  
* **Hari 7: Review & Istirahat**  
  * Review semua hasil kerja minggu ini. Pastikan desain dan arsitektur sudah solid sebelum mulai coding.

### **MINGGU 2: Implementasi UI Dasar & Logika Pembagian Rata**

**Tujuan Minggu Ini:** Membangun kerangka visual aplikasi dan mengimplementasikan fungsionalitas inti pertama.

* **Hari 8-9: Implementasi Komponen Statis:** Bangun layout utama dan komponen-komponen (Header, BillForm, ModeSwitcher) dengan JSX dan kelas Tailwind CSS sesuai mockup.  
* **Hari 10-11: Fungsionalitas Input & State Awal:** Implementasikan useState untuk totalBill dan mode. Hubungkan state tersebut ke komponen BillForm dan ModeSwitcher.  
* **Hari 12-13: Implementasi Fungsionalitas "Bagi Rata":**  
  1. **State Peserta:** Definisikan state participants sebagai array of objects.  
  2. **UI Manajemen Peserta:** Buat UI di ParticipantList untuk menambah dan menghapus peserta.  
  3. **Logika & Hasil:** Tulis fungsi kalkulasi pembagian rata. Pastikan fungsi ini menangani kasus di mana jumlah peserta adalah nol (untuk menghindari error 'division by zero'). Tampilkan hasilnya di ResultPanel atau tampilkan pesan panduan jika input belum lengkap.  
* **Hari 14: Review & Istirahat:** Cek fungsionalitas pembagian rata.

### **MINGGU 3: Implementasi Fitur Lanjutan & Persistensi Data**

**Tujuan Minggu Ini:** Membangun fungsionalitas kedua (pembagian per item) dan memastikan data tidak hilang.

* **Hari 15-16: Manajemen Peserta Lanjutan:** Sempurnakan ParticipantList agar pengguna dapat mengedit nama setiap peserta.  
* **Hari 17-18: Manajemen Item & Alokasi:** Buat komponen ItemList untuk menambah, mengedit, menghapus item, dan mengalokasikannya ke peserta menggunakan checkbox.  
* **Hari 19-20: Logika Kalkulasi & Integrasi localStorage:**  
  1. **Logika "Per Item":** Tulis fungsi kalkulasi untuk pembagian berdasarkan item.  
  2. **Integrasi localStorage:** Gunakan useEffect untuk menyimpan state ke localStorage setiap kali ada perubahan. Saat memuat data, lakukan validasi sederhana untuk memastikan struktur data (misalnya, keberadaan properti participants dan items) masih valid sebelum dimasukkan ke dalam state. Gunakan try...catch untuk menangani error parsing JSON atau validasi.  
* **Hari 21: Review & Istirahat:** Pastikan kedua mode kalkulasi dan persistensi data berfungsi.

### **MINGGU 4: Finalisasi, Pengujian, dan Polishing**

**Tujuan Minggu Ini:** Menyelesaikan fitur terakhir, memastikan aplikasi bebas bug, dan memperhalus pengalaman pengguna.

* **Hari 22-23: Implementasi Fitur QR Code:** Buat komponen modal (QRCodeModal) yang menampilkan QR Code dari data hasil perhitungan.  
* **Hari 24: Polishing UI/UX:**  
  1. **Responsivitas:** Pastikan layout terlihat bagus di semua ukuran layar.  
  2. **Animasi & Transisi:** Tambahkan transisi halus untuk interaksi UI.  
  3. **Notifikasi:** Implementasikan sistem notifikasi 'toast' sederhana untuk umpan balik pengguna.  
* **Hari 25-26: Pengujian Menyeluruh:** Lakukan tes fungsional, tes kompatibilitas browser, dan tes di perangkat fisik. Selain itu, tulis beberapa pengujian unit dasar menggunakan Vitest (yang terintegrasi baik dengan Vite) untuk memverifikasi akurasi fungsi kalkulasi 'Bagi Rata' dan 'Per Item' dengan berbagai skenario input.  
* **Hari 27-28: Perbaikan Bug & Finalisasi:** Perbaiki semua masalah, bersihkan kode, tambahkan komentar pada logika yang kompleks, dan lakukan review akhir. Terakhir, buat file README.md yang menjelaskan proyek, fitur utamanya, serta cara menjalankan proyek secara lokal (npm install dan npm run dev).