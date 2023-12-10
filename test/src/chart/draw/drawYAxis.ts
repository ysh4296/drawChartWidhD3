import * as d3 from 'd3';

const drawYAxis = (svg: any, y: d3.ScaleLinear<number, number, never>) => {
  const yAxis = svg.append('g').call(d3.axisLeft(y));

  return yAxis;
};

export default drawYAxis;
