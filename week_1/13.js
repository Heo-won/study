// 조건부 실행
let x = 10;

// if (x > 0) {
//     console.log("x는 양수입니다.")
// }

(x > 0) && console.log("x는 양수입니다.") // 앞 조건을 만족하면 뒤를 실행해줘 (&& 조건) 요즘스러운 개발패턴

// 삼항 연산자와 단축평가
// or 조건(||)
let y;
let z = y || 20;

console.log(z);