/**
 * 문제 설명
 * 정수 배열 numbers가 매개변수로 주어집니다. 
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 */

function solution(numbers) {
  let sorted = numbers.sort((a, b) => b - a);
  let Max = sorted[0] * sorted[1];
  let Min = sorted[sorted.length - 1] * sorted[sorted.length - 2];
  return Math.max(Max, Min);
}