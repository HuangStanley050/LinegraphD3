import * as d3 from "d3";

const drawGraph = (svgRef, data, currentActivity) => {
    //===============set up container
    const margin = {
        top: 40,
        right: 20,
        bottom: 50,
        left: 100
    };
    const graphWidth = 560 - margin.left - margin.right;
    const graphHeight = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef)
        .attr('width', graphWidth + margin.left + margin.right)
        .attr('height', graphHeight + margin.top + margin.bottom);

    const graph = svg.select("#graph")
        .attr('width', graphWidth)
        .attr('height', graphHeight)
        .attr('transform', `translate(${margin.left},${margin.top})`);
    //============end

    //=====set up scale and axis
    const x = d3.scaleTime().range([0, graphWidth]);
    const y = d3.scaleLinear().range([graphHeight, 0]);

    const xAxisGroup = graph.select('#xAxis')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${graphHeight})`);

    const yAxisGroup = graph.select("#yAxis")
        .attr('class', 'y-axis');
    //===============end=============================//

    //=============set up line generator=======================//

    const line = d3.line()
        .x(function(d) { return x(new Date(d.date)) })
        .y(function(d) { return y(d.distance) });



    //=======================end====================================//
    const dottedLines = graph.append('g')
        .attr('class', 'lines')
        .style('opacity', 0);

    const xDottedLine = dottedLines.append('line')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', 4);

    const yDottedLine = dottedLines.append('line')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', 4);


    //=======if data becomes available from props pass down from the react life cycle function
    if (data) {




        //filter out data base on current activity selected

        data = data.filter(item => item.activity === currentActivity);

        data.sort((a, b) => new Date(a.date) - new Date(b.date));

        //==========set up scale domain===============//

        x.domain(d3.extent(data, d => new Date(d.date)));
        y.domain([0, d3.max(data, d => d.distance)]);

        //=====================end================================//

        //==============set up path==========================//

        const path = graph.append('path');


        //============remove the previous line===============//
        d3.select('path.remove').remove();

        path.data([data])
            .attr('class', 'remove')
            .attr('fill', 'none')
            .attr('stroke', '#00bfa5')
            .attr('stroke-width', 2)
            .attr('d', line);


        //==================end======================================//

        const circles = graph.selectAll('circle')
            .data(data);
        //=============enter, update, exit cycle=============//

        //============exit stage===================================//
        circles.exit().remove();
        //===============end exit
        //=======update stage=============================//
        circles.attr('cx', d => x(new Date(d.date)))
            .attr('cy', d => y(d.distance));
        //==========end update===============================//

        //=============enter stage
        circles.enter()
            .append('circle')
            .attr('r', 4)
            .attr('cx', d => x(new Date(d.date)))
            .attr('cy', d => y(d.distance))
            .attr('fill', '#ccc');
        //==================end update cycle=======================//


        //=============mouse over the circle event===============//
        graph.selectAll('circle')
            .on('mouseover', (d, i, n) => {
                d3.select(n[i])
                    .transition().duration(100)
                    .attr('r', 8)
                    .attr('fill', "white");

                xDottedLine
                    .attr('x1', x(new Date(d.date)))
                    .attr('x2', x(new Date(d.date)))
                    .attr('y1', graphHeight)
                    .attr('y2', y(d.distance));

                yDottedLine
                    .attr('x1', 0)
                    .attr('x2', x(new Date(d.date)))
                    .attr('y1', y(d.distance))
                    .attr('y2', y(d.distance));

                dottedLines.style('opacity', 1);

            })
            .on('mouseleave', (d, i, n) => {
                d3.select(n[i])
                    .transition().duration(100)
                    .attr('r', 4)
                    .attr('fill', '#ccc');
                //d3.select('line.lines').remove();
                //d3.select(yDottedLine).remove();
                dottedLines.style('opacity', 0);
            });
        //========================end======================//

        const xAxis = d3.axisBottom(x)
            .ticks(5)
            .tickFormat(d3.timeFormat("%b %d"));

        const yAxis = d3.axisLeft(y)
            .ticks(5)
            .tickFormat(d => d + 'm');

        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);
        //rotate the text
        xAxisGroup.selectAll('text')
            .attr('transform', 'rotate(-40)')
            .attr('text-anchor', 'end');
        //===================================END====//




    }

};

export default drawGraph;
