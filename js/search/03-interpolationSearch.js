function interpolationSearch(arr, x) {
  console.log("Interpolation Search Starting...");

  //? Очікувана часова складність: O(log log_n), n - к-сть елементів у масиві
  //? найгірший випадок: O(n)
  //! вхідний масив має бути відсортованим!!!
  //! ключі мають бути розподілені рівномірно, для збереження кращої часової складності
  //! якщо не рівномірно - деградує до показників лінійного пошуку і поступається бінарному

  let low = 0;
  let high = arr.length - 1;

  while (low <= high && x >= arr[low] && x <= arr[high]) {
    const idx =
      low +
      Math.floor(((high - low) / (arr[high] - arr[low])) * (x - arr[low]));

    if (arr[idx] === x) {
      return idx;
    }

    if (arr[idx] < x) {
      low = idx + 1;
    } else high = idx - 1;
  }

  return -1;
}

// console.log(
//   interpolationSearch([1, 3, 5, 7, 9, 11, 14, 16, 18, 20, 22, 25, 28, 30], 5)
// );
