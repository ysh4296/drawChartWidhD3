import data from "../../mock/chartData";
import getArea from "../lib/getArea";

const drawPath = (
  svg: any,
  x: d3.ScaleTime<number, number, never>,
  y: d3.ScaleLinear<number, number, never>,
  layout: TChartLayout
) => {
  // make clip board
  svg
    .append("defs")
    .append("SVG:clipPath")
    .attr("id", "clip")
    .append("SVG:rect")
    .attr("width", layout.width)
    .attr("height", layout.height)
    .attr("x", 0)
    .attr("y", 0);

  const graph = svg.append("g").attr("clip-path", "url(#clip)");

  return graph
    .append("path")
    .attr("transform", `translate(0,0)`)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", getArea(data.data.glucoseData, x, y));
};

export default drawPath;
