var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta",
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar",
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat",
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP",
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat",
  },
];

function showModal() {
  document.getElementById("modalsalah").style.display = "block";
}
function closeModal() {
  document.getElementById("modalsalah").style.display = "none";
}

// Tangkap elemen form
const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // agar tidak reload

  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  // Cek data
  const user = dataPengguna.find(
    (u) => u.email === emailInput && u.password === passwordInput
  );

  if (user) {
    // Simpan data user di localStorage (opsional, agar bisa dipakai di dashboard)
    localStorage.setItem("userLogin", JSON.stringify(user));

    alert("Login berhasil! Selamat datang, " + user.nama);
    window.location.href = "dashboard.html"; // pindah ke dashboard
  } else {
    alert("email atau password yang anda masukkan salah!!");
    showModal();
  }
});
