function fibonacciMemo(n, memo = {}) {
  console.log("Fibonacci Number calculation starting...");
  //? рекурсивне обчислення чисел Фібоначчі БЕЗ мемоізації має експоненційну часову складність O(2ˆn) і може бути дуже повільним для великих значень n.
  //? Завдяки мемоізації, ми оптимізуємо цей підхід до лінійної часової складності O(n)

  if (n in memo) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  } else {
    const value = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    memo[n] = value;
    return value;
  }
}

// console.log(fibonacciMemo(10));
