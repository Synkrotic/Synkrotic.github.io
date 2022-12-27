var box = document.getElementsByClassName('searchbarbox');
var inputBox = document.getElementsByClassName('searchbarinput');

function search() {
    var input = document.getElementById('searchbarinput').value;
    var filePath = 'Files/Pages/' + input + '.html';
    filePath = filePath.toLowerCase();

    $.ajax({
        type: "HEAD",
        url: filePath,
        dataType: "html",
        success: function (response) {
            window.location.href = filePath;
        },
        error: function (response) {
            window.location.href = 'Files/Pages/undefined.html';
        }
    });
};

$(document).ready(function(){
    $('div').hover(function() {
        if ($(this).hasClass('act-drop')){
            $(box).addClass('animated');
        };
    }, function() {
        if ($(box).hasClass('animated')){
            $(box).removeClass('animated');
        };
    });

    $(box).hover(function(){
        document.onkeydown = function (e) {
            if (e.keyCode == 13){
                search();
            };
        };
    });

    $('a').hover(function() {
        $(this).addClass('animated');
        $('a').addClass('blurred');
        $(this).removeClass('blurred');
        $('li').removeClass('animated');
    }, function() {
        if ($(this).hasClass('animated')) {
            $(this).removeClass('animated');
            $('a').removeClass('blurred');
            $('li').addClass('animated');
        };
    });
});