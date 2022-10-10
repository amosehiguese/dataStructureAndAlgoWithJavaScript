function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum || startNum < 1) {
    return [];
  }
  const defRange = rangeOfNumbers(startNum, endNum - 1);
  defRange.push(endNum);
  return defRange;
}

console.log(rangeOfNumbers(6, 9));
