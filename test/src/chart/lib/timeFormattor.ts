import * as d3 from 'd3';

const TimeFormattor = (date: Date) => {
  // 시간이 0시 0분이면 날짜를 포함한 포맷 사용
  if (date.getHours() === 0 && date.getMinutes() === 0) {
    return d3.timeFormat('%m월 %d일')(date);
  }
  // 그 외 시간에는 시간만 표시
  return d3.timeFormat('%H:%M')(date);
};

export default TimeFormattor;
