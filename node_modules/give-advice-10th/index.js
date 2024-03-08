const readlineSync = require('readline-sync');

// Hàm để tạo một dãy số ngẫu nhiên
function generateRandomNumberSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(Math.floor(Math.random() * 10));
    }
    return sequence.join('');
}

// Hàm để chọn một lời khuyên ngẫu nhiên
function chooseRandomAdvice() {
    const advices = [
        'Hãy cố gắng hơn!',
        'Luôn lắng nghe trái tim của bạn.',
        'Đừng quên nghỉ ngơi đều đặn.',
        'Sáng tạo là chìa khóa cho thành công.',
        'Điều gì đến sẽ đến, hãy kiên nhẫn chờ đợi.'
    ];
    const randomIndex = Math.floor(Math.random() * advices.length);
    return advices[randomIndex];
}

// Hỏi và trả lời câu hỏi của người dùng
function askQuestion() {
    const question = readlineSync.question('Hỏi gì đó: ');

    // Tạo một dãy số ngẫu nhiên
    const randomNumberSequence = generateRandomNumberSequence(5);
    console.log(`Trả lời (dãy số): ${randomNumberSequence}`);

    // Chọn một lời khuyên ngẫu nhiên
    const advice = chooseRandomAdvice();
    console.log(`Lời khuyên: ${advice}`);
}

// Gọi hàm để hỏi và trả lời
askQuestion();
