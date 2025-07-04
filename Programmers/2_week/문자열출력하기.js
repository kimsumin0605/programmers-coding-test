/**
 * 문자열 출력하기
 * 
 * 문제 설명
 * 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 주세요.   
 * 
 * 제한사항
 * 
 * 제한사항
 * 1 ≤ str의 길이 ≤ 1,000,000
 * str에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.
 */


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
    console.log(line) // 기본 코드에서 추가된 부분
}).on('close',function(){
    str = input[0];
});