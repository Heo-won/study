// 일급객체로써의 함수 (2)
const person = {
    name : 'John',
    age : 31,
    isMarried : true,
    sayHello: () => {
        console.log(`Hello, My name is ${this.name}`)
    } // 화살표함수는 this를 바인딩하지 않는다.
    // sayHello : function () {
    //     // console.log('Hello my name is ' + this.name);
    //     console.log(`Hello, My name is ${this.name}`);
    // }
};

person.sayHello();