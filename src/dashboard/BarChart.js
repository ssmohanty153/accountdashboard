import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 10, bottom: 20, left: 10 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const dataset = data;

    const xScale = d3
      .scaleBand()
      .domain(dataset.map((d) => d.label))
      .range([0, width])
      .padding(0.3)
      .paddingInner(0.1); // Added paddingInner to create space between bars

    const yMax = d3.max(dataset, (d) => d.value);

    const yScale = d3
      .scaleLinear()
      .domain([0, yMax * 1.2])
      .range([height, 0]);

    const bar = svg
      .selectAll(".bar")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("rx", 5)
      .attr("ry", 5)
      .style("fill", "green")
      .attr("width", 20); // Set the width of the bars to 20 pixels

    const xAxis = d3.axisBottom(xScale);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

  }, [data]);

  return <div ref={chartRef} />;
};

export default BarChart;