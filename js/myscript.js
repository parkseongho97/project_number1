let ww = $(window).width();
if (ww > 910) {
  $("html").addClass("pc");
} else {
  $("html").addClass("mobile");
}

$(".slideInner").slick({
  autoplay: 4000,
  dots: true,
  arrows: false,
});

$(".slideOuter .plapau i").on("click", function () {
  if ($(this).hasClass("fa-pause")) {
    $(".slideInner").slick("slickPause");
    $(this).removeClass("fa-pause").addClass("fa-play");
  } else {
    $(".slideInner").slick("slickPlay");
    $(this).removeClass("fa-play").addClass("fa-pause");
  }
});

$(".slideInner2").slick({
  autoplay: 4000,
  dots: true,
  arrows: false,
});

$(".slideOuter2 .plapau i").on("click", function () {
  if ($(this).hasClass("fa-pause")) {
    $(".slideInner2").slick("slickPause");
    $(this).removeClass("fa-pause").addClass("fa-play");
  } else {
    $(".slideInner2").slick("slickPlay");
    $(this).removeClass("fa-play").addClass("fa-pause");
  }
});

$(".event").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "50px",
  slidesToShow: 3,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="previous" type="button"><i class="fa-solid fa-chevron-left"></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$(".popul1").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="previous" type="button"><i class="fa-solid fa-chevron-left"></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button>',
});

//header 오버 영역
$("#header h1 a").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
  }
});

$("#header .nav .depth1 > li").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
    $(this).find(".depth2").stop().slideToggle(200);
  }
});
$("#section .row .agebox").on("mouseover mouseout", function () {
  $(this).toggleClass("on");
});

// $(".nav .depth1 li > a").on("mouseover mouseout", function () {
//   if ($("html").hasClass("pc")) {
//     $(this).toggleClass("on");
//   }
// });

$("#header .nav .depth1 > li").on("click", function () {
  if ($("html").hasClass("mobile")) {
    $(this).toggleClass("on");
    $(this).siblings().removeClass("on");
    $(this).find(".depth2").stop().slideToggle(200);
    $(this).siblings().find(".depth2").slideUp("on");
  }
});

// $(".nav .depth1 > li > a").on("click", function () {
//   if ($("html").hasClass("mobile")) {
//     $(this).stop().toggleClass("on");
//   }
// });
// $(".nav .depth1 > li").on("mouseover mouseout", function () {
//   if ($("html").hasClass("pc")) {
//     $(this).toggleClass("on");
//     $(this).find(".depth2").stop().slideToggle(200);
//   }
// });
$(".info a .icon").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
  }
});

$("#section .boxlist .boxul > li").on("click ", function () {
  if ($("html").hasClass("mobile")) {
    $(this).stop().toggleClass("on");
  }
});

//슬라이드 오버 영역
// $("#section a").on("mouseover mouseout", function () {
//   $(this).toggleClass("on");
// });

// $("#section ul li").on("mouseover mouseout", function () {
//   if ($("html").hasClass("pc")) {
//     $(this).toggleClass("on");
//   }
// });
// $("#section ul li").on("click", function () {
//   if ($("html").hasClass("mobile")) {
//     $(this).toggleClass("on");
//   }
// });
$("#section .cgv .movie").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
  }
});
$("#section .cgv .movie").on("click ", function () {
  if ($("html").hasClass("mobile")) {
    $(this).toggleClass("on");
  }
});

$(".nav .depth1 > li").on("click", function () {
  $(this).hasClass("mobile");
});

// 햄버거 버튼
$("#header .menuopen").on("click", function () {
  $(this).next().stop().slideToggle(200);
  if (!$(this).find("i").hasClass("fa-times")) {
    $(this).find("i").removeClass("fa-bars").addClass("fa-times");
  } else {
    $(this).find("i").removeClass("fa-times").addClass("fa-bars");
  }
});

$("#section .infolist ul > li").on("mouseover mouseout", function () {
    $(this).toggleClass("on");
});

