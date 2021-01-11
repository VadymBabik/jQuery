"use strict";
//
$(function () {
  let btn = $(".btn-top");
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      btn.show(100);
    } else {
      btn.hide(100);
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "200");
  });
});
