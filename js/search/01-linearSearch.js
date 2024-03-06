function linearSearch(arr, x) {
  console.log("Linear Search Starting...");
  //? Лінійна часова складність O(n), де n - к-сть елементів списку

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === x) return i;
  }

  return -1;
}

function existsInList(arr, x) {
  return linearSearch(arr, x) !== -1;
}

// console.log(linearSearch([4, 3, 0, 2, 1, 8], 9));
// console.log(existsInList([4, 3, 0, 2, 1, 8], 9));
