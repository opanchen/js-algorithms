function quickSort(arr) {
  //? Часова складність: середній випадок O(n * log n), найгірший випадок - квадратична
  console.log("Quick Sort starting...");

  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];

  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// console.log(quickSort([7, 12, 3, 5, 8, 11, 20, 1, 6, 14]));
