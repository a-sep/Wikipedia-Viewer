//========= ver. 0.5  ===========


$(document).ready(function () {

    $(".fa-search").on("click", function () {
        $(".input-group").removeClass('hide');
        $(".fa-search").addClass('hide');
    });

    $(".input-group-btn").on("click", function () {
        $(".input-group").addClass('hide');
        $(".fa-search").removeClass('hide');

        // TODO funkcja wyczyścić stronke
    });
});

// https://en.wikipedia.org/w/api.php?action=opensearch&format=jsonfm&search=kot