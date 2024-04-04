
// 1. Mục tiêu
// Phân biệt toán tử so sánh “==” và “===”

// 2. Mô tả
// Chạy chương trình sau, kiểm tra kết quả trong màn hình console và giải thích bằng comment trong code:
// let a = 5;
// let b= “5”;
// console.log(a==b);  console.log(a===b);
// console.log(a!=b);  console.log(a!==b);

let a = 5;
let b = "5";

console.log(a == b); // kết quả là true. vì so sánh a == b là so sánh tương đối nên biến number và string có thể bằng nhau trong javascript
console.log(a === b); // kết quả là false. vì so sánh a === b là so sánh tuyệt đối nên biến number và string không thể bằng nhau trong javascript

console.log(a != b); // kết quả là false.  vì so sánh a != b là so sánh không nghiêm ngặt nên a khác b là sai. Number(5) = String("5")
console.log(a !== b); // kết quả là true. vì so sánh a !== b là so sánh nghiêm ngặt nên a khác b là đúng. Number(5) khác String("5")