// --- Data tracking ---
var dataTracking = {
  2023001234: {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan",
      },
    ],
  },
  2023005678: {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung",
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG",
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi",
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto",
      },
    ],
  },
};
function showModal() {
  document.getElementById("modalsalah").style.display = "block";
}
function closeModal() {
  document.getElementById("modalsalah").style.display = "none";
}
// --- Fungsi pencarian ---
const form = document.getElementById("trackingForm");
const hasilDiv = document.getElementById("hasilTracking");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputNo = document.getElementById("NObilling").value.trim();
  hasilDiv.innerHTML = "";

  if (!inputNo) {
    hasilDiv.innerHTML =
      '<p class="notfound">⚠️ Masukkan nomor Billing terlebih dahulu.</p>';
    return;
  }

  const data = dataTracking[inputNo];

  if (data) {
    let html = `
            <div class="hasil">
              <h3>Detail Pengiriman</h3>
              <p><b>Nama:</b> ${data.nama}</p>
              <p><b>Status:</b> ${data.status}</p>
              <p><b>Ekspedisi:</b> ${data.ekspedisi}</p>
              <p><b>Tanggal Kirim:</b> ${data.tanggalKirim}</p>
              <p><b>Kode Paket:</b> ${data.paket}</p>
              <p><b>Total:</b> ${data.total}</p>
              <h3>Riwayat Perjalanan</h3>
              <div class="timeline">
          `;

    data.perjalanan.forEach((item) => {
      html += `
              <div class="timeline-item">
                <span>${item.waktu}</span>
                <p>${item.keterangan}</p>
              </div>
            `;
    });

    html += `</div></div>`;
    hasilDiv.innerHTML = html;
  } else {
    showModal();
  }
});
