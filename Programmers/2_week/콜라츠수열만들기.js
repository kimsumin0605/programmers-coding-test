/**
 * 콜라츠 수열 만들기
 * 
 * 콜라츠 수열이란 ?
 * 어떤 자연수 n이 주어졌을 때 다음과 같은 규칙을 반복하여
 * 최종적으로 1에 도달하는 수열.
 * 
 * n이 짝수이면: n = n / 2
 * n이 홀수이면: n = 3 * n + 1
 * 
 * 제한사항 1 ≤ n ≤ 1,000
 * 
 * 입출력 예시 
 *  n = 10 
 * result = [10, 5, 16, 8, 4, 2, 1]
 */

function solution(n) {
  let answer = [];
  while( n!= 1 && n < 10000) {
    answer.push(n);
    n = (n%2 ===0)? n/2 : 3*n + 1;
  }
  answer.push(1);
  console.log(answer);
  return answer;
};

// solution(10);

