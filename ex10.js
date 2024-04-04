
// 1. Mục tiêu
// phân biệt các loại toán tử tăng.

// 2. Mô tả
// Cho đoạn mã sau, tính toán giá trị của result và giá trị của biến a sau khi thực hiện chương trình
// và giải thích sự khác nhau giữa ++a và a++ bằng comment trong code.

// let a = 6;
// let result = ++a + a + a++ + ++a + a;

let a = 6;
// let result = a++; // hiện thị giá trị trước khi tăng a = 6. in ra giá trị result = 6. giá trị của biến sẽ tăng lên một đơn vị khi biểu thức kết thúc và in ra a = 7
// let result = ++a; // hiện thị giá trị sau khi tăng a = 7. result = 7. Kêt quả trả về sau khi cộng a = 7

let result = ++a + a + a++ + ++a + a;
// giải thích:
// a++ = 7
//  giá trị trả về a = 7
// a++ giá trị trả về a++ = 7
// sau đó giá trị trả về cho a = 8
// ++a giá trị trả về sau khi cộng là 9
// giá trị trả về a là 9
// -> 7 + 7 + 7 + 9 + 9 = 39, result = 39
console.log("Giá trị của result: ", result);