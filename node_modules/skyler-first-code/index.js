// Using CommonJS require
const axios = require('axios'); // Sử dụng package axios
// index.js

// Định nghĩa một hàm mới trả về thông tin user từ một API bằng axios
async function getUserInfo() {
    try {
        const response = await axios.get('https://api.example.com/user');
        return response.data; // Trả về dữ liệu user từ API
    } catch (error) {
        console.error('Error fetching user info:', error);
        return null;
    }
}

module.exports = getUserInfo; // Export hàm getUserInfo để có thể sử dụng bên ngoài
