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
  // 줌 기능 설정
  const zoom = d3
    .zoom()
    .scaleExtent([1, 20]) // 줌 스케일 범위
    .translateExtent([
      [0, 0],
      [1200, 500],
    ]) // 팬 범위
    .on("zoom", (event) => {
      // 줌 이벤트 발생 시, X 축과 Y 축 업데이트
      const xz = event.transform.rescaleX(x);
      // const newDomain = xz.domain();
      // xz.domain([
      //   // currentDomain[0],
      //   // currentDomain[1],
      //   new Date(Math.max(new Date(currentDomain[0]).getTime(), 1691334000000)),
      //   new Date(Math.min(new Date(currentDomain[1]).getTime(), 1691373000000)),
      // ]);
      // if (new Date(newDomain[0]).getTime() < 1691334000000)
      //   newDomain[0] = 1691334000000;
      // if (new Date(newDomain[1]).getTime() > 1691373000000)
      //   newDomain[1] = 1691373000000;

      // x.domain(newDomain);
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
