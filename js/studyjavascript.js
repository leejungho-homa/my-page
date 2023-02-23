function inHTML(content) {
  const MAIN = document.querySelector(".result2");
  const span = document.createElement("span");
  const inspan = MAIN.appendChild(span);
  inspan.innerHTML = `${content}`;
}
function Text(content) {
  return JSON.stringify(content);
}

// study

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

//부모의 부모를 상속하는 법 (진정한 constructor)

class grandpa {
  constructor(name) {
    this.first = "김";
    this.last = name;
  }
  sayHi() {
    console.log("안녕 나는 할아버지");
  }
}

class father extends grandpa {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  sayHi2() {
    console.log("안녕 나는 아버지");
    super.sayHi();
  }
}

var good = new father("만수", 55);
inHTML(Text(good));
inHTML(good.sayHi2);

// getter,setter 사용

let data = {
  odd: [],
  even: [],
  get getter() {
    return [...this.odd, ...this.even].sort(function (a, b) {
      return a - b;
    });
  },
  set setter(rest) {
    rest.forEach((a) => {
      if (a % 2 == 1) {
        this.odd.push(a);
      } else {
        this.even.push(a);
      }
    });
  },
};
data.setter = [1, 2, 3, 6, 9, 10, 5, 24, 100, 90];
console.log(data.getter);
// 왜 setter 속 parameter에는 rest 함수가 안될까..? parameter로 ...rest는 안됨

//
