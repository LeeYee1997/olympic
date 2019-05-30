var myChart1 = echarts.init(document.getElementById('radar1'),null,{renderer: "svg"});

option1 = {
    title: {
        text: '2008',
    },
     tooltip: {
       formatter: "北京：142.6亿</br>多伦多：96.8亿</br>巴黎：20.4亿</br>伊斯坦布尔：5.3亿",
        backgroundColor:"rgba(255,255,255,0.7)",
        confine:true,
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
                        radius:"65%",
        name: {
            show: false,
            textStyle: {
                color: '#000',
                // backgroundColor: '#fff',
                borderRadius: 2,
                // padding: [0.2, 0.2]
           }
        },
        indicator: [
           { name: '北京', max: 15000},
           { name: '巴黎', max: 15000},
           { name: '伊斯坦布尔', max: 15000},
           { name: '多伦多', max: 15000},
        ]

    },
    series: [{
        type: 'radar',
        data : [
            {
                value : [14256.6, 2038, 525, 9679.5],
            }
        ]
    }]

};
myChart1.setOption(option1);
var myChart2 = echarts.init(document.getElementById('radar2'),null,{renderer: "svg"});

option2 = {
    title: {
        text: '2010'
    },
     tooltip: {
       formatter: "平昌：34亿</br>温哥华：9.3亿</br>萨尔茨堡：6.0亿",
        backgroundColor:"rgba(255,255,255,0.7)",
                confine:true,
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
                                radius:"65%",
        name: {
                      show: false,
            textStyle: {
                color: '#000',
                // backgroundColor: '#fff',
                borderRadius: 2,
                // padding: [2, 5]
           }
        },
        indicator: [
           { name: '平昌', max: 15000},
           { name: '温哥华', max: 15000},
           { name: '萨尔茨堡', max: 15000},
        ]
    },
    series: [{
        type: 'radar',
        data : [
            {
                value : [3400, 929.5, 599],
            }
        ]
    }]
};

myChart2.setOption(option2);



 var myChart3 = echarts.init(document.getElementById('radar3'),null,{renderer: "svg"});

option3 = {
    title: {
        text: '2012'
    },
     tooltip: {
       formatter: "伦敦：158.0亿</br>莫斯科：100.0亿</br>纽约：76.0亿</br>巴黎：62.0亿",
        backgroundColor:"rgba(255,255,255,0.7)",
                confine:true,
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
                                radius:"65%",
        name: {
                      show: false,
            textStyle: {
                color: '#000',
                // backgroundColor: '#fff',
                borderRadius: 2,
                // padding: [2, 5]
           }
        },
        indicator: [
           { name: '伦敦', max: 15000},
           { name: '巴黎', max: 15000},
           { name: '莫斯科', max: 15000},
           { name: '纽约', max: 15000},
        ]
    },
    series: [{
        type: 'radar',
        data : [
            {
                value : [15800, 6200, 10000, 7600],
            }
        ]
    }]
};

myChart3.setOption(option3);



 var myChart4 = echarts.init(document.getElementById('radar4'),null,{renderer: "svg"});

option4 = {
    title: {
        text: '2014'
    },
     tooltip: {
       formatter: "索契：88.6亿</br>平昌：71.3亿</br>萨尔茨堡：23.6亿",
        backgroundColor:"rgba(255,255,255,0.7)",
                confine:true,
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
                                radius:"65%",
        name: {
                      show: false,
            textStyle: {
                color: '#000',
                // backgroundColor: '#fff',
                borderRadius: 2,
                // padding: [2, 5]
           }
        },
        indicator: [
           { name: '索契', max: 15000},
           { name: '萨尔茨堡', max: 15000},
           { name: '平昌', max: 15000},
        ]
    },
    series: [{
        type: 'radar',
        data : [
            {
                value : [8855, 2357, 7125],
            }
        ]
    }]
};

myChart4.setOption(option4);



 var myChart5 = echarts.init(document.getElementById('radar5'),null,{renderer: "svg"});

option5 = {
    title: {
        text: '2016'
    },
     tooltip: {
       formatter: "里约热内卢：111.0亿</br>马德里：34.4亿</br>东京：30.9亿</br>芝加哥：10.3亿",
        backgroundColor:"rgba(255,255,255,0.7)",
                confine:true,
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
                                radius:"65%",
        name: {
                      show: false,
            textStyle: {
                color: '#000',
                // backgroundColor: '#fff',
                borderRadius: 2,
                // padding: [2, 5]
           }
        },
        indicator: [
           { name: '里约热内卢', max: 15000},
           { name: '芝加哥', max: 15000},
           { name: '东京', max: 15000},
           { name: '马德里', max: 15000},
        ]
    },
    series: [{
        type: 'radar',
        data : [
            {
                value : [11100, 1030, 3090, 3440],
            }
        ]
    }]
};

myChart5.setOption(option5);

var myChart6 = echarts.init(document.getElementById('radar6'),null,{renderer: "svg"});

option6 = {
    title: {
        text: '2018'
    },
     tooltip: {
       formatter: "平昌：63.0亿</br>安纳西：25.0亿</br>慕尼黑：18.6亿",
        backgroundColor:"rgba(255,255,255,0.7)",
                confine:true,
     },
    color:['#265473'],
    radar: {
      radius:"65%",

        // shape: 'circle',
                                radius:"65%",
        name: {
                      show: false,
            textStyle: {
                color: '#000',
                // backgroundColor: '#fff',
                borderRadius: 2,
                // padding: [2, 5]
           }
        },
        indicator: [
           { name: '平昌', max: 15000},
           { name: '安纳西', max: 15000},
           { name: '慕尼黑', max: 15000},
        ]
    },
    series: [{
        type: 'radar',
        data : [
            {
                value : [6300, 2500, 1860],
            }
        ]
    }]
};

myChart6.setOption(option6);

const lightblue = "rgba(105,188,244,0.7)";
const deepblue =  "#265473";

var width1 = document.all.radar1.offsetWidth;;
var height1 = document.all.radar1.offsetHeight;

var svg1 = d3.select("#radar1")
            .append("svg") // 在body里建一个svg,即<svg>
            .attr("width", width1)
            .attr("height", height1)
            .style("position","absolute")
            .style("left", "0")
            .style("z-index","-9999")
            .style("top", "0");

var xScale1 = d3.scaleLinear().range([ 0, width1]);
var yScale1 = d3.scaleLinear().range([ height1, 0 ]);

 xScale1.domain([0,100]);
 yScale1.domain([0,100]);

 var circle1 = svg1.append("circle")
 .attr("cx", xScale1(50))
 .attr("cy", yScale1(83))
 .attr("r", 8)
 .attr("opacity", "0")
 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");

  svg1.append("text")
    .attr("class", "radar-city")
    .attr("transform", "translate(" + xScale1(42)+ " ," + yScale1(91) + ")")
    .style("text-anchor", "left")
    .attr("dy", 0)
    .text("北京");

    svg1.append("text")
      .attr("class", "radar-city")
      .attr("transform", "translate(" + xScale1(0)+ " ," + yScale1(40) + ")")
      .style("text-anchor", "left")
      .attr("dy", 0)
      .text("巴黎");
      svg1.append("text")
        .attr("class", "radar-city")
        .attr("transform", "translate(" + xScale1(30)+ " ," + yScale1(6) + ")")
        .style("text-anchor", "left")
        .attr("dy", 0)
        .text("伊斯坦布尔");
      svg1.append("text")
        .attr("class", "radar-city")
        .attr("transform", "translate(" + xScale1(74)+ " ," + yScale1(40) + ")")
        .style("text-anchor", "left")
        .attr("dy", 0)
        .text("多伦多");
var width2 = document.all.radar2.offsetWidth;;
var height2 = document.all.radar2.offsetHeight;

var svg2 = d3.select("#radar2")
            .append("svg") // 在body里建一个svg,即<svg>
            .attr("width", width2)
            .attr("height", height2)
            .style("position","absolute")
            .style("z-index","-9999")
            .style("left", "0")
            .style("top", "0");

var xScale2 = d3.scaleLinear().range([ 0, width2]);
var yScale2 = d3.scaleLinear().range([ height2, 0 ]);

 xScale2.domain([0,100]);
 yScale2.domain([0,100]);

 var circle2 = svg2.append("circle")
 .attr("cx", xScale2(46))
 .attr("cy", yScale2(46))
 .attr("r", 8)
 .attr("opacity", "0")

 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");
  svg2.append("text")
    .attr("class", "radar-city")
    .attr("transform", "translate(" + xScale1(42)+ " ," + yScale1(91) + ")")
    .style("text-anchor", "left")
    .attr("dy", 0)
    .text("平昌");

    svg2.append("text")
      .attr("class", "radar-city")
      .attr("transform", "translate(" + xScale1(0)+ " ," + yScale1(23) + ")")
      .style("text-anchor", "left")
      .attr("dy", 0)
      .text("温哥华");
      svg2.append("text")
        .attr("class", "radar-city")
        .attr("transform", "translate(" + xScale1(58)+ " ," + yScale1(23) + ")")
        .style("text-anchor", "left")
        .attr("dy", 0)
        .text("萨尔茨堡");

var width3 = document.all.radar3.offsetWidth;;
var height3 = document.all.radar3.offsetHeight;

var svg3 = d3.select("#radar3")
            .append("svg") // 在body里建一个svg,即<svg>
            .attr("width", width3)
            .attr("height", height3)
            .style("position","absolute")
            .style("left", "0")
            .style("z-index","-9999")
            .style("top", "0");

var xScale3 = d3.scaleLinear().range([ 0, width3]);
var yScale3 = d3.scaleLinear().range([ height3, 0 ]);

 xScale3.domain([0,100]);
 yScale3.domain([0,100]);

 var circle3 = svg3.append("circle")
 .attr("cx", xScale3(50))
 .attr("cy", yScale3(86))
 .attr("r", 8)
 .attr("opacity", "0")

 .attr("fill","rgba(238,182,53,0.9)")
 .attr("class", "radarCircles");

 svg3.append("text")
   .attr("class", "radar-city")
   .attr("transform", "translate(" + xScale1(42)+ " ," + yScale1(91) + ")")
   .style("text-anchor", "left")
   .attr("dy", 0)
   .text("伦敦");

   svg3.append("text")
     .attr("class", "radar-city")
     .attr("transform", "translate(" + xScale1(0)+ " ," + yScale1(40) + ")")
     .style("text-anchor", "left")
     .attr("dy", 0)
     .text("巴黎");
     svg3.append("text")
       .attr("class", "radar-city")
       .attr("transform", "translate(" + xScale1(40)+ " ," + yScale1(6) + ")")
       .style("text-anchor", "left")
       .attr("dy", 0)
       .text("莫斯科");
     svg3.append("text")
       .attr("class", "radar-city")
       .attr("transform", "translate(" + xScale1(84)+ " ," + yScale1(40) + ")")
       .style("text-anchor", "left")
       .attr("dy", 0)
       .text("纽约");

var width4 = document.all.radar4.offsetWidth;;
var height4 = document.all.radar4.offsetHeight;

var svg4 = d3.select("#radar4")
            .append("svg") // 在body里建一个svg,即<svg>
            .attr("width", width4)
            .attr("height", height4)
            .style("position","absolute")
            .style("z-index","-9999")
            .style("left", "0")
            .style("top", "0");

var xScale4 = d3.scaleLinear().range([ 0, width4]);
var yScale4 = d3.scaleLinear().range([ height4, 0 ]);

 xScale4.domain([0,100]);
 yScale4.domain([0,100]);

 var circle4 = svg4.append("circle")
 .attr("cx", xScale4(50))
 .attr("cy", yScale4(71))
 .attr("r", 8)
 .attr("opacity", "0")

 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");

  svg4.append("text")
    .attr("class", "radar-city")
    .attr("transform", "translate(" + xScale1(42)+ " ," + yScale1(91) + ")")
    .style("text-anchor", "left")
    .attr("dy", 0)
    .text("索契");

    svg4.append("text")
      .attr("class", "radar-city")
      .attr("transform", "translate(" + xScale1(0)+ " ," + yScale1(23) + ")")
      .style("text-anchor", "left")
      .attr("dy", 0)
      .text("萨尔茨堡");
      svg4.append("text")
        .attr("class", "radar-city")
        .attr("transform", "translate(" + xScale1(74)+ " ," + yScale1(23) + ")")
        .style("text-anchor", "left")
        .attr("dy", 0)
        .text("平昌");


var width5 = document.all.radar5.offsetWidth;;
var height5 = document.all.radar5.offsetHeight;

var svg5 = d3.select("#radar5")
            .append("svg") // 在body里建一个svg,即<svg>
            .attr("width", width5)
            .attr("height", height5)
            .style("position","absolute")
            .style("z-index","-9999")
            .style("left", "0")
            .style("top", "0");

var xScale5 = d3.scaleLinear().range([ 0, width5]);
var yScale5 = d3.scaleLinear().range([ height5, 0 ]);

 xScale5.domain([0,100]);
 yScale5.domain([0,100]);

 var circle5 = svg5.append("circle")
 .attr("cx", xScale4(50))
 .attr("cy", yScale4(76))
 .attr("r", 8)
 .attr("opacity", "0")

 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");

  svg5.append("text")
    .attr("class", "radar-city")
    .attr("transform", "translate(" + xScale1(32)+ " ," + yScale1(91) + ")")
    .style("text-anchor", "left")
    .attr("dy", 0)
    .text("里约热内卢");

    svg5.append("text")
      .attr("class", "radar-city")
      .attr("transform", "translate(" + xScale1(0)+ " ," + yScale1(40) + ")")
      .style("text-anchor", "left")
      .attr("dy", 0)
      .text("芝加哥");
      svg5.append("text")
        .attr("class", "radar-city")
        .attr("transform", "translate(" + xScale1(42)+ " ," + yScale1(6) + ")")
        .style("text-anchor", "left")
        .attr("dy", 0)
        .text("东京");
      svg5.append("text")
        .attr("class", "radar-city")
        .attr("transform", "translate(" + xScale1(74)+ " ," + yScale1(40) + ")")
        .style("text-anchor", "left")
        .attr("dy", 0)
        .text("马德里");

var width6 = document.all.radar6.offsetWidth;;
var height6 = document.all.radar6.offsetHeight;

var svg6 = d3.select("#radar6")
            .append("svg") // 在body里建一个svg,即<svg>
            .attr("width", width6)
            .attr("height", height6)
            .style("position","absolute")
            .style("z-index","-9999")
            .style("left", "0")
            .style("top", "0");

var xScale6 = d3.scaleLinear().range([ 0, width6]);
var yScale6 = d3.scaleLinear().range([ height6, 0 ]);

 xScale6.domain([0,100]);
 yScale6.domain([0,100]);

 var circle6 = svg6.append("circle")
 .attr("cx", xScale6(50))
 .attr("cy", yScale6(65))
 .attr("r", 8)
 .attr("opacity", "0")

 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");

  svg6.append("text")
    .attr("class", "radar-city")
    .attr("transform", "translate(" + xScale1(42)+ " ," + yScale1(91) + ")")
    .style("text-anchor", "left")
    .attr("dy", 0)
    .text("平昌");

    svg6.append("text")
      .attr("class", "radar-city")
      .attr("transform", "translate(" + xScale1(0)+ " ," + yScale1(23) + ")")
      .style("text-anchor", "left")
      .attr("dy", 0)
      .text("安纳西");
      svg6.append("text")
        .attr("class", "radar-city")
        .attr("transform", "translate(" + xScale1(69)+ " ," + yScale1(23) + ")")
        .style("text-anchor", "left")
        .attr("dy", 0)
        .text("慕尼黑");

  // svg6.append("text")
  //   .attr("transform", "translate(" + xScale6(0)+ " ," + yScale6(15) + ")")
  //   .style("text-anchor", "left")
  //   .attr("dy", 0)
  //   .style("fill", "rgb(131, 131, 131)")
  //   .text("数据来源：国际奥林匹克委员会官方网站");
  //   svg6.append("text")
  //     .attr("transform", "translate(" + xScale6(22)+ " ," + yScale6(5) + ")")
  //     .style("text-anchor", "left")
  //     .attr("dy", 0)
  //     .style("fill", "rgb(131, 131, 131)")
  //     .text("——历届奥运会各申办城市申奥文件");
