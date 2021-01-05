console.log(this);
console.log(this === module.exports);
console.log(this === exports);
function a() {
  console.log(this);
  console.log(this === global || this === globalThis || globalThis === global);
}
a();
