$(initialization);

function initialization() {
    var ratingNumber = null;

    $(".rating div").on("click", function () {
        $(".rating div").removeClass("ratingSelected");
        $(this).addClass("ratingSelected");

        ratingNumber = $(this).text();
    });

    $("button").on("click", function () {
        if (ratingNumber != null) {
            $("h3 span").text(ratingNumber);
            $("#screen1").hide();
            $("#screen2").show();
        }
    })
}
