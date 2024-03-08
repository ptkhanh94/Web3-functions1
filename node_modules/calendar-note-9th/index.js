const Calendar = require('cli-calendar');
const readlineSync = require('readline-sync');
const fs = require('fs');

// Tạo một bảng lịch cho tháng hiện tại
const calendar = new Calendar({
    startMonth: new Date().getMonth() + 1,
    startYear: new Date().getFullYear()
});

// Hiển thị bảng lịch ra console
calendar.display();

// Hỏi người dùng nhập ghi chú cho công việc vào một ngày cụ thể
const selectedDate = readlineSync.question('Nhập ngày bạn muốn ghi chú (vd: 2024-03-01): ');
const note = readlineSync.question('Nhập ghi chú của bạn: ');

// Lưu ghi chú vào tập tin notes.txt
fs.appendFileSync('notes.txt', `${selectedDate}: ${note}\n`, 'utf8');

console.log('Ghi chú đã được lưu.');
