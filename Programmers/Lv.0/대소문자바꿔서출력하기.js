/**
 * 
 * 대소문자 바꿔서 출력하기
 * 
 * 영어 알파벳으로 이루어진 문자열 str이 주어집니다.
 * 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
 * 
 * 제한사항
 * 1 ≤ str의 길이 ≤ 10
 * str은 알파벳으로만 이루어진 문자열입니다.
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let converted = '';
    for (let c of str){
        converted += c === c.toLowerCase()?c.toUpperCase():c.toLowerCase();
    }
    console.log(converted);
});