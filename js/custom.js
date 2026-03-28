$(function () {
  const $menuBtn = $(".mobile-menu");
  const $nav = $(".nav");

  // Toggle menu with animation
  $menuBtn.on("click", function () {
    $nav.slideToggle(200);

    // Toggle active class for styling
    $(this).toggleClass("active");

    // Accessibility: update aria-expanded
    const isExpanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", !isExpanded);
  });

  // Close menu when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".mobile-menu, .nav").length) {
      if ($nav.is(":visible")) {
        $nav.slideUp(200);
        $menuBtn.removeClass("active").attr("aria-expanded", "false");
      }
    }
  });

  // Close menu on window resize (desktop view)
  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $nav.removeAttr("style"); // reset inline styles
      $menuBtn.removeClass("active").attr("aria-expanded", "false");
    }
  });
});