document.addEventListener("DOMContentLoaded", function () {
  const watchVideoBtn = document.getElementById("watchVideoBtn");
  const videoPopup = document.getElementById("videoPopup");
  const closeBtn = document.querySelector(".close-btn");

  // Buka pop-up saat tombol diklik
  watchVideoBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Hentikan aksi default (navigasi link)
    videoPopup.style.display = "flex"; // Tampilkan pop-up
  });

  // Tutup pop-up saat tombol close diklik
  closeBtn.addEventListener("click", function () {
    videoPopup.style.display = "none"; // Sembunyikan pop-up
  });

  // Tutup pop-up saat klik di luar konten
  videoPopup.addEventListener("click", function (e) {
    if (e.target === videoPopup) {
      videoPopup.style.display = "none";
    }
  });
});
