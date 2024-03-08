const Web3 = require('web3');
const express = require('express');
const app = express();

// Khởi tạo Web3 provider
const web3 = new Web3('http://localhost:8545');

// Khởi tạo một đối tượng đại diện cho smart contract
const contractABI = []; // Define contract ABI here
const contractAddress = '0x123456789'; // Replace with your contract address
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Routes

// Đăng ký tài khoản
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0]; // Get first account as signer
    
    // Gọi hàm đăng ký tài khoản từ smart contract
    await contract.methods.register(username, password).send({ from: account });

    res.send('Đăng ký tài khoản thành công!');
});

// Đăng nhập
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Gọi hàm kiểm tra tài khoản từ smart contract
    const isValid = await contract.methods.validate(username, password).call();

    if (isValid) {
        res.send('Đăng nhập thành công!');
    } else {
        res.status(401).send('Tên đăng nhập hoặc mật khẩu không chính xác.');
    }
});

// Xem thông tin tài khoản
app.get('/account/:username', async (req, res) => {
    const username = req.params.username;

    // Gọi hàm lấy thông tin tài khoản từ smart contract
    const userInfo = await contract.methods.getAccountInfo(username).call();
    
    if (userInfo) {
        res.send(userInfo);
    } else {
        res.status(404).send('Không tìm thấy thông tin tài khoản.');
    }
});

// Khởi động server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
