/**
 * 문제 설명
 * 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, 
 * my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(my_string) {
  let stringLow = my_string.toLowerCase();    // 소문자로 변경
  let strArr = stringLow.split("");           // 문자 하나씩 배열로 
  let sorted = strArr.sort();                 // 알파벳 순서대로 정렬 

  return sorted.join("");                     // 배열을 문자열로 결합
}