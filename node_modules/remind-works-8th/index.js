const schedule = require('node-schedule');

// Danh sách các ghi chú nhắc nhở hàng ngày
const dailyReminders = [
    "Hãy tập thể dục mỗi buổi sáng!",
    "Đừng quên uống nước đầy đủ mỗi ngày!",
    "Hãy đọc sách ít nhất 30 phút mỗi ngày!",
    "Nhớ làm việc nhà đúng giờ!",
    "Đừng quên kiểm tra email hàng ngày!"
];

// Hàm tạo công việc nhắc nhở hàng ngày
function createDailyReminderJob(reminder) {
    // Tạo công việc nhắc nhở hàng ngày lúc 8 giờ sáng
    const job = schedule.scheduleJob('0 8 * * *', function() {
        console.log(`Nhắc nhở hàng ngày: ${reminder}`);
    });

    return job;
}

// Tạo công việc nhắc nhở cho mỗi ghi chú trong danh sách
dailyReminders.forEach(reminder => {
    createDailyReminderJob(reminder);
});
