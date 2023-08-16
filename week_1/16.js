// 1-1. 기본적인 배열 생성
// let fruits = ["사과", "바나나", "오렌지"];

// let fruits = ["사과", "바나나", "오렌지"];

// let fruits = ["사과", "바나나", "오렌지"];



// 1-2. 크기 지정
// let number = new Array(5);

// console.log(fruits.length);
// console.log(number.length);

// 2. 요소 접근
// console.log(fruits[0]);   // "사과"
// console.log(fruits[1]);   // "바나나"
// console.log(fruits[2]);   // "오렌지"

// 3. 배열 메소드
// 3-1. push
// let fruits = ["사과", "바나나"];
// console.log("1 => ", fruits);

// fruits.push("오렌지");

// console.log("2=> ", fruits);   // ["사과", "바나나", "오렌지"]

//3-2. pop
// let fruits = ["사과", "바나나"];
// console.log("1=> ", fruits);

// fruits.pop();

// console.log("2=> ", fruits);   // ["사과", "바나나"]

// 3-3. shift
// let fruits = ["사과", "바나나", "키위"];
// console.log("1=> ", fruits);
// fruits.shift();
// console.log("2=>", fruits);   // ["바나나", "오렌지"]

// 3-4. unshift() 메소드
// let fruits = ["바나나", "오렌지"];

// fruits.unshift("사과");

// console.log(fruits);   // ["사과", "바나나", "오렌지"]

// 3-5. splice() 메소드
// let fruits = ["사과", "바나나", "오렌지"];

// fruits.splice(1, 1, "포도"); // 시작하는 위치 , 몇개 지울 건지

// console.log(fruits);   // ["사과", "포도", "오렌지"]

// 3-6. slice() 메소드
// let fruits = ["사과", "바나나", "오렌지"];

// let slicedFruits = fruits.slice(1, 2); // 두번째 요소부터 세번째 요소전까지

// console.log(slicedFruits);   // ["바나나"]


// forEach, map, filter, find
// let numbers = [1, 2, 3, 4, 5 ];
// 3-7. forEach() 메소드
// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.forEach(function(item) {
//   console.log("item입니다 => " + item);
// });

// 3-8. map() 메소드 : 항상 원본배열의 길이만큼 리턴이 된다.
// let numbers = [4, 1, 5, 2, 3];

// let squaredNumbers = numbers.map(function(item) {
//   return item * item;
// });

// console.log(squaredNumbers);   // [1, 4, 9, 16, 25]

// 3-9. filter() 메소드 //이 조건에 해당되는 것만 리턴됨
// let numbers = [1, 2, 3, 4, 5];

// let evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers);   // [2, 4]

// 3-10. reduce() 메소드
// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

// 3-11. find() 메소드 : 첫번째로 들어오는 것만 반환
// let numbers = [1, 2, 3, 4, 5];

// let foundNumber = numbers.find(function(item) {
//   return item > 3;
// });

// console.log(foundNumber);   // 4

// 3-12. some() 메소드
// let numbers = [1, 2, 3, 4, 5];

// let hasEvenNumber = numbers.some(function(number) {
//   return number % 2 === 0;
// });

// console.log(hasEvenNumber);   // true

// 3-13. every() 메소드
// let numbers = [2, 4, 6, 8, 10];

// let isAllEvenNumbers = numbers.every(function(number) {
//   return number % 2 === 0;
// });

// console.log(isAllEvenNumbers);   // true

// 3-14. sort() 메소드
// let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// numbers.sort(function(a, b) {
//   return a - b;
// });

// console.log(numbers);   // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// 3-15. reverse() 메소드
// let numbers = [1, 2, 3, 4, 5];

// numbers.reverse();

// console.log(numbers);   // [5, 4, 3, 2, 1]