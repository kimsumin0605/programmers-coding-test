/**
 *  a와 b 출력하기
 * 
 *  문제 설명
 * *  정수 a와 b가 주어집니다.
 * 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
 * 
 * 제한사항
 * -100,000 ≤ a, b ≤ 100,000
 * 
 * 입력
 * 4 5
 * 
 * 출력
 * a = 4
 * b = 5
 */


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // 기존 코드에 추가된 부분
    console.log(`a = ${Number(input[0])}\nb = ${Number(input[1])}`);
});