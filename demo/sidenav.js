$(function () {
    var list = $('#navigation ul');
    var isH2 = false;
    $("h1, h2").each(function () {
        $(this).prepend('<a name="' + $(this).text() + '"></a>');
        if ($(this).prop("tagName") == "H2") {
            $(list).append('<ul><li><a href="#' + $(this).text() + '">' + $(this).text() + '</a></li></ul>');
        } else {
            $(list).append('<li><a href="#' + $(this).text() + '">' + $(this).text() + '</a></li>');
        }
    });
});