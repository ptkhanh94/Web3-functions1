const chalk = require('chalk');

// Tạo một hàm để in ra bảng chữ phát sáng màu
function printColorfulTable() {
    console.log(chalk.bold.bgYellowBright.black('  1  2  3  4  5  6  7  8  9  10 '));
    for (let i = 1; i <= 10; i++) {
        let row = `${chalk.bold.bgYellowBright.black(i + ' ')}`;
        for (let j = 1; j <= 10; j++) {
            row += `${chalk.bgRgb(255, Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)).black(' ' + (i * j).toString().padStart(2))} `;
        }
        console.log(row);
    }
}

// Gọi hàm để in ra bảng chữ phát sáng màu
printColorfulTable();
