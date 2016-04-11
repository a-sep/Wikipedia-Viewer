//========= ver. 0.5  ===========

function search(userInput) {
    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + userInput,
        data: {
            format: 'json'
        },
        dataType: 'jsonp'
    }).done(function (data) {

        //TODO ...wyświetlić wyszukane dane w div id=result

        console.log(data[1][1] + " next" + data[2][1]);

        // foreach
        // $("#result").append("<div> data[1][1] </div><div> data[2][1] </div><div> data[3][1] </div>");
        // $("#result").text(data[1][1]);

        for (var i = 0; i < data[1].length; i++) {


            $("#result").append('<div class=""><a href=' + data[3][i] + '><p><h3>' + data[1][i] + '</h3>' + data[2][i] + '</p></a></div>');

        }


        // var txt1 = "<p>"+ data[1][1] +"</p>";               // Create element with HTML
        // var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
        // var txt3 = document.createElement("p");  // Create with DOM
        // txt3.innerHTML = "Text.";
        // $("p").append(txt1, txt2, txt3);


        // $('.my-quote').text(data.quoteText);
        // $('.my-author').text(data.quoteAuthor);
        // $("#tweet").attr('href', "https://twitter.com/intent/tweet?text=" + text + '  ' + data.quoteAuthor);

    });
}


$(document).ready(function () {
    // after pressing search icon
    $(".fa-search").on("click", function () {
        $(".input-group").removeClass('hide');
        $(".fa-search").addClass('hide');
    });


    $(".input-group-btn").on("click", function () {
        $(".input-group").addClass('hide');
        $(".fa-search").removeClass('hide');
        $("#div-middle").addClass('display-table-cell-middle');
        $('#search-input').val(''); // clear inputs value
        $('#result').removeChild(); // clear inputs value

        // TODO funkcja wyczyścić stronke
    });

    // if user has pressed enter
    $("#search-input").keyup(function (e) {
        if (e.keyCode === 13) {
            search($('#search-input').val()); // search  api with users value
            $("#div-middle").removeClass('display-table-cell-middle');
        }
    });
});

// https://en.wikipedia.org/w/api.php?action=opensearch&format=jsonfm&search=kot


// $.ajax({
//     url: '//www.mediawiki.org/w/api.php?format=jsonty&action=query&meta=siteinfo&siprop=general&callback=?',
//     data: {
//         format: 'json'
//     },
//     dataType: 'jsonp'
// }).done( function ( data ) {
//     ...
// } );
