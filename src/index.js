exports.min = function min (array) {
  if(array === undefined || array === null || array.length <= 0){
    return 0;
  }
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if(array === undefined || array === null || array.length <= 0){
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if(array === undefined || array === null || array.length <= 0){
    return 0;
  }
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  return average;
}
