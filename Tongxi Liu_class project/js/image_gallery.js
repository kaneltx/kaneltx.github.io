$(document).ready(function() {
    $("section ul a").each(function() {    
        $(this).click(function(evt) {
            $("#image").attr("src", $(this).attr("href"));
            evt.preventDefault();
        });
    });
});

