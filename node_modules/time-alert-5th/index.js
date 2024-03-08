const notifier = require('node-notifier');
const cron = require('node-cron');

// Hàm hiển thị thông báo
function showNotification() {
    notifier.notify({
        title: 'Nghỉ ngơi!',
        message: 'Hãy nghỉ ngơi 15 phút.',
        sound: true, // Phát âm thanh thông báo
        wait: true // Đợi người dùng đóng thông báo trước khi chạy tiếp
    });
}

// Lên lịch hiển thị thông báo mỗi 2 tiếng
cron.schedule('0 */2 * * *', () => {
    showNotification();
});
