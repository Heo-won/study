// 단축 속성명 : property shorthand
const name = "nbc";
const age = "30";

// key - value
const obj = { name, age }; // 배열같지만 객체임, 단축속성명을 씀
// key 와 value 가 겹치면 생략 가능
const obj1 = { name: name, age: age};

// 현재 구문 = spread operator
// destrucuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
let arr = [1, 2, 3];

let newArr = [...arr, 4];
console.log(arr);
console.log(newArr);

// 객체
let user = {
    name:"nbc",
    age: 30,
};

let user2 = { ...user};

// console.log(user);
// console.log(user2);

// 나머지 매개변수 (rest parameter)
function exampleFunc(a, b, c, ...args) { // 나머지 매개변수를 모를 때 / 추가적으로 나머지가 들어올 때 
    console.log(a, b, c);
    console.log(...args); // 스프레드 문법 빼주면 배열로 [ 4, 5, 6, 7] 들어옴
};

exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template Literal)

// 템플릿 리터럴 (Template Literal)
const testValue = "안녕하세요!"
console.log(`Hello World ${testValue}`);
console.log(`
    Hello
        my name is javascript!!!

        Nice to meet you
`) // 멀티라인을 표현가능