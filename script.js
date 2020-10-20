$("img").hide();
$("button").hide();
$(".message2").hide();
$(".message3").hide();
$(".message4").hide();
$(".message5").hide();
$(".message6").hide();
$(".message7").hide();
$(".message8").hide();
$(".message9").hide();
$(".message10").hide();
$(".message11").hide();
$(".message12").hide();
$(".message13").hide();
$(".message14").hide();
$(".message15").hide();
$(".message16").hide();
$(".message17").hide();
$(".message18").hide();
$(".message19").hide();
$(".leave").hide();
$(".radar").show();

$(".radar").click(function() {
    $(".goku").show();
    $(".message2").show();
    $(".message1").hide();
});

$(".goku").dblclick(function() {
    $(".radar").hide();
    $(".goku").hide();
    $(".message1").hide();
    $(".message2").hide();
    $(".namek").fadeIn();
    $(".message3").show();

});
$(".namek").click(function() {
    $(".threestar").fadeIn();
    $(".message4").show();
    $(".namek").fadeOut();
    $(".message3").hide();
});
$(".threestar").click(function() {
    $(".capsule").show();
    $(".threestar").hide();
    $(".message4").hide();
    $(".message5").show();
    $(".leave").show();

});
$(".capsule").mouseleave(function() {
    $(".vegeta").fadeIn(10000);
    $(".capsule").hide();
    $(".leave").hide();
    $(".message5").hide();
    $(".message6").show();
    $(".message7").show();
    $(".button1").show();
});
$(".button1").click(function() {
    $(".radar").show();
    $(".message6").hide();
    $(".message7").hide();
    $(".vegeta").hide();
    $(".button2").show();
    $(".button1").hide();
    $(".message8").show();
});
$(".button2").click(function() {
    $(".onestar").fadeIn();
    $(".sixstar").fadeIn();
    $(".twostar").fadeIn();
    $(".radar").hide();
    $(".message8").hide();
    $(".button2").hide();
    $(".message9").show();
    $(".message10").show();
    $(".button3").show();
});
$(".button3").click(function() {
    $(".earth").fadeIn();
    $(".onestar").fadeOut();
    $(".sixstar").fadeOut();
    $(".twostar").fadeOut();
    $(".message9").hide();
    $(".message10").hide();
    $(".message11").show();
    $(".message12").show();
    $(".button3").hide();
    $(".button4").show();

});
$(".button4").click(function() {
    $(".treasure").show();
    $(".earth").hide();
    $(".message11").hide();
    $(".message12").hide();
    $(".message13").show();
    $(".message14").show();
    $(".button4").hide();
    $(".button5").show();

});
$(".button5").click(function() {
    $(".treasure").hide();
    $(".opentreasure").show();
    $(".message13").hide();
    $(".message14").hide();
    $(".button5").hide();
    $(".message16").show();
});
$(".message16").click(function() {
    $(".fivestar").fadeIn();
    $(".sevenstar").fadeIn();
    $(".message16").hide();
    $(".message17").show();
    $(".message18").hide();
    $(".button6").show();

});
$(".button6").click(function() {
    $(".opentreasure").hide();
    $(".dragonballs").show();
    $(".fivestar").hide();
    $(".sevenstar").hide();
    $(".button6").hide();
    $(".button7").show();
});
$(".button7").click(function() {
    $(".shenron").show();
    $(".dragonballs").hide();
    $(".button7").hide();
    $(".message17").hide();
    $(".message19").show();
});