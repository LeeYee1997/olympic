$(function(){
  const lightblue = "rgba(105,188,244,0.7)";
  const deepblue =  "#265473";
  const grey = "#bbbbbb";
  //navs
  $("#nav-button-1").click(function(){
     $("#the-sidebar").show('slide', {direction: 'right'}, 500);
     $("#nav-button-1").fadeOut(400);
     $("#back-to-top").fadeOut(400);
  })
  $("#nav-button-2").click(function(){
     $("#the-sidebar").hide('slide', {direction: 'right'}, 500);
     $("#nav-button-1").fadeIn(400);
     $("#back-to-top").fadeIn(400);

  })
  //init scrollmagic
  var controller = new ScrollMagic.Controller();

  //setpin
  var setPin = new ScrollMagic.Scene({
    triggerElement: "#withdrawContainer",
    triggerHook: 0,
    duration: '1850'
  })
  .setPin("#withdraw")
  .addTo(controller);
  //scene2
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#scene2",
    triggerHook: 0.9
    // duration: '500'
  })
  .on("enter", function(){
    d3.selectAll(".withdrawed")
      .transition()
      .duration(500)
      .style("fill", lightblue);
    d3.selectAll(".specified")
    .transition()
    .duration(500)
      .style("fill", lightblue);
    $(".legend1").show(1000);
    $(".legendCircle1").show(1000);
  })
  .on("leave", function(){
    d3.selectAll(".withdrawed")
      .transition()
      .duration(500)
      .style("fill", grey);
    d3.selectAll(".specified")
    .transition()
    .duration(500)
      .style("fill", grey);
    $(".legend1").hide(1000);
    $(".legendCircle1").hide(1000);
  })
  // .setClassToggle(".withdrawed", "ightblue")
  .addTo(controller);
  //scene3
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#scene3",
    triggerHook: 0.95
  })
  .on("enter", function(){
    d3.selectAll(".specified")
    .transition()
    .duration(500)
      .style("fill", deepblue);
    d3.select(".legend1")
      .transition()
      .duration(500)
      .text("因其他原因而退选");
    $(".legend2").show(1500);
    $(".legendCircle2").show(1500);

  })

  .on("leave", function(){
    d3.selectAll(".specified")
    .transition()
    .duration(500)
      .style("fill", lightblue);
    d3.select(".legend1")
      .transition()
      .duration(500)
      .text("退选");
    $(".legend2").hide(1000);
    $(".legendCircle2").hide(1000);
  })
  .addTo(controller);
  //radar
  var radarSetPin = new ScrollMagic.Scene({
    triggerElement: "#getWidthContainer",
    triggerHook: 0,
    duration: '950'
  })
  .setPin("#radarMain")
  .addTo(controller);
  var radarScene2 = new ScrollMagic.Scene({
    triggerElement: "#radarscene2",
    triggerHook: 0.9,
  })
  .on("enter", function(){
    d3.selectAll(".radarCircles")
    .transition()
    .duration(300)
      .style("opacity", "1");
    $("#radarlegend1").fadeIn(500);
    $("#radarlegend2").fadeIn(500);
    $("#radarlegend3").fadeIn(500);


  })

  .on("leave", function(){
    d3.selectAll(".radarCircles")
    .transition()
    .duration(300)
      .style("opacity", "0");
      $("#radarlegend1").fadeOut(500);
      $("#radarlegend2").fadeOut(500);
      $("#radarlegend3").fadeOut(500);
  })
  .addTo(controller);
  //setPinCover
  var introductionHeight = document.all.introduction.offsetHeight+150;
  var setPinCover = new ScrollMagic.Scene({
    triggerElement: "#cover",
    triggerHook: 0,
    duration: introductionHeight,
  })
  .setPin("#cover")
  .addTo(controller);
  //letCoverOverlay
  var letCoverOverlay = new ScrollMagic.Scene({
    triggerElement: "#introduction",
    triggerHook: 0.95,
  })
  .on("enter", function(){
    $(".bg-img-1").addClass("blur");
    $("#overlay-intro").fadeIn(500);
    $(".title-all").fadeOut(500);
    $("#overlay-all").fadeOut(500);
    $(".navigation").fadeIn(500);

  })

  .on("leave", function(){
    $(".bg-img-1").removeClass("blur");
    $(".overlay-deeper").fadeOut(500);
    $(".title-all").fadeIn(500);
    $("#overlay-all").fadeIn(500);
    $(".navigation").fadeOut(500);

  })
  .addTo(controller);
  //setPinChapter1
  var chapter1Height = document.all.chapter1.offsetHeight+4000;
  var setPinChapter1 = new ScrollMagic.Scene({
    triggerElement: "#chapter1-cover",
    triggerHook: 0,
    duration: chapter1Height,//真正控制每个章节的高度
  })
  .setPin("#chapter1-cover")
  .on("enter", function(){
    $(".navigation").fadeOut(500);

  })
  .addTo(controller);
  //letChapter1Overlay
  var letChapter1Overlay = new ScrollMagic.Scene({
    triggerElement: "#chapter1",
    triggerHook: 0.8,

  })
  .on("enter", function(){
        $(".bg-img-2").addClass("blur");
    $("#overlay-chapter1").fadeIn(500);
    $("#title-chapter1").fadeOut(500);
    $("#go-with-title-1").fadeOut(500);
    $(".navigation").fadeIn(500);

  })

  .on("leave", function(){
        $(".bg-img-2").removeClass("blur");
    $("#overlay-chapter1").fadeOut(500);
    $("#title-chapter1").fadeIn(500);
    $("#go-with-title-1").fadeIn(500);
    $(".navigation").fadeOut(500);

  })
  .addTo(controller);
  //setPinChapter1Img
  var setPinChapter1Img = new ScrollMagic.Scene({
    triggerElement: "#chapter1-2-image-wrapper",
    triggerHook: 0,
    duration: '4900',
  })
  .setPin("#chapter1-2-image-wrapper")
  .addTo(controller);
  //chapter1
  var chapter1ComeOut = new ScrollMagic.Scene({
    triggerElement: "#chapter-1-2",
    triggerHook: 0.7,
    // duration: '500'
  })
  .on("enter", function(){
    $("#chapter1-img1").fadeIn(700);
  })
  .on("leave", function(){
    $("#chapter1-img1").fadeOut(700);
  })
  .addTo(controller);

  //chapter1Scene1
  var chapter1Scene1 = new ScrollMagic.Scene({
    triggerElement: "#chapter1-scene1",
    triggerHook: 0.1,
    // duration: '500'
  })
  .on("enter", function(){
    $("#chapter1-img1").fadeOut(700);
    $("#chapter1-img2").fadeIn(700);
  })
  .on("leave", function(){
    $("#chapter1-img1").fadeIn(700);
    $("#chapter1-img2").fadeOut(700);

  })
  .addTo(controller);
  //chapter1Scene2
  var chapter1Scene2 = new ScrollMagic.Scene({
    triggerElement: "#chapter1-scene2",
    triggerHook: 0.1,
    // duration: '500'
  })
  .on("enter", function(){
    $("#chapter1-img2").fadeOut(700);
    $("#chapter1-img3").fadeIn(700);
  })
  .on("leave", function(){
    $("#chapter1-img2").fadeIn(700);
    $("#chapter1-img3").fadeOut(700);

  })
    .addTo(controller);
  //chapter1Scene3
  var chapter1Scene3 = new ScrollMagic.Scene({
    triggerElement: "#chapter1-scene3",
    triggerHook: 0.1,
    // duration: '500'
  })
  .on("enter", function(){
    $("#chapter1-img3").hide();
    $("#chapter1-img2").show();
    $("#chapter1-img4").delay(1200).fadeIn(2000);
  })
  .on("leave", function(){
    $("#chapter1-img3").fadeIn(700);
    $("#chapter1-img2").hide();
    $("#chapter1-img4").fadeOut(700);
  })
    .addTo(controller);
  //chapter1Scene4
  var chapter1Scene4 = new ScrollMagic.Scene({
    triggerElement: "#chapter1-scene4",
    triggerHook: 0.1,
    // duration: '500'
  })
  .on("enter", function(){
    $("#chapter1-img2").hide();
    $("#chapter1-img4").fadeOut(700);
    $("#chapter1-img5").fadeIn(700);
  })
  .on("leave", function(){
    $("#chapter1-img4").fadeIn(700);
    $("#chapter1-img5").fadeOut(700);
  })
    .addTo(controller);
  //setPinChapter2
  var chapter2Height = document.all.chapter2.offsetHeight+150;
  var setPinChapter2= new ScrollMagic.Scene({
    triggerElement: "#chapter2-cover",
    triggerHook: 0,
    duration: chapter2Height,//真正控制每个章节的高度
  })
  .setPin("#chapter2-cover")
  .on("enter", function(){
    $(".navigation").fadeOut(500);

  })
  .addTo(controller);
  //letChapter2Overlay
  var letChapter2Overlay = new ScrollMagic.Scene({
    triggerElement: "#chapter2",
    triggerHook: 0.8,

  })
  .on("enter", function(){
        $(".bg-img-3").addClass("blur");
    $("#overlay-chapter2").fadeIn(500);
    $("#title-chapter2").fadeOut(500);
    $("#go-with-title-2").fadeOut(500);
    $(".navigation").fadeIn(500);

  })

  .on("leave", function(){
        $(".bg-img-3").removeClass("blur");
    $("#overlay-chapter2").fadeOut(500);
    $("#title-chapter2").fadeIn(500);
    $("#go-with-title-2").fadeIn(500);
    $(".navigation").fadeOut(500);

  })
  .addTo(controller);
  //setPinChapter3
  var chapter3Height = document.all.chapter3.offsetHeight+130;
  var setPinChapter3= new ScrollMagic.Scene({
    triggerElement: "#chapter3-cover",
    triggerHook: 0,
    duration: chapter3Height,//真正控制每个chapter3Height章节的高度
  })
  .setPin("#chapter3-cover")
  .on("enter", function(){
    $(".navigation").fadeOut(500);

  })
  .addTo(controller);
  //letChapter3Overlay
  var letChapter3Overlay = new ScrollMagic.Scene({
    triggerElement: "#chapter3",
    triggerHook: 0.8,

  })
  .on("enter", function(){
        $(".bg-img-4").addClass("blur");
    $("#overlay-chapter3").fadeIn(500);
    $("#title-chapter3").fadeOut(500);
    $("#go-with-title-3").fadeOut(500);
    $(".navigation").fadeIn(500);

  })

  .on("leave", function(){
        $(".bg-img-4").removeClass("blur");
    $("#overlay-chapter3").fadeOut(500);
    $("#title-chapter3").fadeIn(500);
    $("#go-with-title-3").fadeIn(500);
    $(".navigation").fadeOut(500);

  })
  .addTo(controller);
});
var highlightFlag = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var whiteHighlight = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
$(document).scroll(function(){

    var top = $(document).scrollTop();
    if(top>$(window).height()+100){

    }

    /* 高亮说明文字 */
    for(var i=0; i<highlightFlag.length; i++){

      var highlight = $(document).find(".highlight").eq(i).offset().top
      if(top>highlight-$(window).height()*0.8){
        if(highlightFlag[i]==0){
          $(document).find(".highlight").eq(i).animate({backgroundColor:'rgba(254,208,81,0.4)'},500)
          highlightFlag[i]=1;
        }
      }
    }




});
