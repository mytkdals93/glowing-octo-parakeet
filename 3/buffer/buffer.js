const buffer = Buffer.from("저를 버퍼로 바꿔보세요");

console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [
  Buffer.from("띄엄1"),
  Buffer.from("띄엄2"),
  Buffer.from("띄엄3"),
  Buffer.from("마지막 버퍼"),
];

console.log(Buffer.concat(array).toString());

//5 byte자리 빈 버퍼 만들기
console.log(Buffer.alloc(5));
