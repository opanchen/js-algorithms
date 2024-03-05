function insertionSort(arr) {
  //? Квадратична часова складність
  console.log("Insertion Sort starting...");

  const n = arr.length;

  for (let i = 1; i < n; i += 1) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// console.log(insertionSort([5, 2, 4, 8, 3]));
