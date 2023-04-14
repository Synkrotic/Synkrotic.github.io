var doc = document

function goto (fileloc) {
    window.location.href = fileloc
}

function switchGeneral (state) {
    $("#general-page").css("animation", "")
    $("#general-page").offset();
    if ( state === 'open' ) {
        $("#general-page").css("animation", "generalInfoSizing 0.675s 1 normal forwards");
    } else if ( state === 'close' ) {
        $("#general-page").css("animation", "generalInfoSizing 0.675s 1 reverse");
    }
}

$(doc).ready(function () {
    $(".info-box").hover(function () {
            $(".info-box").css("filter", "blur(3px)");
            $(this).css("filter", "");
        }, function () {
            $(".info-box").css("filter", "");
            $("#logo").css("filter", "");
    }); 
});