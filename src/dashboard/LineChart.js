import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = () => {
  const chartRef = useRef();

  useEffect(() => {

    const svg = d3.select(chartRef.current);
  }, []);

  return (
    <div className="chart">
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default LineChart;
