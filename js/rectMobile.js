var width1 = document.all.rect.offsetWidth;;
        var height1 = document.all.rect.offsetHeight;

        var svg1 = d3.select("#rect")
                    .append("svg") // 在body里建一个svg,即<svg>
                    .attr("width", width1)
                    .attr("height", height1)
                    .style("position","absolute")
                    .style("left", "0")
                    // .style("z-index","-9999")
                    .style("top", "0");

        var xScale1 = d3.scaleLinear().range([ 0, width1]);
        var yScale1 = d3.scaleLinear().range([ height1, 0 ]);

         xScale1.domain([0,100]);
         yScale1.domain([0,100]);

        var line = svg1.append("line")
                .attr("x1",xScale1(100))
                .attr("y1",yScale1(25))
                .attr("x2",xScale1(10))
                .attr("y2",yScale1(25))
                .attr("stroke","grey")
                .attr("stroke-width",0.7)

        svg1.append("text")
                .attr("class", "withdraw-title")
                .attr("x", xScale1(10))
                .attr("y", yScale1(93))
                .style("text-anchor", "left")
                .attr("dy", 0)
                .style("font-weight", "bold")
                .text("冬奥会北京赛区66%场馆为现有资源");

        // svg1.append("text")
        //   .attr("transform", "translate(" + xScale1(40)+ " ," + yScale1(85) + ")")
        //   .style("text-anchor", "left")
        //   .attr("dy", 0)
        //   .style("fill", "rgb(131, 131, 131)")
        //   .style("font-size", "14px")
        //   .text("数据来源：");
        //   svg1.append("text")
        //     .attr("transform", "translate(" + xScale1(40)+ " ," + yScale1(80) + ")")
        //     .style("text-anchor", "left")
        //     .attr("dy", 0)
        //     .style("fill", "rgb(131, 131, 131)")
        //     .style("font-size", "14px")
        //     .text("《中国冬季奥运会发展报告（2017）》 社会科学文献出版社");

        svg1.append("text")
                .attr("class", "ylabel")
                .attr("x", xScale1(30))
                .attr("y", yScale1(20))
                .style("text-anchor", "middle")
                .attr("dy", 0)
                .text("现有场馆");

        svg1.append("text")
                .attr("class", "ylabel")
                .attr("x", xScale1(55))
                .attr("y", yScale1(20))
                .style("text-anchor", "middle")
                .attr("dy", 0)
                .text("新建场馆");

        svg1.append("text")
                .attr("class", "ylabel")
                .attr("x", xScale1(80))
                .attr("y", yScale1(20))
                .style("text-anchor", "middle")
                .attr("dy", 0)
                .text("改建场馆");

        var rectooltip = d3.select("body")
                        .append("div")
                        .attr("class", "recttooltip");

        var rect1 = svg1.append("rect")
         .attr("x", xScale1(24))
         .attr("y", yScale1(33))
         .attr("id","shuilifang")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(151,180,239)")
         .style("stroke","rgb(50,72,178)")
         .style("opacity",0.5)

         var rect1 = svg1.append("rect")
         .attr("x", xScale1(24))
         .attr("y", yScale1(41))
         .attr("id","guojiatiyuguan")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(151,180,239)")
         .style("stroke","rgb(50,72,178)")
         .style("opacity",0.5)

         var rect1 = svg1.append("rect")
         .attr("x", xScale1(24))
         .attr("y", yScale1(49))
         .attr("id","wukesong")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(151,180,239)")
         .style("stroke","rgb(50,72,178)")
         .style("opacity",0.5)

         var rect1 = svg1.append("rect")
         .attr("x", xScale1(24))
         .attr("y", yScale1(57))
         .attr("id","shoudutiyuguan")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(151,180,239)")
         .style("stroke","rgb(50,72,178)")
         .style("opacity",0.5)

         var rect1 = svg1.append("rect")
         .attr("x", xScale1(24))
         .attr("y", yScale1(65))
         .attr("id","guojiatiyuchang")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(151,180,239)")
         .style("stroke","rgb(50,72,178)")
         .style("opacity",0.5)

         var rect1 = svg1.append("rect")
         .attr("x", xScale1(24))
         .attr("y", yScale1(73))
         .attr("id","guojiahuiyizhongxin")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(151,180,239)")
         .style("stroke","rgb(50,72,178)")
         .style("opacity",0.5)

         var rect1 = svg1.append("rect")
         .attr("x", xScale1(24))
         .attr("y", yScale1(81))
                  .attr("id","shouduhuabingguan")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(151,180,239)")
         .style("stroke","rgb(50,72,178)")
         .style("opacity",0.5)

         var rect1 = svg1.append("rect")
         .attr("x", xScale1(24))
         .attr("y", yScale1(89))
                  .attr("id","shoutizongheguan")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(151,180,239)")
         .style("stroke","rgb(50,72,178)")
         .style("opacity",0.5)

        var rect2 = svg1.append("rect")
         .attr("x", xScale1(49))
         .attr("y", yScale1(33))
                  .attr("id","guojiasuhuaguan")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(234,234,169)")
         .style("stroke","rgb(234,196,38)")
         .style("opacity",0.61)

        var rect2 = svg1.append("rect")
         .attr("x", xScale1(49))
         .attr("y", yScale1(41))
                  .attr("id","beijingaoyuncun")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(234,234,169)")
         .style("stroke","rgb(234,196,38)")
         .style("opacity",0.61)

        var rect2 = svg1.append("rect")
         .attr("x", xScale1(49))
         .attr("y", yScale1(49))
                  .attr("id","duandaosuhua")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(234,234,169)")
         .style("stroke","rgb(234,196,38)")
         .style("opacity",0.61)

        var rect3 = svg1.append("rect")
         .attr("x", xScale1(74))
         .attr("y", yScale1(33))
                  .attr("id","banjiang")
         .attr("width", 40)
         .attr("height", 40)
         .attr("fill","rgb(211,227,244)")
         .style("stroke","rgb(89,165,234)")
         .style("opacity",0.5)

        var rects = svg1.selectAll("rect")

        rects
            .on("mouseover", mouseoverFunc) // see below...
            .on("mousemove", mousemoveFunc) // see below...
            .on("mouseout", mouseoutFunc); // see below...

 function mouseoverFunc(d) {
            if (this.id === "shuilifang") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>国家游泳中心（水立方），</br>即将用于冰壶比赛</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "guojiatiyuguan") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>国家体育馆，</br>即将用于男子冰球比赛</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "wukesong") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>五棵松体育中心，</br>即将用于女子冰球比赛</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "shoudutiyuguan") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>首都体育馆，</br>即将用于短道速滑及花样滑冰比赛</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "guojiatiyuchang") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>国家体育场（鸟巢），</br>即将用于开闭幕式</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "guojiahuiyizhongxin") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>国家会议中心，</br>即将用做新闻中心</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "shouduhuabingguan") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>首都滑冰馆，</br>即将用于冬奥会训练</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "shoutizongheguan") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>首体综合馆，</br>即将用于冬奥会训练</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "guojiasuhuaguan") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>国家速滑馆，</br>即将用于速度滑冰比赛</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "beijingaoyuncun") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>北京奥运村，</br>即将用于冬奥会住宿</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "duandaosuhua") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>首体短道速滑馆，</br>即将用于冬奥会训练</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }

            if (this.id === "banjiang") {
            rectooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>北京颁奖广场，</br>即将用于冬奥会颁奖</p>");

            d3.select(this)//悬停在上面的元素
                .transition()
                .style("opacity", 1)
            }
}


        function mousemoveFunc(d) {
            rectooltip
                .style("top", (d3.event.pageY +20) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
    }

        function mouseoutFunc(d) {
            d3.selectAll("rect")
            .transition()
            .style("opacity",function(d){if ((this.id === "shuilifang")||(this.id === "guojiatiyuguan")||(this.id === "wukesong")||(this.id === "shoudutiyuguan")||(this.id === "guojiatiyuchang")||(this.id === "guojiahuiyizhongxin")||(this.id === "shouduhuabingguan")||(this.id === "shoutizongheguan")||(this.id === "banjiang")) {
                    return 0.5
                    }else if((this.id === "guojiasuhuaguan")||(this.id === "beijingaoyuncun")||(this.id === "duandaosuhua")){
                    return 0.61
                    }

            })
            rectooltip.style("display", "none");
     }
