const readline = require('readline');
const skylerFirstCode = require('skyler-first-code');
const callingMyName2 = require('callingmyname2');

// Sử dụng các module từ các gói npm ở đây

// Tạo giao diện đọc và ghi từ dòng lệnh
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hàm tính tổng
function add(a, b) {
  return a + b;
}

// Hàm tính hiệu
function subtract(a, b) {
  return a - b;
}

// Hàm tính tích
function multiply(a, b) {
  return a * b;
}

// Hàm tính thương
function divide(a, b) {
  return a / b;
}

// Hỏi người dùng nhập phép tính và hai số
rl.question('Nhập phép tính (+, -, *, /): ', (operator) => {
  rl.question('Nhập số thứ nhất: ', (num1) => {
    rl.question('Nhập số thứ hai: ', (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      let result;

      // Thực hiện phép tính tương ứng
      switch (operator) {
        case '+':
          result = add(num1, num2);
          break;
        case '-':
          result = subtract(num1, num2);
          break;
        case '*':
          result = multiply(num1, num2);
          break;
        case '/':
          if (num2 === 0) {
            result = 'Không thể chia cho 0';
          } else {
            result = divide(num1, num2);
          }
          break;
        default:
          result = 'Phép tính không hợp lệ';
      }

      console.log(`Kết quả của phép tính ${num1} ${operator} ${num2} là: ${result}`);
      rl.close();
    });
  });
});
