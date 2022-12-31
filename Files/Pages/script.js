var page = window.location.pathname;
var pageName = page.split("/").pop();
var subjectText;

function goto(loc) {
    window.location.href = loc;
};

function getSubject() {
    if ($('p').hasClass('subject')) {
        subjectText = $(this);
    };
    console.log(subjectText);
    $(subjectText).text('test');
};

$(document).ready(function () {
    console.log('test');
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