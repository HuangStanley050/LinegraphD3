import * as d3 from "d3";

const drawGraph = (svgRef) => {
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

    console.log(svg);
};

export default drawGraph;
