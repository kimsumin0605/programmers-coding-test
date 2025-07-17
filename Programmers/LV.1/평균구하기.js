/**
 * 문제 설명
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 * 
 * 제한사항
 * arr의 길이 1 이상, 100이하인 배열입니다.
 * arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
 * 
 * 참고 reduce() 함수: 
 * 고차 함수, 첫번째 인수 자리에 콜백함수가 들어오고, 두번째 인수 자리(생략가능)에 초기값이 들어온다.
 * 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백함수를 반복 호출한다. 이때 원본 배열은 변경 되지 않는다.
 * 배열을 상대로 각 요소인자로 넘어온 콜백함수를 실행하여 누적된 하나의 결과값으로 반환.
 * reduce 메서드를 사용할 때는 반드시 값을 리턴(return)해주어야 한다.
 * function average(array){
 *    return array.reduce((a,b) => a + b) / array.length;
 * }
 *
 * reduce 메서드를 활용
 * 평균 구하기
 * 최대값 구하기
 * 요소의 중복 횟수 구하기
 * 중첩 배열의 평탄화
 * 중복 요소 제거
 */

function solution(arr) {
  var answer = 0;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; // 배열 요소 합계
  }
  return answer = total / arr.length; // 합계에서 배열의 길이로 나누기
}