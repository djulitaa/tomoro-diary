/* =====================================================
   TOMORO DIARY - script.js
   JavaScript dasar: variabel, fungsi, if, array, setInterval
   ===================================================== */

/* ---------- 1. Jam digital + ucapan salam (widget sidebar) ---------- */
function tampilkanJam() {
  var sekarang = new Date();               // ambil waktu saat ini
  var jam = sekarang.getHours();
  var menit = sekarang.getMinutes();
  var detik = sekarang.getSeconds();

  // tambahkan angka 0 di depan jika kurang dari 10 (contoh: 7 menjadi 07)
  if (jam < 10)   { jam = "0" + jam; }
  if (menit < 10) { menit = "0" + menit; }
  if (detik < 10) { detik = "0" + detik; }

  document.getElementById("jam").innerHTML = jam + ":" + menit + ":" + detik;
}

function ucapanSalam() {
  var jam = new Date().getHours();
  var salam = "";

  if (jam < 11) {
    salam = "Selamat pagi, yuk mulai hari dengan minuman favorit!";
  } else if (jam < 15) {
    salam = "Selamat siang, jangan lupa istirahat.";
  } else if (jam < 18) {
    salam = "Selamat sore, waktunya nongkrong di Tomoro!";
  } else {
    salam = "Selamat malam, semangat ya!";
  }

  document.getElementById("salam").innerHTML = salam;
}

/* ---------- 2. Slider foto berjalan (halaman Home) ---------- */
var daftarFoto = [
  { file: "https://i.ibb.co.com/Q3Mj25ND/01.jpg", teks: "#1 Matcha Frappe" },
  { file: "https://i.ibb.co.com/NnQgjXGh/02.jpg", teks: "#2 Matcha Oat" },
  { file: "https://i.ibb.co.com/rffxF987/03.jpg", teks: "#3 Triple Pistachio Latte" },
  { file: "https://i.ibb.co.com/5hkC8ZPn/Tomoro-Coffee-1200x721-1.jpg", teks: "Tomoro Coffee" }
];
var nomorFoto = 0;

function tampilkanFoto() {
  document.getElementById("foto-slider").src = daftarFoto[nomorFoto].file;
  document.getElementById("teks-slider").innerHTML = daftarFoto[nomorFoto].teks;
}

function fotoBerikutnya() {
  nomorFoto = nomorFoto + 1;
  if (nomorFoto >= daftarFoto.length) { nomorFoto = 0; }
  tampilkanFoto();
}

function fotoSebelumnya() {
  nomorFoto = nomorFoto - 1;
  if (nomorFoto < 0) { nomorFoto = daftarFoto.length - 1; }
  tampilkanFoto();
}

/* ---------- 3. Validasi form Registration ---------- */
function validasiRegistrasi() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var umur = document.getElementById("umur").value;

  if (nama == "") {
    alert("Nama lengkap harus diisi ya!");
    return false;            // false = form tidak jadi dikirim
  }
  if (email.indexOf("@") == -1) {
    alert("Format email belum benar (harus ada tanda @).");
    return false;
  }
  if (umur < 12) {
    alert("Umur minimal untuk bergabung adalah 12 tahun.");
    return false;
  }

  document.getElementById("pesan-status").innerHTML =
    "Terima kasih, " + nama + "! Pendaftaranmu sudah kami catat.";
  return false;              // tetap false karena ini website statis (belum ada server)
}

/* ---------- 4. Form Contact ---------- */
function kirimPesan() {
  var nama = document.getElementById("nama").value;
  var pesan = document.getElementById("pesan").value;

  if (nama == "" || pesan == "") {
    alert("Nama dan pesan tidak boleh kosong.");
    return false;
  }

  document.getElementById("pesan-status").innerHTML =
    "Pesan dari " + nama + " sudah diterima. Terima kasih!";
  return false;
}

/* ---------- 5. Dijalankan saat halaman dibuka ---------- */
// cek dulu apakah elemennya ada di halaman tersebut
if (document.getElementById("jam")) {
  tampilkanJam();
  ucapanSalam();
  setInterval(tampilkanJam, 1000);          // perbarui jam tiap 1 detik
}
if (document.getElementById("foto-slider")) {
  setInterval(fotoBerikutnya, 3500);        // ganti foto tiap 3,5 detik
}
