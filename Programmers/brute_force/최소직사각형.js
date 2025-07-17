/**
 * 명함을 자유롭게 회전시킬 수 있으므로,
 * 항상 큰 값을 가로로, 작은 값을 세로로 맞춰준 뒤
 * 가장 큰 가로 x 가장 큰 세로를 구하면 된다.
 * 
 * Math.max()와 Math.min()을 이용해서 각 명함을 [큰 값, 작은 값] 으로 정렬
 * 가장 긴 가로(w)와 세로(h)를 구해서 곱한 결과 반환
 */

function solution(sizes) {
    let w = 0; 
    let h = 0;
    
    for(let size of sizes) {
        let max = Math.max(...size); // 큰 값 = 가로
        let min = Math.min(...size);  // 작은 값 = 세로 
        
        if (max > w) w = max; // 가장 큰 가로 
        if (min > h) h = min; // 작은 값들 중에서 가장 큰 값(가장 큰 세로)
    }
    return w * h;
}