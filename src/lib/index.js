let course = (startPosition, endPosition) => {
  if (!Array.isArray(startPosition)) {
    console.error('course-lat-long:起始点经纬度不为数组')
    return;
  }
  if (!Array.isArray(endPosition)) {
    console.error('course-lat-long:结束点经纬度不为数组')
    return;
  }
  let start = startPosition
  let end = endPosition
  // 直角的边长
  var x = Math.abs(start[0] - end[0]);
  var y = Math.abs(start[1] - end[1]);
  // 斜边长
  var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  // 余弦
  var cos = y / z;
  // 弧度
  var radina = Math.acos(cos);
  // 角度
  var angle = 180 / (Math.PI / radina);
  // 初始值
  let returnData = 0
  // 右上象限
  if (start[0] <= end[0] && start[1] <= end[1]) {
    returnData = angle
  }
  // 右下
  if (start[0] <= end[0] && start[1] >= end[1]) {
    returnData = 180 - angle
  }
  // 左下
  if (start[0] >= end[0] && start[1] >= end[1]) {
    returnData = 180 + angle
  }
  // 左上
  if (start[0] >= end[0] && start[1] <= end[1]) {
    returnData = 360 - angle
  }
  
  return returnData;
}
export default course
