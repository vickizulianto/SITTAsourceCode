//  DATA BUKU
var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "asset/pengantar_komunikasi.jpg",
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "asset/manajemen_keuangan.jpg",
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "asset/kepemimpinan.jpg",
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "asset/mikrobiologi.jpg",
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "asset/paud_perkembangan.jpeg",
  },
];

//TAMPILKAN CARD
const container = document.getElementById("cardContainer");
dataBahanAjar.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
          <img src="${item.cover}" alt="${item.namaBarang}">
          <h4>${item.namaBarang}</h4>
          <p>Stok: ${item.stok}</p>
        `;
  card.addEventListener("click", () => showModal(item, index));
  container.appendChild(card);
});

// MODAL
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const btnTambah = document.getElementById("btnTambah");
const btnKurang = document.getElementById("btnKurang");

let currentIndex = null;

function showModal(item, index) {
  currentIndex = index;
  document.getElementById("modalCover").src = item.cover;
  document.getElementById("modalNama").textContent = item.namaBarang;
  document.getElementById("modalLokasi").textContent = item.kodeLokasi;
  document.getElementById("modalKode").textContent = item.kodeBarang;
  document.getElementById("modalJenis").textContent = item.jenisBarang;
  document.getElementById("modalEdisi").textContent = item.edisi;
  document.getElementById("modalStok").textContent = item.stok;
  modal.style.display = "flex";
}

// Tombol Tambah
btnTambah.addEventListener("click", () => {
  if (currentIndex !== null) {
    dataBahanAjar[currentIndex].stok++;
    updateModalAndCard();
  }
});

// Tombol Kurang
btnKurang.addEventListener("click", () => {
  if (currentIndex !== null) {
    if (dataBahanAjar[currentIndex].stok > 0) {
      dataBahanAjar[currentIndex].stok--;
      updateModalAndCard();
    } else {
      alert("Stok sudah 0!");
    }
  }
});

// Update tampilan modal & card
function updateModalAndCard() {
  document.getElementById("modalStok").textContent =
    dataBahanAjar[currentIndex].stok;
  container.children[currentIndex].querySelector(
    "p"
  ).textContent = `Stok: ${dataBahanAjar[currentIndex].stok}`;
}

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
