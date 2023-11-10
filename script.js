const accordion = $(".container");

$(".container").each(function () {
  $(this).click(function () {
    $(".container").removeClass("active");
    $(this).toggleClass("active");
  });
});
