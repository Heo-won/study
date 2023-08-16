// 조건문 - if, else if, else, switch
// 1. if문
// let x = 10;

// if (x < 0) {
//     // main login
//     console.log("x는 양수입니다.");
// }

// // 1-2
// let y = "hello world";

// // y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력

// if (y.length >= 5) {
//     console.log(y.length);
// }


// let x = -3;
// // 2. if - else 문
// if (x > 0) {
//     // main logic #1
//     console.log('x는 양수입니다.')
// } else {
//     // main logic #2
//     console.log("x는 음수입니다.")
// }

// if - else if - else 문
// if (조건) {
//     // main logic #1
// } else if (조건2) {
//     // main logic #2 
// } else {
//     // main logic #3
// }

// let x = 10;
// if (x < 0) {
//     // main logic #1
//     console.log("1")
// } else if (x >= 0 && x < 10) {
//     // main logic #2 
//     console.log("2")
// } else {
//     // main logic #3
//     console.log("3")
// }

// 1-4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "사과3";

switch (fruit) {
    case "사과" :
        console.log("사과입니다.");
        break;
    case "바나나" :
        console.log("바나나입니다.");
        break;
    case "키위":
        console.log("키위입니다.");
        break;
    default:
        console.log("아무것도 아닙니다.");
        break;
}

// 케이스가 끝날 때 break를 넣어줘야 그 구문만 실행되고 밖으로 빠져나온다(중괄호를 빠져나온다) 
// break가 없으면 다음으로 흐르고 다음으로 흘러서 원하는 결과값 x