//Informasi Bahan Ajar
document.getElementById("informasiBA").addEventListener("click", function () {
  window.location.href = "stok.html";
});
//Tracking Bahan Ajar
document.getElementById("tracking").addEventListener("click", function () {
  window.location.href = "tracking.html";
});
//Monitoring Proses DO Bahan Ajar
document.getElementById("monitoring").addEventListener("click", function () {
  window.location.href = "tracking.html";
});
//Rekap Bahan Ajar
document.getElementById("rekap").addEventListener("click", function () {
  window.location.href = "stok.html";
});
document.getElementById("home").addEventListener("click", function () {
  window.location.href = "dashboard.html";
});
//logout
document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("userLogin");
  alert("Anda telah keluar.");
  window.location.href = "index.html";
});
