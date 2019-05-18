// It is better to use the object style with margin.top, margin.right, etc.
// 准备画布svg
$(function(){
const lightblue = "rgba(105,188,244,0.7)";
const deepblue =  "#265473";
const grey = "#bbbbbb";
var fullWidth = window.innerWidth-20;
var fullHeight = 650;
var margin = {top:220, right:100, bottom:50, left:200};  //Top, right, bottom, left

var width = fullWidth - margin.left - margin.right;
var height = fullHeight - margin.top - margin.bottom;

var svg = d3.select("#withdraw")
      .append("svg") // 在body里建一个svg,即<svg>
      .attr("width", fullWidth)
      .attr("height", fullHeight)
      .append("g") // 在svg上加一个group,即<g>
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .attr("width", width)
      .attr("height", height);


// 比例尺
// scaleLinear():告诉d3要放进去的是线性数据
// range():输出范围，在此是一个长度
var xScale = d3.scaleLinear().range([ 0, width]);
var yScale = d3.scaleLinear().range([ height, 0 ]);
//因为y轴的0在最下面，而(0,0)在左上角还记得吗？，因此要[height,0]


//  轴 API https://github.com/d3/d3-axis
//  axisBottom：axis with tick bottom-oriented，建立刻度线向下的轴，用xScale这个比例尺，保留15个tick(刻度线)
var xAxis = d3.axisTop(xScale).ticks(15);



  // add a tooltip to body - not to the svg itself!
    var myTooltip = d3.select("body")
                    .append("div")
                    .attr("class", "myTooltip");

    d3.csv("withdrawData.csv", function(error, data) {

        if (error) throw error;

        // 完善比例尺的domain: 输入值域
  // d3.extent: 我在给你一个范围
//        xScale.domain(
    // d3.extent(data, function(d) {
    // 	return +d.GDPgrowth;
    // }));

       xScale.domain([0,15]);

  yScale.domain(
    d3.extent(data, function(d) {
      return +d.Unemployment;
    }));
    svg.append("text")
      .attr("class", "withdraw-title")
      .attr("transform", "translate(" + xScale(0)+ " ," + -120 + ")")
      .style("text-anchor", "left")
      .attr("dy", 0)
      .text("历届奥运会申办情况");
    svg.append("text")
      // .attr("class", "data-source")
      .attr("transform", "translate(" + xScale(12)+ " ," + 340 + ")")
      .style("text-anchor", "left")
      .attr("dy", 0)
      .style("fill", "rgb(131, 131, 131)")
      .style("font-size", "14px")
      .text("数据来源：公开数据整理");
  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + -60 + " ," + 60+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("入围");

    svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + -60 + " ," + 80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("最终候选名单");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + -60 + " ," + 220+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("未入围");

    // svg.append("text")
    // .attr("class", "xlabel")
    // .attr("transform", "translate(" + -60 + " ," + 240+ ")")
    // .style("text-anchor", "middle")
    // .attr("dy", 0)
    // .text("最终候选名单");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(0.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2000年");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(0.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("悉尼");

        svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(1.5)+ " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2002");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(1.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("盐湖城");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(2.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2004");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(2.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("雅典");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(3.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2006");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(3.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("都灵");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(4.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2008");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(4.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("北京");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" +xScale(5.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2010");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(5.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("温哥华");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(6.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2012");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(6.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("伦敦");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(7.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2014");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(7.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("索契");

    svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(8.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2016");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(8.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("里约");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(9.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2018");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(9.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("平昌");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(10.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2020");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(10.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("东京");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(11.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2022");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(11.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("北京");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(12.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2024");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(12.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("巴黎");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(13.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2026");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(13.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("待定");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(14.5) + " ," + -80+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("2028");

  svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + xScale(14.5) + " ," + -55+ ")")
    .style("text-anchor", "middle")
    .attr("dy", 0)
    .text("洛杉矶");



  // 在svg的g里建一堆circle，用上堂课学过的给数据的方式：select...data...enter...append...
  var circles = svg.selectAll("circle")
          .data(data)
          .enter()
          .append("circle");

  // 设置circle们的属性
  circles.attr("cx", function(d) {
      return xScale(+d.GDPgrowth); //把横轴数据，通过横轴比例尺xScale，得出每个circle应该对应的横轴位置
    })
    .attr("cy", function(d) {
      return yScale(+d.Unemployment);
    })
    .attr("r", 10)
    .attr("class",function(d){
      if (d.figure === "a") {
        if (d.Unemployment == "-40") {
          return "legendCircle1";
        }
        else {
          return "withdrawed";
        }
      }
      if (d.figure === "b") {
        if (d.Unemployment == "-40") {
          return "legendCircle2";
        }
        else {
          return "specified";
        }
      }
      if (d.figure === "") {
        return "unchanged";
      }
    })

    circles.attr("fill",function(d){if (d.Reason === "入围" || d.Reason === "成功申办") {
          return "#eeb635"
            }
            if (d.Reason === "落选") {
              if (d.Unemployment == -40) {


                if (d.figure === "b") {
                  return deepblue;
                }
                else {
                  return lightblue;
                }
              }
              else {
                return grey;
              }
            }
            })

  // 在svg上建立x、y轴
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + ( height -235 )  + ")")
    .call(xAxis);

        var text2 = svg.append("text")
        .text("因政府或民众不支持而退选")
        .attr("x", xScale(4.3))
        .attr("y",385)
        .attr("class","legend2")

        var text3 = svg.append("text")
        .text("退选")
        .attr("x",xScale(8))
        .attr("y",385)
        .attr("class","legend1")

// Adding all the mouse events for the tooltips!
        circles
            .on("mouseover", mouseoverFunc) // see below...
            .on("mousemove", mousemoveFunc) // see below...
            .on("mouseout", mouseoutFunc); // see below...

    });

    // Functions for tooltips.  别忘了CSS！

    // function mouseoverFunc(d) {
    //     // console.log(d);
    //     tooltip
    //         .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
    //         .html("<p>" + d.Country +"'s life satisfaction score is " + d.GDPgrowth + ",<br> and " + d.Unemployment + "% report good health</p>");

    //     // d3.select(this)//悬停在上面的元素
    //     //     .attr("r", 8);
    // }

    function mouseoverFunc(d) {
        if (d.Country === "00_Italy_Milan") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>意大利米兰由于“意大利城市的形象</br>被政治腐败所玷污”而退选</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

         if (d.Country === "00_Brazil_Brasilia") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>巴西的巴西利亚在国际奥委会检查后退选，</br>该检查表明该市有不合标准的设施</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

         if (d.Country === "00_Uzbekistan_Tashkent") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>乌兹别克斯坦的塔什干为了获得世界对</br>该国存在和新独立的认可而竞标奥运会，之后竞标被撤回</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

         if (d.Country === "10_Switzerland_Bern") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>瑞士伯尔尼在举行奥运会的费用公布后，</br>公投结果出现负面而退出</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

        if (d.Country === "16_United_Arab_Emirates_Dubai") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>阿联酋迪拜投标在截止日期前未提交</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

        if (d.Country === "20_Italy_Rome") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>意大利罗马由于缺乏意大利政府</br>的支持而撤回投标</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

        if (d.Country === "22_Norway_Oslo") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>挪威奥斯陆在国际奥委会提出</br>大量要求导致挪威丑闻之后退选</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

        if (d.Country === "22_Poland_Krakow") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>波兰的克拉科夫在出现负面的公投结果后退选</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

        if (d.Country === "22_Ukraine_Lviv") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>乌克兰利沃夫：国际奥委会宣布利沃夫</br>“将注意力转向2026年奥运会申办，而不是继续申请2022年”，</br>因此撤回申请。 因为2013年的“乌克兰危机”</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

        if (d.Country === "22_Sweden_Stockholm") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>瑞典斯德哥尔摩由于缺乏政治支持而撤回申请</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

        if (d.Country === "24_Germany_Hamburg") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>柏林汉堡在出现负面的公投结果后退选</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }


         if (d.Country === "24_Italy_Rome") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>意大利罗马由于该国持续的财务困境，申请被撤回</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

         if (d.Country === "24_Hungary_Budapest") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>匈牙利布达佩斯在出现负面的公投结果后退选</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);
                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

         if (d.Country === "24_United_States_Boston") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>美国波士顿退选有利于洛杉矶的申办</p>");

        // d3.select(this)//悬停在上面的元素
        //     .attr("r", 10);

                        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

         if (d.Country === "26_Canada_Calgary") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>加拿大卡尔加里在2018年11月13日的</br>一次公投后，2018年11月19日退选</p>");



            d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

         if (d.Country === "26_Turkey_Erzurum") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>土耳其埃尔祖鲁姆由于缺乏运输，电信和机场而退选</p>");

//         d3.select(this)//悬停在上面的元素
//             // .attr("r", 10);
//             .transition()
//                         	.attr("r",24)
    // .attr("stroke", "steelblue")
    // .attr("stroke-width",2)
//             .attr("fill", "rgba(255,255,255,0)")
            d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

        if (d.Country === "26_Japan_Sapporo") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>日本札幌撤回申请，以有利于2030年的申办。</p>");

//         d3.select(this)//悬停在上面的元素
//             // .attr("r", 10);
//             .transition()
//                         	.attr("r",24)
    // .attr("stroke", "steelblue")
    // .attr("stroke-width",2)
//             .attr("fill", "rgba(255,255,255,0)")

            d3.select(this)//悬停在上面的元素
          .transition()
          .style("opacity", 0.4)
          .attr("r", 20);
        }

         if (d.Country === "26_Austria_Graz") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>奥地利格拉茨由于缺乏支持而退选</p>");

//         d3.select(this)//悬停在上面的元素
//         .transition()
//         .attr("r",24)
    // .attr("stroke", "steelblue")
    // .attr("stroke-width",2)
//             .attr("fill", "rgba(255,255,255,0)")
//         	// .attr("fill","orange")
//          //    .attr("r", 10);

                     d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);
        }

        if (d.Country === "26_Switzerland_Sion") {
        myTooltip
            .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
            .html("<p>瑞士锡永在公投之后退选</p>");

        d3.select(this)//悬停在上面的元素
          .transition()
    .style("opacity", 0.4)
            .attr("r", 20);

//         d3.select(this)//悬停在上面的元素
//         	.transition()
//         	.attr("r",24)
    // .attr("stroke", "steelblue")
    // .attr("stroke-width",2)
//             .attr("fill", "rgba(255,255,255,0)")
}
        if (d.figure === "") {
            myTooltip
          .style("display", null)
          .html("<p>"+d.CountryName + d.Reason+"</p>");
        }

        }



    function mousemoveFunc(d) {
    //     // console.log("events", window.event, d3.event);
    //       if (d.Country === "00_Italy_Milan" || d.Country === "00_Brazil_Brasilia" || d.Country === "00_Uzbekistan_Tashkent" || d.Country === "10_Switzerland_Bern" || d.Country === "16_United_Arab_Emirates_Dubai" || d.Country === "20_Italy_Rome" || d.Country === "22_Norway_Oslo" || d.Country === "22_Poland_Krakow" || d.Country === "22_Ukraine_Lviv" || d.Country === "22_Sweden_Stockholm" || d.Country === "24_Germany_Hamburg" || d.Country === "24_Italy_Rome" || d.Country === "24_Hungary_Budapest" || d.Country === "24_United_States_Boston" || d.Country === "26_Canada_Calgary" || d.Country === "26_Turkey_Erzurum" || d.Country === "26_Japan_Sapporo" || d.Country === "26_Austria_Graz" || d.Country === "26_Switzerland_Sion") {
    //     myTooltip
    //         .style("top", (d3.event.pageY - 10) + "px" )
    //         .style("left", (d3.event.pageX + 10) + "px");
    // }
    // else{
      myTooltip
            .style("top", (d3.event.pageY - 10) + "px" )
            .style("left", (d3.event.pageX + 10) + "px");
    // }
}

    function mouseoutFunc(d) {
        // if (d.Country === "00_Italy_Milan" || d.Country === "00_Brazil_Brasilia" || d.Country === "00_Uzbekistan_Tashkent" || d.Country === "10_Switzerland_Bern" || d.Country === "16_United_Arab_Emirates_Dubai" || d.Country === "20_Italy_Rome" || d.Country === "22_Norway_Oslo" || d.Country === "22_Poland_Krakow" || d.Country === "22_Ukraine_Lviv" || d.Country === "22_Sweden_Stockholm" || d.Country === "24_Germany_Hamburg" || d.Country === "24_Italy_Rome" || d.Country === "24_Hungary_Budapest" || d.Country === "24_United_States_Boston" || d.Country === "26_Canada_Calgary" || d.Country === "26_Turkey_Erzurum" || d.Country === "26_Japan_Sapporo" || d.Country === "26_Austria_Graz" || d.Country === "26_Switzerland_Sion") {
        myTooltip.style("display", "none");

    // }

    d3.selectAll("circle")
    .transition()
    // .attr("fill",function(d){if (+d.Unemployment > 0 ) {
    //     	return "#eeb635"
    //         }
    //         else if (d.figure ==="a"){
    //         		return "rgba(105,188,244,0.7)"
    //         }else if (d.figure ==="b"){
    //         		return "#265473"
    //         }else if (d.Country ==="legend1"){
    //         		return "#eeb635"
    //         }else{
    //         return "#e2e2e2"
    //         }})
      .style("opacity", 1)
      .attr("stroke-width",0)
        .attr("r", 10);
}
})
