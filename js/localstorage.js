// const user = {
//   userName: "Mango",
//   age: 22,
// };

// console.log(JSON.stringify(user)); //приводит объект к строке

// const savedUserData = '{"userName":"Mango","age":22}';

// console.log(JSON.parse(savedUserData)); //приводит строку к объекту

console.log(localStorage);

//методы locakStorage

localStorage.setItem("my-data", JSON.stringify({ userName: "Mango", age: 22 }));

const savedData = localStorage.getItem("my-data");
console.log("savedData", savedData); //видим что это строка

const parsedData = JSON.parse(savedData);
console.log("parsedData", parsedData); //видим что это полноценный объект JS

//console.log(localStorage.clear()); //очищает хранилище
