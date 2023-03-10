/**
* Template Name: Avilon - v4.9.0
* Template URL: https://bootstrapmade.com/avilon-bootstrap-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

Swal.fire({
  icon: 'info',
  title: 'INFO',
  text: 'Website ini dibuat oleh divisi Publikasi dan Dokumentasi SiKrab Outbound 2023',
  footer: '<a href="https://github.com/syuhendar729/web-sikrab-pikr" target="_blank">Ingin berkontribusi?</a>',
}).then(() => {
    Swal.fire({
      title: 'Menfess',
      text: 'Mau liat ga Menfess kita ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: '<a href="https://outboundpikr2023-menfess.vercel.app/" target="_blank">Mau dong</a>',
      denyButtonText: `Enggak deh`,
    }).then(() => {
        Swal.fire({
          title: 'Games',
          text: 'Oke deh tebak-tebakan dlu yuk sebelum ngeliat websitenya, mau ga?',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Mau dong',
          denyButtonText: `Enggak deh`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Tapi Boong', 'Awokawok', 'info')
          } else if (result.isDenied) {
            Swal.fire('😄','Oke deh, semoga nyaman dengan websitenya ya hehe...', 'info')
          }
        })
    })   
});

let btnDaftar = document.getElementById('gbsDaftar');
console.log(btnDaftar);
btnDaftar.addEventListener("click", console.log("BERHASIL"));



// let tebak = confirm("Tebak-tebakan dlu yuk sebelum ngeliat websitenya, mau ga?")
// while (tebak == true){
//   let waktu = prompt("Apakah benar acara kita diadakan di tanggal 18 Maret 2023? Ketik 'y' jika benar dan 'g' jika salah")
//   if (waktu == "g") {
//     alert("Yeaay, jawaban kamu benar !!")
//   } else if (waktu == "y") {
//     alert("Nice try")
//   } else {
//     alert("Jawaban kamu ga bisa dideteksi sistem :(")
//   }
//   tebak = confirm("Kita masih banyak tebak-tebakan loh, mau nyoba lagi ga?")
// }



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()