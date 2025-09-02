/**
 * 문제 설명
 */

function solution(n) {
  let pizza = 1;                  // 1판부터 시작
  while ((pizza * 6) % n !== 0) {  // 같은 수의 피자 조각이 아니면 
    pizza++;                    // 피자 판 수 늘리기
  }
  return pizza;
}