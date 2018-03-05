$(function () {

    $("li:first").addClass("bot");
    $("li").addClass("upp");

    $("li.active").css("color", "red");

    var ln = $("li").length;
    var ln = parseInt(ln / 2);
  

    $("li:eq(" + ln + ")").css("background-color", "blue");




});