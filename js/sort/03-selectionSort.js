function selectionSort(arr) {
  //? Квадратична часова складність
  console.log("Selection Sort starting...");

  const n = arr.length;

  for (let i = 0; i < n; i += 1) {
    let minIdx = i;

    for (j = i + 1; j < n; j += 1) {
      if (arr[j] < [arr[minIdx]]) minIdx = j;
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return arr;
}

// console.log(selectionSort([5, 3, 8, 4, 2]));
