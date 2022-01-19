$(document).on("click", ".btn-minus", function () {
  var n = $(this).parent().siblings("input"),
    t = parseInt($(n).val()) - 1;

  if (t > 1 && t < 99) {
    $(n).val(t).change();
  } else {
    $(n).val(1).change();
  }
});

$(document).on("click", ".btn-plus", function () {
  var n = $(this).parent().siblings("input"),
    t = parseInt($(n).val()) + 1;

  if (t > 1 && t < 99) {
    $(n).val(t).change();
  } else {
    $(n).val(1).change();
  }
});
