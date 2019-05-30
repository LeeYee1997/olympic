var dom_sankey = document.getElementById("sankey");
var myChart_sankey = echarts.init(dom_sankey,null,{renderer:"svg"});


sankeyOption = {
    color: [

        '#265473', '#EEB635','#67879d', '#bdcbd5',
        '#f3cc71', '#fae9c2'

    ],
    borderColor: ["#000"],
    tooltip: {
        trigger: 'item',
        confine: true,

    },
    animation: true,
    series: [
        {
            type: 'sankey',
            left: '5%',
            bottom: '10%',
            focusNodeAdjacency: 'allEdges',
            draggable: false,
            data: [
            {
                        name: '2002年 盐湖城冬奥会'
                    },
        {
            name: '2006年 都灵冬奥会'
        },
        {
            name: '2010年 温哥华冬奥会'
        },
        {
            name: '2014年 索契冬奥会'
        },
        {
            name: '训练或比赛'
        },
        {
            name: '综合场馆或展会'
        },
        {
            name: '全民运动场所'
        },
        {
            name: '拆除或位移'
        }
            ],



            links: [
        {
            source: '2002年 盐湖城冬奥会',
            target: '综合场馆或展会',
            value: 0,
        }, {
            source: '2002年 盐湖城冬奥会',
            target: '训练或比赛',
            value: 3.5
        }, {
            source: '2002年 盐湖城冬奥会',
            target: '全民运动场所',
            value: 2.5
        }, {
            source: '2002年 盐湖城冬奥会',
            target: '拆除或位移',
            value: 0
        },


{
            source: '2006年 都灵冬奥会',
            target: '综合场馆或展会',
            value: 4.5
        }, {
            source: '2006年 都灵冬奥会',
            target: '训练或比赛',
            value: 1
        }, {
            source: '2006年 都灵冬奥会',
            target: '全民运动场所',
            value: 9.5
        }, {
            source: '2006年 都灵冬奥会',
            target: '拆除或位移',
            value: 0
        },

{
            source: '2010年 温哥华冬奥会',
            target: '综合场馆或展会',
            value: 3.5
        }, {
            source: '2010年 温哥华冬奥会',
            target: '训练或比赛',
            value: 3
        }, {
            source: '2010年 温哥华冬奥会',
            target: '全民运动场所',
            value: 3.5
        }, {
            source: '2002年 盐湖城冬奥会',
            target: '拆除或位移',
            value: 0
        },

{
            source: '2014年 索契冬奥会',
            target: '综合场馆或展会',
            value: 2
        }, {
            source: '2014年 索契冬奥会',
            target: '训练或比赛',
            value: 3
        }, {
            source: '2014年 索契冬奥会',
            target: '全民运动场所',
            value: 3
        }, {
            source: '2014年 索契冬奥会',
            target: '拆除或位移',
            value: 3
        },



            ],

            label: {
                position: 'right'
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.4,
                    opacity: 0.4
                }
            },

                        itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: '#aaa',

                    }
                }
        }
    ]
}


;
if (sankeyOption && typeof sankeyOption === "object") {
    myChart_sankey.setOption(sankeyOption, true);
}
