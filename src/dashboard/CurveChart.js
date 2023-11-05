import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CurveChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const dataset = data;

    const xScale = d3
      .scaleBand()
      .domain(dataset.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, (d) => d.value)])
      .nice()
      .range([height, 0]);

    const curveGenerator = d3
      .line()
      .x((d) => xScale(d.label) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.value))
      .curve(d3.curveBasis);

    svg.append('path')
      .datum(dataset)
      .attr('class', 'curve')
      .attr('d', curveGenerator)
      .attr('fill', 'none') // Remove the fill color    
      .attr('stroke', 'blue'); // You can set the line color

    // svg.selectAll('circle')
    //   .data(dataset)
    //   .enter()
    //   .append('circle')
    //   .attr('cx', (d) => xScale(d.label) + xScale.bandwidth() / 2)
    //   .attr('cy', (d) => yScale(d.value))
    //   .attr('r', 4)
    //   .attr('fill', 'red'); // Add points as circles, you can change their color

  }, [data]);

  return <div ref={chartRef} />;
};

export default CurveChart;