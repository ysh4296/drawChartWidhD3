"use client";

import * as d3 from "d3";
import { useEffect } from "react";
import drawBoard from "./drawBoard";
import drawXAxis from "./drawXAxis";
import drawYAxis from "./drawYAxis";
import drawPath from "./drawPath";
import setZoom from "../event/setZoom";

const useChart = () => {
  useEffect(() => {
    const margin: TChartMargin = { top: 10, right: 30, bottom: 30, left: 60 };
    const width = 1200 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    const chartLayout: TChartLayout = {
      height,
      width,
      margin,
    };

    const xDomain = [
      new Date("2023-08-07T00:00:00"),
      new Date("2023-08-11T23:59:59"),
    ];
    const yDomain = [0, 350];

    const root = d3
      .select("#root")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const chart = drawBoard(root, chartLayout);

    const x = d3.scaleTime().domain(xDomain).range([0, width]);
    const y = d3.scaleLinear().domain(yDomain).range([height, 0]);

    const xAxis = drawXAxis(chart, x, chartLayout);
    drawYAxis(chart, y);

    const line = drawPath(chart, x, y, chartLayout);
    setZoom(root, xAxis, x, y, line, chartLayout);

    return () => {
      d3.select("#root").selectAll("*").remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useChart;
