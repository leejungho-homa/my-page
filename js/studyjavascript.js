// 글자갯수 구하는 함수

function words(a) {
  var result = {};
  [...a].forEach(function (b) {
    if (result[b] > 0) {
      result[b]++;
    } else {
      result[b] = 1;
    }
  });
  console.log(result);
}

words("good");

// constructor 기계

function Machine(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(
      `안녕하세요 저는 ${this.name}이고, 나이는 ${this.age}살 입니다.`
    );
  };
}

var student1 = new Machine("이정호", 27);
var student2 = new Machine("김지원", 27);

console.log(student1.sayHi());

//array 내용 제거해주기(원하는 위치 넣기)
//prototype 이용

Array.prototype.remove = function (num) {
  const length = this.length;
  const result = this.splice(num - 1, 1);
  console.log(
    `제거된 후, 값 : ${result} / 남은 갯수 : ${
      length - result.length
    }, 자료는 ${this}`
  );
};

let arr = [1, 2, 3, 4];
arr.remove(1);

//__proto__ 이용 -> 부모의 prototype을 확인시켜줌. 단순히 prototype 은 부모의 유전자를 지정해서 가져오는 것

const Parents = { name: "jungho" };
const baby = {};

baby.__proto__ = Parents;
console.log(baby.name);
