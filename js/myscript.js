function getWindowWidth() {
  let ww = $(window).width();
  if (ww > 910) {
    $("html").addClass("pc").removeClass("mobile");
    $("#header .nav").css({
      display: "flex",
      width: "auto",
    });
    $("#header .nav .depth1 > li").removeClass("on");
    $("#header .nav .depth1 > li").find(".depth2").hide();
  } else {
    $("html").addClass("mobile").removeClass("pc");
    $("#header .menuopen")
      .find("i")
      .removeClass("fa-times")
      .addClass("fa-bars");
    $("#header .nav").css({
      display: "none",
      width: "100%",
    });
  }
}

getWindowWidth();

$(window).on("resize", function () {
  getWindowWidth();
});

$(".slideInner").slick({
  autoplay: 4000,
  dots: true,
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="previous" type="button"><i class="fa-solid fa-angles-left"></i></button>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-angles-right"></i></button>',
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
  if ($(sct >= 1100)) {
    $(this).css({
      color: "blue",
    });
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
    $(this).find(".depth2").stop().slideToggle(300);
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
  if (!$(this).find("i").hasClass("fa-bars")) {
    $("#header .nav .depth2").slideUp();
    $("#header .nav .depth1 > li").removeClass("on");
    $(this).find("i").addClass("fa-bars").removeClass("fa-times");
  } else {
    $(this).find("i").addClass("fa-times").removeClass("fa-bars");
  }
});

$("#section .infolist ul > li").on("mouseover mouseout", function () {
  $(this).toggleClass("on", 200);
});

$("#floating").on("click", function () {
  $("html").animate(
    {
      scrollTop: "0",
    },
    500
  );
  return false;
});

let header = $("#header").offset().top + $("#header").outerHeight() / 5;

let movieChart =
  $("#section .moviechart .row").offset().top +
  $("#section .moviechart .row").outerHeight() / 5;
console.log(movieChart);

let enjoy =
  $("#section .enjoyList .ej").offset().top +
  $("#section .enjoyList .ej").outerHeight() / 5;

let popup =
  $("#section .leftpopup .popul1").offset().top +
  $("#section .leftpopup .popul1").outerHeight() / 5;

let boxlist =
  $("#section .boxlist .boxul").offset().top +
  $("#section .boxlist .boxul").outerHeight() / 5;

$(window).on("scroll", function () {
  let sct = $(this).scrollTop();
  console.log(sct);
  if (sct + $(this).height() >= movieChart) {
    $("#section .moviechart .row").addClass("on");
  } else {
    $("#section .moviechart .row").removeClass("on");
  }
  if (sct + $(this).height() >= enjoy) {
    $("#section .enjoyList .ej").addClass("on");
  } else {
    $("#section .enjoyList .ej").removeClass("on");
  }
  if (sct + $(this).height() >= popup) {
    $("#section .leftpopup .popul1").addClass("on");
  } else {
    $("#section .leftpopup .popul1").removeClass("on");
  }
  if (sct + $(this).height() >= boxlist) {
    $("#section .boxlist .boxul").addClass("on");
  } else {
    $("#section .boxlist .boxul").removeClass("on");
  }
  if (sct >= 1000) {
    $("#floating").fadeIn(200);
  } else {
    $("#floating").fadeOut(200);
  }
  if (sct >= 1100) {
    $("#header").addClass("hd");
    $("#header h1 a").addClass("hd");
    $("#header .info a").addClass("hd");
    $("#header .nav .depth1 > li > a").addClass("hd");
    $("#header .info p").addClass("hd");
  } else {
    $("#header").removeClass("hd");
    $("#header h1 a").removeClass("hd");
    $("#header .info a").removeClass("hd");
    $("#header .nav .depth1 > li > a").removeClass("hd");
    $("#header .info p").removeClass("hd");
  }
});
