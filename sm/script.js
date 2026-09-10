$(function () {
    $("button").click(function () {
    $("nav").animate({ "margin-left": 0 }, 200);

    $("header").animate({ "margin-left": "+=250px" }, 200);

    $("main").animate({ "margin-left": "+=250px" }, 200);

    $("body").children().animate({ "margin-left": "+=250px" }, 200);

    $("body").children().animate({ "margin-left": "+=" + dis + "px" }, 200);

    dis *= -1;
    });
});