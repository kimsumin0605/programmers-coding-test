function solution(n) {
  let sum = 0;

  if (n % 2 !== 0) {
    // 홀수일 경우: 홀수들의 합
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
  } else {
    // 짝수일 경우: 짝수들의 제곱의 합
    for (let i = 2; i <= n; i += 2) {
      sum += i * i;
    }
  }

  return sum;
}