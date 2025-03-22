$(window).on("load", function () {
  $(".preloader").fadeOut();
});

$(document).ready(function () {
  // Copy Coupon

  $(".coupon-item .copy-btn").on("click", function () {
    $(".success-toast").addClass("show-toast");
    $(this).addClass("copied");
    if ($("html").attr("dir") == "rtl") {
      $(this).html("تم النسخ");
    } else {
      $(this).html("Copied");
    }
    $(this).prop("disabled", true);

    setTimeout(() => {
      $(".success-toast").removeClass("show-toast");
    }, 3000);
  });
  $(".success-toast .closeToastBtn").on("click", function () {
    $(".success-toast").removeClass("show-toast");
  });
  //**************************************************************************************************

  //  File Input

  $(".addFile-btn").on("click", function (e) {
    e.preventDefault();
    $(".file-label .input").trigger("click");
  });

  $(".file-label .input").on("change", function () {
    if (this.files.length === 0) return;
    $(".place-txt").html(this.files[0].name);
  });

  //**************************************************************************************************

  // Swipers

  // Main Swiper
  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    navigation: {
      nextEl: " .mainBanner .swiper-button-next",
      prevEl: ".mainBanner .swiper-button-prev",
    },
    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  // Brands Swiper
  const brands = new Swiper(".brands .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".brands .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      350: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      580: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 15,
      },
    },
  });

  // Blog Swiper
  if ($(window).width() < 768) {
    const BlogSwiper = new Swiper(".blog .swiper", {
      loop: true,
      autoplay: true,
      draggable: true,
      speed: 800,
      pagination: {
        el: ".blog .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  }

  //**************************************************************************************************
  // Faq

  $(".faq-item").on("click", function () {
    $(this).children(".faq-answer").slideToggle(300);
    $(this).toggleClass("active").siblings().removeClass("active");
    $(".faq-answer").not($(this).children(".faq-answer")).slideUp(300);
  });

  //**************************************************************************************************

  // Mobile Side Menu

  $(".openNavBtn").click(function () {
    $(".navigation").addClass("show-navigation");
    $("body").addClass("overflowHidden");
  });

  $(".closeNavBtn").click(function () {
    $(".navigation").removeClass("show-navigation");
    $("body").removeClass("overflowHidden");
  });

  //**************************************************************************************************

  // Fixed Header

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("header-fixed");
    } else {
      $(".header").removeClass("header-fixed");
    }
  });

  //**************************************************************************************************

  //  Nested menu in  Mobile SideMenu

  if ($(window).width() < 992) {
    $(".menu-item-has-children > a").removeAttr("href");
    $(".menu-item-has-children > a").on("click", function (e) {
      e.stopPropagation();
      $(this).siblings(".sub-menu").slideToggle(300);
      $(this).toggleClass("mobile-arrow-rotate");
    });
  }

  //**************************************************************************************************

  //  Footer Dropdown Menu In Mobile

  let footerTitle = $(
    ".footer-item:not(.logo-footer-item, .apps-footer-item) .footer-title"
  );

  if ($(window).width() < 768) {
    footerTitle.on("click", function () {
      $(this).next(".collapse-ul").slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      footerTitle.not($(this)).next(".collapse-ul").slideUp(300);
      footerTitle.not($(this)).removeClass("arrow-rotate");
    });
  }
  //**************************************************************************************************

  // to top button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });

  // **************************************************************************************************
}); // End of document ready
