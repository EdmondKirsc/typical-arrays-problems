
exports.min = function min (array) {
  if (!(array)) return 0;

  let resultMin = array[0];

  for (let i = 1; i < array.length; i++){
    if (resultMin > array[i]) {
      resultMin = array[i];
    }
  }
  return (resultMin || 0);
}

exports.max = function max (array) {
  if (!(array)) return 0;

  let resultMax = array[0];

  for (let i = 1; i < array.length; i++){
    if (resultMax < array[i]) {
      resultMax = array[i];
    }
  }
  return (resultMax || 0);
}

exports.avg = function avg (array) {
  if (!(array)) return 0;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let resultAvg = sum / array.length;
  return (resultAvg || 0);
}
