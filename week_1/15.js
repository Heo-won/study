// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//     name : "홍길동",
//     age : 30,
//     gender : "남자",
// }

// // 1-2. 생성자 함수를 이용한 객체 생성 방법 (name, age, gerder => key), (값 = values)
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 35, "여자");
// let person3 = new Person("홍길애", 65, "여자");
// let person4 = new Person("홍길궁", 5, "남자");

// // 2. 접근하는 방법
// // 객체 이름.키 (.을통해 객체의 프로퍼티에 접근할 수 있음)
// console.log(person2.name);
// console.log("2",person2.gender);
// console.log("3",person3.age);

// 3. 객체 메소드(객체가 가진 여러가지 기능 :  Object.~~~)
// 3-1. Object.key() : key를 가져오는 메소드
let person = {
    name: "홍길동",
    age: "30",
    gender: "남자",
};

let keys = Object.keys(person);
console.log("keys => ", keys);

// 3-2. values(값)
let values = Object.values(person); 
console.log("values => ", values);

// 3-3 entries
// key와 value를 묶어서 배열로 만든 배열!! (2차원 배열)
let entries = Object.entries(person);
console.log("entries =>", entries);

// 3-4. assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person, {age : 31}); // 복사는 그대로 하고싶은데 나이는 31살로 하고 싶을 때
console.log("newPerson =>", newPerson);

// 3-5 객체 비교
let person1 = {
    name : "홍길동",
    age : 30,
    gender : "남자",
};

let person2 = {
    name : "홍길동",
    age : 30,
    gender : "남자",
};



