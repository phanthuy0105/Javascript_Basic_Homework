
// 1. Mục tiêu
// Luyện tập sử dụng toán tử và biểu thức.

// 2. Mô tả
// Viết chương trình yêu cầu nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. 
// Sau đó hiển thị tổng điểm và điểm trung bình 3 môn này lên màn hình console.


let fullName = "Phan Thúy";
console.log(fullName);
let a = +prompt("Nhập điểm môn Vật lý: ");
let b = +prompt("Nhập điểm môn Hóa học: ");
let c = +prompt("Nhập điểm môn Sinh học: ");
let SUM = a + b + c;
console.log("Tổng điểm của 3 môn: " + SUM);
let dTB = (a + b + c) / 3;
console.log("Điểm trung bình cộng 3 môn: " + dTB);