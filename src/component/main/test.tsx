import React from "react";

//타입 추론: 처음에 들어간 값의 타입을 보고 결정한다.
let aaa = "안녕하세요";
// aaa = 3; error 발생

//타입 명시(1)
let bbb: string = "hello";
// bbb = 4; error 발생

//타입 명시(2)
let ccc: string | number = 1000;
ccc = "1000원";

// boolean 타입
let eee: boolean = true;
eee = false;

//배열 타입(1)
let fff: number[] = [1, 2, 3, 4, 5];
// fff.push("안녕하세요")  error 발생

//배열 타입(2)
let ggg: string[] = ["a", "b", "c", "d"];
// ggg.push(123);  error 발생

//배열 타입(3)
//tip: 데이터 타입을 알고 싶으면 추론을 통해 확인하기
// let hh = ["a", "b", "c", 10];
let hhh: (string | number)[] = ["a", "b", "c", 10];

//객체 타입
//추론으로 확인 해보기
interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string;
}

const profile: IProfile = {
  name: "철수",
  age: 10,
  school: "다람쥐학교",
};

//error 발생 원인: hobby 속성이 존재하지 않기 때문에 발생
//해결방법: "?": hobby를 or 타입으로 변경
// profile.name = "준구";
// profile.age = "8살";

//함수 타입
function add(num1: number, num2: number, unit: string): string {
  return num1 + num2 + unit;
}
const result = add(1000, 2000, "원");

const add1 = (num1: number, num2: number, unit: string): string => {
  return num1 + num2 + unit;
};

const result2 = add1(1000, 2000, "원");

const test = () => {
  return <div>test</div>;
};

export default test;
