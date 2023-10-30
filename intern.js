
  $(document).ready(function () {
    var maxHeight = 0;
    $(".column").each(function () {
      var currentHeight = $(this).find(".content").height();
      if (currentHeight > maxHeight) {
        maxHeight = currentHeight;
      }
    });
    $(".content").height(maxHeight);
  });