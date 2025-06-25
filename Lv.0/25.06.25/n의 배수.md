# 🔢 n의 배수 구하기

## 📘 문제 설명

정수 `num`과 `n`이 매개변수로 주어질 때,  
- `num`이 `n`의 배수이면 `1`을  
- `n`의 배수가 아니면 `0`을  

반환하는 `solution` 함수를 구현하세요.

---

## 📌 제한사항

- `2 ≤ num ≤ 100`
- `2 ≤ n ≤ 9`

---

## 💡 입출력 예

| num | n | result |
|-----|---|--------|
| 98  | 2 | 1      |
| 34  | 3 | 0      |

### 📄 입출력 예 설명

- **예 1**: 98은 2의 배수이므로 `1`을 반환합니다.  
- **예 2**: 34는 3의 배수가 아니므로 `0`을 반환합니다.

---

## ✅ 코드 (JavaScript)

```javascript
function solution(num, n) {
    if (num % n === 0) {
        return 1;
    } else {
        return 0;
    }
}
```
### 🔁 문제 변형 및 응용
* 반복문과 배열을 결합하여 여러 수가 n의 배수인지 한꺼번에 판별할 수 있는 문제로 확장 가능

➡️ 배열 + 조건문 + 반복문 콤보 문제 대비

✅ 예시 문제 1: 배열에서 n의 배수만 추출하기
 * 정수 배열 num과 정수 n이 매개변수로 주어질 때,
배열 안에서 n의 배수인 수들만 모아 새로운 배열을 반환하는 solution 함수를 구현하세요.

📌 제한사항

* 2 ≤ n ≤ 9

* 1 ≤ num.length ≤ 100

* 1 ≤ num[i] ≤ 100

```javascript

입력:
num = [2, 10, 12, 25, 50]
n = 5

출력:
[10, 25, 50]
```

🧪 방법 1: for문 활용 
```javascript

function solution(num, n) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % n === 0) {
      result.push(num[i]);
    }
  }
  return result;
};
```

**push()**

🧪 방법 2: filter() 사용
```javascript
function solution(num, n) {
  return num.filter(nums => nums % n === 0);
}
```
💬 구현 설명
* filter()는 조건에 맞는 요소만 걸러서 새 배열로 반환합니다.
* for문은 배열을 순회하면서 조건에 맞는 수를 push()로 수동 추가합니다.

--- 
✅ 예시 문제 2: n의 배수 개수 구하기

정수 배열 num과 정수 n이 주어질 때,
배열 num 안에서 n의 배수인 숫자의 개수를 반환하는 solution 함수를 구현하세요.

 제한사항 및 입출력 예는 예시 문제 1과 동일

🧪 방법 1: for문
```javascript
function solution(num, n) {
  let count = 0; // 0부터 카운트 시작
  for (let i = 0; i < num.length; i++) {
    if (num[i] % n === 0) {
      count++;
    }
  }
  return count;
};
```

🧪 방법 2: filter() + length
``` javascript
function solution(num, n) {
  return num.filter(nums => nums % n === 0).length;
};
```
💬 구현 설명
* filter()는 조건에 맞는 값만 걸러 새 배열 생성

* .length는 그 배열의 길이 = 조건을 만족하는 값의 개수



