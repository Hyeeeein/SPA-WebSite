const list = [1, 2, 3, 4, 5, a, b];
const list2 = list;
const list2 = [...list];

const obj = { a: 1, b: 2, c: 3 };
// const obj2=obj 참조만 맞춘 것
const obj2 = { ...obj, c: 4, b: 1, e: 8 };
console.log(obj, obj2);

/* 결과는
{a: 1, b: 2, c: 3} {a: 1, b: 1, c: 4, e: 8} 

obj2 는 obj 을 참조한 상태로 -> ...obj
c 는 4 로, b 는 1 로 변경
e 는 8 로 추가
*/
