$(document).ready(function(){
    $("#main-nav a").click(function() {
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    });

    $(".type-effect").typed({
        strings: ["a UI Developer", "a Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});