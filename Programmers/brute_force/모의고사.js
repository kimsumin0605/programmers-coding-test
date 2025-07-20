/**
문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

 */
function solution(answers) {
    let num1 = [1, 2, 3, 4, 5];  // 1번 수포자 패턴
    let num2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 2번 수포자 패턴 
    let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 3번 수포자 패턴
    
    let answer1 = 0;
    let answer2 = 0;
    let answer3 = 0;
    
    // 모든 문제에 대해 각각의 답과 정답 비교
    for(let i = 0; i < answers.length; i++){ 
        if(answers[i] === num1[i % num1.length]) answer1++; // num1 패턴 반복
        if(answers[i] === num2[i % num2.length]) answer2++; // num2 패턴 반복
        if(answers[i] === num3[i % num3.length]) answer3++; // num3 패턴 반복
    }
    
    // 가장 많은 정답수 계산
    let maxanswer = Math.max(answer1, answer2, answer3);
    let result = [];
    
    //가장 많은 문제를 맞힌 사람 번호 배열에 저장
    if(maxanswer === answer1) result.push(1);
    if(maxanswer === answer2) result.push(2);
    if(maxanswer === answer3) result.push(3);
    
    return result ; 
} 

/** 
 *  filter()함수 사용해서 풀이
function solution(answers) {
    let num1 = [1, 2, 3, 4, 5]; 
    let num2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const answer1 = answers.filter((answer, i) => answer === num1[i % num1.length]).length;
    const answer2 = answers.filter((answer, i) => answer === num2[i % num2.length]).length;
    const answer3 = answers.filter((answer, i) => answer === num3[i % num3.length]).length;
    
    let Maxanswer = Math.max(answer1, answer2, answer3);
    let result = [];
    
    if(Maxanswer === answer1) result.push(1);
    if(Maxanswer === answer2) result.push(2);
    if(Maxanswer === answer3) result.push(3);
    
    return result;
} 
*/ 