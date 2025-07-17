/**
 * 문자열 반복해서 출력하기
 * 
 * 문제 설명
 * 문자열 str과 정수 n이 주어집니다. 
 * str을 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 주세요.
 * 
 * 제한사항
 * 1 ≤ str의 길이 ≤ 10
 * 1 ≤ n ≤ 5
 * 
 * 처음 작성 코드 
 * 한 줄씩 반복해서 출력하도록 작성. 
 * 요구사항은 한줄에 반복된 문자열을 출력하는 것.
 *  for(let i = 0; i < 5; i++) { 
        console.log(str)
    }
 * 
 * 참고 정답 코드
 * console.log(str.repeat(n));
 * 
 * 수정 후 
 * 문자열 한 번에 반복해서 출력하기
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
    str = input[0];
    n = Number(input[1]);
    
    let allstr = ''
    for(let i = 0; i < n; i++) {
        allstr += str;
    }
    console.log(allstr)
});
   
