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
        x.domain(d3.extent(data, d => new Date(d.date)));
        y.domain([0, d3.max(data, d => d.distance)]);

        const xAxis = d3.axisBottom(x)
            .ticks(5);
        const yAxis = d3.axisLeft(y)
            .ticks(5);

        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);


    }
    else {
        console.log("nothing yet");
    }


};

export default drawGraph;
