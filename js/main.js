//========= ver. 1.0  ===========
function search(userInput) {
    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + userInput,
        type: 'GET',
        dataType: 'jsonp',
        headers: {'Api-User-Agent': 'Wikipedia-Viewer'}
    }).success(function (data, status) {
        console.log("success... " + status + ' -data- ' + data);

        for (var i = 0; i < data[1].length; i++) {
            $("#result").append('<a href=' + data[3][i] + ' target="_blank">' +
                '<blackquote>' +
                '<h4>' + data[1][i] + '</h4>' +
                '<p>' + data[2][i] + '</p>' +
                '</blackquote>' +
                '</a>');
        }

    }).error(function (data, status) {
        console.log("error... " + status);
    });

}

$(document).ready(function () {
    // after pressing search icon hide it and show input field
    $(".fa-search").on("click", function () {
        $(".input-group").removeClass('hide');
        $(".fa-search").addClass('hide');
    });

    //after pressing close(x) button hide input, clear screen and show search button
    $(".input-group-btn").on("click", function () {
        $(".input-group").addClass('hide');
        $(".fa-search").removeClass('hide');
        $("#div-middle").addClass('display-table-cell-middle');
        $('#search-input').val(''); // clear inputs field
        $('#result').empty(); // clear screen
    });

    // if user has pressed enter
    $("#search-input").keyup(function (e) {
        var text = encodeURIComponent($('#search-input').val());
        if (e.which === 13) {
            $("#search-input").change(function () {
                $('#result').empty(); // clear screen
            });
            search(text); // search  api with users value
            $("#div-middle").removeClass('display-table-cell-middle');
        }
    });
});


// $.ajax({
//     url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=jsonfm&search='+ userInput,
//     data: {
//         format: 'json'
//     },
//     dataType: 'jsonp'
// }).done( function ( data ) {
//     ...
// } );
