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

            $.ajax({
                type: "POST",
                url: "https://subteweb.gatsbyjs.io/api/challenge",
                data: {
                    "rating": ratingNumber,
                },
                success: function (response) {

                    console.log(response);
                },
                dataType: "json"
            });

            $("#screen1").hide();
            $("#screen2").show();


        }
    })
}
