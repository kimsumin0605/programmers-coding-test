/**
 * 문제 설명
 * 문자열 my_string이 매개변수로 주어집니다. 
 * my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 */

function solution(my_string) {
  let regex = /[^0-9]/g;
  let result = [...my_string.replace(regex, '')]; 
  let sum = [...result].reduce((a, b) => a + Number(b), 0)
  return sum;

}

// /[^0-9]/g : 숫자가 아닌 문자들을 모두 찾는 정규식, g는 전역 검색을 의미
// replace(regex, '') : 숫자가 아닌 문자들을 빈 문자열로 대체하여 제거 => 숫자만 남음
// [..result] : 문자열을 배열로 한 글자씩 분해
// reduce((a, b) => a + Number(b), 0) : a는 누적값, b는 현재값, Number(b)는 문자열을 숫자로 변환, 0은 초기값