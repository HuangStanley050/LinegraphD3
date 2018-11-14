import * as d3 from "d3";

const drawGraph = (svgRef, data) => {
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

    //=======if data becomes available from props pass down from the react life cycle function
    if (data) {
        //console.log(data);
        //==========set up scale domain===============//
        x.domain(d3.extent(data, d => new Date(d.date)));
        y.domain([0, d3.max(data, d => d.distance)]);

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
    else {
        console.log("nothing yet");
    }


};

export default drawGraph;
