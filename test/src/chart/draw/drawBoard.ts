const drawBoard = (svg: any, layout: TChartLayout) =>
  svg
    .append("g")
    .attr("transform", `translate(${layout.margin.left},${layout.margin.top})`);
export default drawBoard;
