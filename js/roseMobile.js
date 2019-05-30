var overcost = echarts.init(document.getElementById('overcost'),null,{renderer: "svg"});
//蓝色的大花

overcost_option1 = {
    // title : {
    //     text: '南丁格尔玫瑰图',
    //     subtext: '纯属虚构',
    //     x:'center'
    // },
    tooltip : {
        trigger: 'item',
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
        formatter: "{b} 超支{c} %"
    },
    animation: false,
    // legend: {
    //     x : 'center',
    //     y : 'bottom',
    //     data:['rose0','rose1','2000年悉尼奥运会','2002年盐湖城冬奥会','2004年雅典奥运会','2006年都灵冬奥会','2010年温哥华冬奥会','2012年伦敦奥运会','2014年索契冬奥会','rose9']
    // },
    color:['#f7af31','#f9d58c','#ff9933','#d19315','#63c1ea','#1a9ce5','#3784af'],
    calculable : true,
    series : [
        {
            name:'面积模式',
            type:'pie',
            radius : [40, 270],
            center : ['23%', '65%'],
            roseType : 'area',
            label: {
                position: 'inside',
                // normal: {
                //     show: true
                // },
                // emphasis: {
                //     show: false
                // }
            },
            // lableLine: {
            //     normal: {
            //         show: false
            //     },
            //     emphasis: {
            //         show: false
            //     }
            // },
            data:[
                {value: 43, name: ' 伦敦'},
                {value: 178, name: ' 索契'},
                // {value: 0.44, name: ' rose0'},
                // {value: 1.11, name: ' rose1'},
                {value: 56, name: ' 悉尼'},
                {value: 28, name: ' 盐湖城'},
                {value: 29, name: ' 雅典'},
                {value: 20, name: ' 都灵'},
                {value: 13, name: ' 温哥华'}
            ]
        }
     ]
};

overcost.setOption(overcost_option1);
