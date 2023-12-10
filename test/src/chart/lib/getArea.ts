import * as d3 from 'd3';

const getArea = (data: any, x: any, y: any) =>
  d3
    .line()
    .x((d: any) => x(d.time))
    .y((d: any) => y(d.value))(data as any);

export default getArea;
