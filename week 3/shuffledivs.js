$(document).ready(function () {

    const colors = ["red", "blue", "green", "orange", "purple", "pink", "teal"];

    $("#shuffleBtn").click(function () {

        let boxes = $(".box").toArray();

        boxes.sort(function () {
            return 0.5 - Math.random();
        });

        $("#container").fadeOut(200, function () {

            $("#container").empty();

            $.each(boxes, function (index, box) {

                let randomColor = colors[Math.floor(Math.random() * colors.length)];

                $(box)
                    .removeClass()
                    .addClass("box")
                    .css("background-color", randomColor);

                $("#container").append(box);
            });

            $("#container").fadeIn(300);
        });
    });
});
