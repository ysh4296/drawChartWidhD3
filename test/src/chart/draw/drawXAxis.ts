import * as d3 from 'd3';
import TimeFormattor from '../lib/timeFormattor';

const drawXAxis = (svg: any, x: d3.ScaleTime<number, number, never>, layout: TChartLayout) => {
  const formattedAxis = d3.axisBottom(x).tickFormat(TimeFormattor as any);

  const xAxis = svg
    .append('g')
    .attr('transform', `translate(0,${layout.height})`)
    .call(formattedAxis);

  return xAxis;
};

export default drawXAxis;
