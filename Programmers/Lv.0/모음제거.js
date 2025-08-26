/**
 * 문제 설명
 * 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
 * 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
 */
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, ''); // global (전역)
}

/**
 * .replace() => 문자열에서 어떤 문자나 패턴을 찾아서, 다른 걸로 바꾸는 메서드.
 * 문자열.replace(찾을_것, 바꿀_것)
 */