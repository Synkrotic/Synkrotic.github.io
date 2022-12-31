var page = window.location.pathname;
var pageName = page.split("/").pop();

function goto(loc) {
    window.location.href = loc;
};

function getSubject() {
    pageName = pageName.split(".").shift();

    $('#subject').text(pageName);
};

$(document).ready(function () {
    getSubject();
    $('a').hover(function () {
        $('a').addClass('blurred');
        $(this).removeClass('blurred');
        $(this).addClass('animated');
    }, function () {
        if ($('a').hasClass('animated')) {
            $(this).removeClass('animated');
            $('a').removeClass('blurred');
        };
    });
});