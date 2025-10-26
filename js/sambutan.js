// Ambil data user
const user = JSON.parse(localStorage.getItem("userLogin"));

if (!user) {
  // Jika belum login
  alert("Silakan login terlebih dahulu!");
  window.location.href = "index.html";
} else {
  // Tampilkan sambutan sesuai waktu
  const now = new Date();
  const jam = now.getHours();
  let greeting = "";

  if (jam >= 4 && jam < 11) {
    greeting = "Selamat Pagi";
  } else if (jam >= 11 && jam < 15) {
    greeting = "Selamat Siang";
  } else if (jam >= 15 && jam < 18) {
    greeting = "Selamat Sore";
  } else {
    greeting = "Selamat Malam";
  }

  // Masukkan ke HTML
  document.getElementById(
    "sambutan"
  ).textContent = `${greeting}, ${user.nama}!`;
}
