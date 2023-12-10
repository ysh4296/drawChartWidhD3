import * as d3 from "d3";

import data from "../../mock/chartData";
import TimeFormattor from "../lib/timeFormattor";
import getArea from "../lib/getArea";

const setZoom = (
  svg: any,
  xAxis: any,
  x: any,
  y: any,
  line: any,
  layout: TChartLayout
) => {
  const zoom = d3
    .zoom()
    .scaleExtent([1, 20]) // 줌 스케일 범위
    .translateExtent([
      [0, 0],
      [layout.width, layout.height],
    ])
    .extent([
      [0, 0],
      [layout.width, layout.height],
    ])
    .on("zoom", (event) => {
      const xz = event.transform.rescaleX(x);
      xAxis.call(d3.axisBottom(xz).tickFormat(TimeFormattor as any));
      line.attr("d", getArea(data.data.glucoseData, xz, y));
      // 차트의 다른 요소들도 여기서 업데이트
    });

  svg
    .append("rect")
    .attr("width", layout.width)
    .attr("height", layout.height)
    .style("fill", "none")
    .style("pointer-events", "all")
    .attr(
      "transform",
      "translate(" + layout.margin.left + "," + layout.margin.top + ")"
    )
    .call(zoom as any);
};

export default setZoom;
