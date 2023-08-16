// 구조분해할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나, 객체의 속성

// // (1) 배열의 경우 -> 순서가 중요
// let [value1, value2] = [1, "new"] // 각각의 자리에 들어감
// console.log("1", value1);
// console.log("2", value2);

// let arr = ["value1", "value2", "value3"];
// let [a, b, c, d=4]= arr; // d라는 값은 들어와야될 것 같은데 아무것도 안들어왔다고 자동으로 인식
// // d에 초기값 세팅해 줄 수 있음. 초기값이라 배열에 "value4"가 있다면 "value4"가 들어옴. 

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d); //들어와야 하는 값 undefined //4

// // (2) 객체인 경우 -> key가 중요
// let user = {
//     name : "nbc",
//     age : 30,
// }
// // 구조분해할당
// let { name, age } = {
//     name : "nbc",
//     age : 30,
// }
// // 오른쪽에 있는 객체의 구조를 분해해서 왼쪽에 있는 네임과 에이지 각각에 할당해준다.

// console.log("name =>", name); // string
// console.log("age =>", age); // number

// 새로운 이름으로 할당
let user = {
    name : newName,
    age : newAge
};

let { name : newName, age : newAge } = user;
console.log("newName =>", newName);
console.log("newAge =>", newAge);

let { name, age, birthday = "today" } = user; 
console.log(name);
console.log(age);
console.log(birthday); // birthday가 없기때문에 undefined, 초기값 설정해주기