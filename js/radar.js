var myChart1 = echarts.init(document.getElementById('radar1'),null,{renderer: "svg"});

option1 = {
    title: {
        text: '2008',
    },
     tooltip: {
        formatter: "北京：14256.6</br>巴黎：2038</br>伊斯坦布尔：525</br>多伦多：9679.5",
        backgroundColor:"rgba(255,255,255,0.7)"
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
        name: {
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
        formatter: "平昌：3400</br>温哥华：929.5</br>萨尔茨堡：599",
        backgroundColor:"rgba(255,255,255,0.7)"
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
        name: {
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
        formatter: "伦敦：15800</br>巴黎：6200</br>莫斯科：10000</br>纽约：7600",
        backgroundColor:"rgba(255,255,255,0.7)"
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
        name: {
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
        formatter: "索契：8855</br>萨尔茨堡：2357</br>平昌：7125",
        backgroundColor:"rgba(255,255,255,0.7)"
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
        name: {
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
        formatter: "里约热内卢：11100</br>芝加哥：1030</br>东京：3090</br>马德里：3440",
        backgroundColor:"rgba(255,255,255,0.7)"
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
        name: {
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
        formatter: "平昌：$ 6300m</br>安纳西：2500</br>慕尼黑：1860",
        backgroundColor:"rgba(255,255,255,0.7)"
     },
    color:['#265473'],
    radar: {
        // shape: 'circle',
        name: {
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
 .attr("cy", yScale1(86))
 .attr("r", 10)
 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");


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
 .attr("cx", xScale2(48))
 .attr("cy", yScale2(49))
 .attr("r", 10)
 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");


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
 .attr("cy", yScale3(90))
 .attr("r", 10)
 .attr("fill","rgba(238,182,53,0.9)")
 .attr("class", "radarCircles");



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
 .attr("cy", yScale4(72))
 .attr("r", 10)
 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");


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
 .attr("cy", yScale4(78))
 .attr("r", 10)
 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");


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
 .attr("cy", yScale6(66))
 .attr("r", 10)
 .attr("fill","rgba(238,182,53,0.9)")
  .attr("class", "radarCircles");

  svg6.append("text")
    .attr("transform", "translate(" + xScale6(0)+ " ," + yScale6(15) + ")")
    .style("text-anchor", "left")
    .attr("dy", 0)
    .style("fill", "rgb(131, 131, 131)")
    .text("数据来源：国际奥林匹克委员会官方网站");
    svg6.append("text")
      .attr("transform", "translate(" + xScale6(22)+ " ," + yScale6(5) + ")")
      .style("text-anchor", "left")
      .attr("dy", 0)
      .style("fill", "rgb(131, 131, 131)")
      .text("——历届奥运会各申办城市申奥文件");
