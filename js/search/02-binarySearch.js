function binarySearch(arr, x) {
  console.log("Binary Search Starting...");
  //? Часова складність O(log_n), де n - кількість елементів у масиві, що значно ефективніше за лінійний пошук
  //! вхідний масив має бути відсортованим!!!

  let low = 0;
  let high = arr.length - 1;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] < x) {
      low = mid + 1;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else return mid;
  }

  return -1;
}

// const idx = binarySearch([1, 3, 5, 8, 10, 12, 15, 18, 20, 22, 24], 15);
// idx !== -1
//   ? console.log("Found element on index ", idx)
//   : console.log("Not found, element's index= ", idx);
