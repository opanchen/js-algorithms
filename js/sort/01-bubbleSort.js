function bubbleSort(arr) {
  //? Квадратична часова складність
  console.log("Bubble Sort starting...");

  const n = arr.length;

  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < n - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([3, 5, 8, 4, 2]));
