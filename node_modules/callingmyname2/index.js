// Sử dụng CommonJS require để import package axios
const axios = require('axios');

// Hàm getUserInfo sẽ gửi yêu cầu HTTP đến một API để lấy thông tin user
async function getUserInfo() {
    try {
        // Gửi yêu cầu GET đến API để lấy thông tin user
        const response = await axios.get('https://api.example.com/user');

        // Trả về dữ liệu user từ API
        return response.data;
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error('Error fetching user info:', error);
        return null;
    }
}

// Hàm main sẽ là nơi để bạn tự đưa ra các câu hỏi và lưu thông tin của khách hàng
async function main() {
    try {
        // Lấy thông tin user từ API
        const userInfo = await getUserInfo();

        // Kiểm tra nếu thông tin user tồn tại
        if (userInfo) {
            // Đưa ra câu hỏi cho người dùng và lưu thông tin của họ
            const customerInfo = {};

            // Ví dụ: Hỏi tên của khách hàng và lưu vào đối tượng customerInfo
            customerInfo.name = await askQuestion('What is your name?');

            // Ví dụ: Hỏi tuổi của khách hàng và lưu vào đối tượng customerInfo
            customerInfo.age = await askQuestion('How old are you?');

            // Hiển thị thông tin khách hàng đã nhập
            console.log('Customer information:', customerInfo);
        } else {
            console.log('Failed to fetch user information.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Hàm askQuestion để mô phỏng việc đưa ra câu hỏi cho người dùng
function askQuestion(question) {
    return new Promise((resolve, reject) => {
        // Giả sử rằng ở đây bạn sẽ có một cơ chế để đưa ra câu hỏi cho người dùng
        // và sau đó lắng nghe và xử lý câu trả lời từ người dùng

        // Trong ví dụ này, chúng ta sẽ giả sử rằng bạn sẽ nhập câu trả lời từ bàn phím
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Đưa ra câu hỏi và lắng nghe câu trả lời từ người dùng
        readline.question(question + ' ', (answer) => {
            // Đóng giao diện và trả về câu trả lời
            readline.close();
            resolve(answer);
        });
    });
}

// Gọi hàm main để bắt đầu quá trình nhập thông tin khách hàng và lưu trữ
main();
