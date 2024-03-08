const fs = require('fs');
const readline = require('readline');
const calculator3rd = require('calculator3rd');

// Đường dẫn đến tệp chứa dữ liệu
const filePath = 'data.txt';

// Đọc dữ liệu từ tệp
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Xử lý dữ liệu đã đọc được
    processData(data);
});

// Hàm xử lý dữ liệu
function processData(data) {
    // Trích xuất thông tin muốn có từ dữ liệu
    const extractedInfo = extractInfo(data);

    // Hiển thị thông tin đã trích xuất
    console.log('Extracted information:', extractedInfo);
}

// Hàm trích xuất thông tin muốn có từ dữ liệu
function extractInfo(data) {
    // Trong ví dụ này, chúng ta giả sử dữ liệu có định dạng là các dòng văn bản
    // và chúng ta muốn lấy ra thông tin từ các dòng này
    const lines = data.split('\n');

    // Trong ví dụ này, chúng ta giả sử rằng chúng ta muốn lấy ra thông tin từ dòng đầu tiên
    const firstLine = lines[0];

    // Trả về thông tin từ dòng đầu tiên
    return firstLine;
}
