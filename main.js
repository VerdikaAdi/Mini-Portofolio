 // IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
 // Sumber: MDN Web Docs - IIFE (Immediately Invoked Function Expression)
 // Fungsi: Membungkus seluruh kode JavaScript ke dalam scope lokal
 // sehingga variabel dan fungsi tidak mencemari global scope.
 
(function () {

  //  DYNAMIC FOOTER YEAR
  //  Sumber: MDN Web Docs - Document.getElementById()
  //  Fungsi: Mengambil elemen dengan id "year" dan menampilkan
  //  tahun saat ini secara otomatis pada bagian footer website.

  "use strict";

  // Current year in footer
   // DYNAMIC FOOTER YEAR
   // Sumber: MDN Web Docs - Document.getElementById()
   // Fungsi: Mengambil elemen dengan id "year" dan menampilkan
   // tahun saat ini secara otomatis pada bagian footer website.
  var yearEl = document.getElementById("year");

  // CONDITIONAL STATEMENT
  //  Sumber: MDN Web Docs - if...else
  //  Fungsi: Memastikan elemen ditemukan sebelum dilakukan
  //  manipulasi DOM untuk menghindari error.
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile navigation toggle
  // DOM ELEMENT SELECTION
  // Sumber: MDN Web Docs - Document.querySelector()
  // Fungsi: Mengambil elemen tombol navigasi mobile dan menu
  // navigasi berdasarkan selector CSS.
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  
  // ELEMENT EXISTENCE CHECK
  // Sumber: MDN Web Docs - if Statement
  // Fungsi: Memastikan elemen tombol dan menu tersedia
  // sebelum event listener ditambahkan.
  if (toggle && menu) {

    // EVENT HANDLING (MOBILE MENU TOGGLE)
    // Sumber: MDN Web Docs - EventTarget.addEventListener()
    // Fungsi: Menangani klik pada tombol navigasi untuk
    // membuka atau menutup menu mobile.
    toggle.addEventListener("click", function () {

      // CLASS TOGGLING
      // Sumber: MDN Web Docs - Element.classList.toggle()
      // Fungsi: Menambahkan atau menghapus class "is-open"
      // untuk mengontrol visibilitas menu navigasi.
      var isOpen = menu.classList.toggle("is-open");

      // ACCESSIBILITY ATTRIBUTE UPDATE
      // Sumber: MDN Web Docs - Element.setAttribute()
      // Fungsi: Memperbarui nilai aria-expanded agar screen reader
      // mengetahui status menu (terbuka atau tertutup).
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked
     // NAVIGATION LINK EVENT HANDLING
     // Sumber: MDN Web Docs - NodeList.forEach()
     // Fungsi: Menambahkan event klik pada setiap link navigasi
     // agar menu otomatis tertutup setelah pengguna memilih menu.
    menu.querySelectorAll("a").forEach(function (link) {

      // CLICK EVENT LISTENER
      // Sumber: MDN Web Docs - EventTarget.addEventListener()
      // Fungsi: Menutup menu mobile ketika salah satu link
      // navigasi dipilih oleh pengguna.
      link.addEventListener("click", function () {

        // CLASS REMOVAL
        // Sumber: MDN Web Docs - Element.classList.remove()
        // Fungsi: Menghapus class "is-open" sehingga menu
        // kembali disembunyikan.
        menu.classList.remove("is-open");

        // ACCESSIBILITY RESET
        // Sumber: MDN Web Docs - Element.setAttribute()
        // Fungsi: Mengubah nilai aria-expanded menjadi false
        // untuk menandakan bahwa menu telah ditutup.
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
