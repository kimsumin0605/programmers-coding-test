/** 
 * 문제 설명
 * 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 
 * 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
 */

/** 
 *  처음 풀이 -> 시간 복잡도 / 시간 초과 발생
 * 
 * function solution(n) {
    let count = 0;
    
    for(let i = 0; i <=  n; i ++) {
        for(let j = 0; j <= n; j++) {
            if(i * j === n) {
                count ++ 
            }
        }
    }
    return count;
}
 */

function solution(n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count++
    }
  }
  return count;
}

/**
 * i * j === 0 을 만족하려면, i는 n의 약수여야 한다.
 * 약수의 개수 = (i,j) 곱의 쌍 개수랑 같다.
 * 
 * 이중 for문은 속도가 매우 느리다.
 */