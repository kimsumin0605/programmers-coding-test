/** 
 * 문제 설명
 * 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다.
 *  num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요
 */

function solution(num_list) {
    const result = [...num_list].reverse();
    return result;
}

/**
 * reverse() 
 * 호출한 배열을 거꾸로 뒤집고, 그 배열을 가리키는 참조 값을 반환한다.
 */