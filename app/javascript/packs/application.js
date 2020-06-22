// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


$(document).ready( function() {
  console.log("Ready!");

  //desktop

  $('.newsletter').click(function() {
      $(this).toggleClass('tab-extended');
      $(".nl_content").removeClass("no_show")
      $(".fllw_content").addClass("no_show")
      $(".km_content").addClass("no_show")
      $(".wip_content").addClass("no_show")
      $(".know_more").removeClass("tab-extended");
      $(".follow").removeClass("tab-extended");
      $(".wip").removeClass("tab-extended");
      $(".woop").removeClass("no_show");
    });

  $('.know_more').click(function() {
      $(this).toggleClass('tab-extended');
      $(".km_content").removeClass("no_show")
      $(".nl_content").addClass("no_show")
      $(".fllw_content").addClass("no_show")
      $(".wip_content").addClass("no_show")
      $(".follow").removeClass("tab-extended");
      $(".newsletter").removeClass("tab-extended");
      $(".wip").removeClass("tab-extended");
      $(".woop").removeClass("no_show");
    });

  $('.follow').click(function() {
      $(this).toggleClass('tab-extended');
      $(".fllw_content").removeClass("no_show")
      $(".nl_content").addClass("no_show")
      $(".km_content").addClass("no_show")
      $(".wip_content").addClass("no_show")
      $(".know_more").removeClass("tab-extended");
      $(".newsletter").removeClass("tab-extended");
      $(".wip").removeClass("tab-extended");
      $(".woop").removeClass("no_show");
    });


  $('.wip').click(function() {
      $(this).toggleClass('tab-extended');
      $(".wip_content").toggleClass("no_show")
      $(".woop").toggleClass("no_show")
      $(".fllw_content").addClass("no_show")
      $(".km_content").addClass("no_show")
      $(".know_more").removeClass("tab-extended");
      $(".follow").removeClass("tab-extended");
      $(".newsletter").removeClass("tab-extended");
    });

  // mobile

  $('.newsletterm').click(function() {
      $(".nl_contentm").removeClass("no_show")
      $(".fllw_contentm").addClass("no_show")
      $(".km_contentm").addClass("no_show")
      $(".wip_content").addClass("no_show")
      $(".woop").removeClass("no_show");
    });

  $('.know_morem').click(function() {
      $(".km_contentm").removeClass("no_show")
      $(".nl_contentm").addClass("no_show")
      $(".fllw_contentm").addClass("no_show")
      $(".wip_contentm").addClass("no_show")
      $(".wip").removeClass("tab-extended");
      $(".woop").removeClass("no_show");
    });

  $('.followm').click(function() {
      $(".fllw_contentm").removeClass("no_show")
      $(".nl_contentm").addClass("no_show")
      $(".km_contentm").addClass("no_show")
      $(".wip_content").addClass("no_show")
      $(".wip").removeClass("tab-extended");
      $(".woop").removeClass("no_show");
    });


  $('.wip').click(function() {
      $(".wip_content").toggleClass("no_show")
      $(".woop").toggleClass("no_show")
      $(".fllw_contentm").addClass("no_show")
      $(".km_contentm").addClass("no_show")
      $(".know_morem").removeClass("tab-extended");
      $(".followm").removeClass("tab-extended");
      $(".newsletterm").removeClass("tab-extended");
    });


  $('.mail').each(function () {
    $(this).html($(this).html().replace(/(\@)/g, '<span style="color: #E8F009;">$1</span>'));
});
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

import "bootstrap";
