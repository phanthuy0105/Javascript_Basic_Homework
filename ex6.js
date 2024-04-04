
// 1. Mục tiêu
// Luyện tập sử dụng toán tử và biểu thức.

// 2. Mô tả
// Viết chương trình yêu cầu nhập một giá trị là độ C (Celsius) và chuyển nó sang độ F (Fahrenheit)
// In kết quả ra màn hình console. [Hướng dẫn: C/5 = (F-32)/9].

// C/5 = (F-32)/9 -> 9*C = 5*(F - 32) -> F - 32 = 9*C/5 -> F = (9*C/5) + 32

let Celsius = +prompt("Nhập giá trị độ C: ");

let Fahrenheit = (9 * Celsius / 5) + 32;

console.log("Kết quả của độ F là: " + Fahrenheit);
