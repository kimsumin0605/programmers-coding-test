/**
 * 마지막 두 원소 
 * 
 * 정수 리스트 num_list가 주어질 때
 * 마지막 원소가 그전 원소보다 크면 마지막 원소에서
 * 그전 원소를 뺀 값을,
 * 
 * 마지막 원소가 그전 원소보다 크지 않다면
 * 마지막 원소를 두 배 한 값을 리턴.
 * 
 * 제한사항
 * 2 ≤ num_list의 길이 ≤ 10
 * 1 ≤ num_list의 원소 ≤ 9
 * 
 * 입출력 예시
 * num_list	        result
 * [2, 1, 6]	      [2, 1, 6, 5]
 * [5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10]
 * 
 */

function solution(num_list) {
    let last = num_list[num_list.length -1]; //마지막 원소
    let second = num_list[num_list.length -2]; // 마지막 그전 원소
    
    if(last > second){
        num_list.push(last - second)
    } else {
        num_list.push(last * 2)
    }
    return num_list;
};

// console.log(solution([2, 1, 6])); // [2, 1, 6, 5]