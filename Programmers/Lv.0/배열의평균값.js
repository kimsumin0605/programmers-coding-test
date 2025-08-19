/**
 * 문제 설명
 * 정수 배열 numbers가 매개변수로 주어집니다. 
 * numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 */
function solution(numbers) {
    const avg = numbers.reduce((a, b) => a + b) / numbers.length;
    return avg;
}

/**
 * reduce()
 * 배열의 모든 요소를 순회하면서 하나의 결과값으로 누적시킬 때 사용
   반환값: 누적된 하나의 값 (배열, 숫자, 객체 등)
 */