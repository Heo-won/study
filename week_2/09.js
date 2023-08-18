const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

// console.log(myMap.keys());
// for (const key of myMap.keys()) {
//     console.log(key);
// }

// console.log(myMap.values());
// for ( const value of myMap.values()) {
//     console.log(value);
// }

// console.log(myMap.entries());
for (const entry of myMap.entries()) {
    console.log(entry);
};

// Map의 크기와 존재여부를 확인하는 방법
console.log(myMap.size); // map의 사이즈(길이)
console.log(myMap.has("two")); // key 기반 검색
// "two" 라는 key를 가지고 있는 value가 있는지지


