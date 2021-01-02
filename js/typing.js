$(document).ready(function (){
    $("#input").keydown(function (){
        $("#typingBox").text("typing....");
    });

    $("#input").keydown(function (){
        setInterval(function (){
            $("#typingBox").text(" ");
        } , 2000);
    });

});