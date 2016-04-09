//========= ver. 0.0  ===========






$(document).ready(function () {

    $(".click-hide-effect").on("click", function () {
        $(this).find(".hide").removeClass('hide');
        $(this).find(".fa-search").addClass('hide');
    });

});

// https://en.wikipedia.org/w/api.php?action=opensearch&format=jsonfm&search=kot