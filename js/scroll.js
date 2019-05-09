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
    duration: '1050'
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
      .attr("opacity", "1");
    $("#radarlegend1").fadeIn(500);
    $("#radarlegend2").fadeIn(500);
    $("#radarlegend3").fadeIn(500);


  })

  .on("leave", function(){
    d3.selectAll(".radarCircles")
    .transition()
    .duration(300)
      .attr("opacity", "0");
      $("#radarlegend1").fadeOut(500);
      $("#radarlegend2").fadeOut(500);
      $("#radarlegend3").fadeOut(500);
  })
  .addTo(controller);
  //setPinCover
  var setPinCover = new ScrollMagic.Scene({
    triggerElement: "#cover",
    triggerHook: 0,
    duration: '2900',
  })
  .setPin("#cover")
  .addTo(controller);
  //letCoverOverlay
  var letCoverOverlay = new ScrollMagic.Scene({
    triggerElement: "#introduction",
    triggerHook: 0.95,
  })
  .on("enter", function(){
    $("#overlay-intro").fadeIn(1000);
    $(".title-all").fadeOut(1000);
    $("#overlay-all").fadeOut(1000);
    $(".navigation").fadeIn(1000);

  })

  .on("leave", function(){
    $(".overlay-deeper").fadeOut(1000);
    $(".title-all").fadeIn(1000);
    $("#overlay-all").fadeIn(1000);
    $(".navigation").fadeOut(1000);

  })
  .addTo(controller);
  //setPinChapter1
  var setPinChapter1 = new ScrollMagic.Scene({
    triggerElement: "#chapter1-cover",
    triggerHook: 0,
    duration: '5300',//真正控制每个章节的高度
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
    $("#overlay-chapter1").fadeIn(1000);
    $("#title-chapter1").fadeOut(1000);
    $("#go-with-title-1").fadeOut(1000);
    $(".navigation").fadeIn(1000);

  })

  .on("leave", function(){
    $("#overlay-chapter1").fadeOut(1000);
    $("#title-chapter1").fadeIn(1000);
    $("#go-with-title-1").fadeIn(1000);
    $(".navigation").fadeOut(1000);

  })
  .addTo(controller);
  //setPinChapter1Img
  var setPinChapter1Img = new ScrollMagic.Scene({
    triggerElement: "#chapter1-2-image-wrapper",
    triggerHook: 0,
    duration: '4300',
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
    $("#chapter1-img3").fadeOut(700);
    $("#chapter1-img2").show();
    $("#chapter1-img4").delay(1000).fadeIn(2000);
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
  var setPinChapter2= new ScrollMagic.Scene({
    triggerElement: "#chapter2-cover",
    triggerHook: 0,
    duration: '4900',//真正控制每个章节的高度
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
    $("#overlay-chapter2").fadeIn(1000);
    $("#title-chapter2").fadeOut(1000);
    $("#go-with-title-2").fadeOut(1000);
    $(".navigation").fadeIn(1000);

  })

  .on("leave", function(){
    $("#overlay-chapter2").fadeOut(1000);
    $("#title-chapter2").fadeIn(1000);
    $("#go-with-title-2").fadeIn(1000);
    $(".navigation").fadeOut(1000);

  })
  .addTo(controller);
  //setPinChapter3
  var setPinChapter3= new ScrollMagic.Scene({
    triggerElement: "#chapter3-cover",
    triggerHook: 0,
    duration: '5430',//真正控制每个章节的高度
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
    $("#overlay-chapter3").fadeIn(1000);
    $("#title-chapter3").fadeOut(1000);
    $("#go-with-title-3").fadeOut(1000);
    $(".navigation").fadeIn(1000);

  })

  .on("leave", function(){
    $("#overlay-chapter3").fadeOut(1000);
    $("#title-chapter3").fadeIn(1000);
    $("#go-with-title-3").fadeIn(1000);
    $(".navigation").fadeOut(1000);

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
          $(document).find(".highlight").eq(i).animate({backgroundColor:'rgba(254,208,81,0.4)'},1000)
          highlightFlag[i]=1;
        }
      }
    }
    for(var i=0; i<whiteHighlight.length; i++){

      var wHighlight = $(document).find(".whitehighlight").eq(i).offset().top
      if(top>wHighlight-$(window).height()*0.8){
        if(whiteHighlight[i]==0){
          $(document).find(".whitehighlight").eq(i).animate({backgroundColor:'rgba(255,255,255,0.5)'},1000)
          whiteHighlight[i]=1;
        }
      }
    }



});
