// 조건문의 중첩
// 중첩문을 많이 쓰는 것을 지양하기 -> 코드의 가독성이 떨어지고 코드 유지 보수가 어려워짐

let age = 20;
let gender = "여성";

// 미성년자 구분
if (age >= 18) {
    console.log("성인입니다.");
    if(gender === "여성") {
        console.log("성인 여성입니다.");
    } else {
        console.log("성인 남성입니다.");
    } 
} else {
    if (gender === "여성") {
        console.log("미성년 여성입니다.");
    } else {
        console.log("미성년 남성입니다.");
    }
}