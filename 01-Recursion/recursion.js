const sum = (arr, x) => {
  if (x <= 0) {
    return 0;
  } else {
    return sum(arr, x - 1) + arr[x - 1];
  }
};

console.log(sum([1], 0));
console.log(sum([1, 2, 3, 4, 5, 6], 3));
console.log(sum([11, 22, 33], 2));
