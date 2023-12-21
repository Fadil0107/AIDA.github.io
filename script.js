document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  const progressBarIndicator = document.querySelector(".progress-bar .indicator");
  const clickableImages = document.querySelectorAll(".clickable-image-link");
  const confirmButton = document.querySelector(".button a");
  const nextButton = document.querySelector(".button a");

  // Inisialisasi semua lingkaran dengan kelas "active"
  circles.forEach(function (circle) {
    circle.classList.remove("active");
  });

  // Dapatkan indeks halaman saat ini
  const pageIndex = Array.from(circles).findIndex(circle =>
    circle.classList.contains("active")
  );

  if (window.location.href.includes("step1.html")) {
    // Step 1
    circles[0].classList.add("active");
    clickableImages.forEach(function (image) {
      image.addEventListener("click", function (event) {
        event.preventDefault();
        if (image.href.includes("baju-celana.html")) {
          window.location.href = "baju-celana.html";
        } else if (image.href.includes("baju-rok.html")) {
          window.location.href = "baju-rok.html";
        }
      });
    });
  } else if (window.location.href.includes("baju-celana.html") || window.location.href.includes("baju-rok.html")) {
    // Step 2 - Image Baju Celana atau Baju Rok
    circles[0].classList.add("active");
    circles[1].classList.add("active");
    progressBarIndicator.style.width = "50%";
    confirmButton.addEventListener("click", function () {
      window.location.href = "camera.html";
    });
  }

  if (window.location.href.includes("camera.html")) {
    // Step 3
    circles.forEach(function (circle) {
      circle.classList.add("active");
    });
    progressBarIndicator.style.width = "100%";
    nextButton.addEventListener("click", function () {
      // Tambahkan logika untuk pergi ke halaman berikutnya saat tombol "Selanjutnya" diklik
      // window.location.href = "langkah-terakhir.html"; // Gantilah dengan halaman yang sesuai
    });
  }
});




