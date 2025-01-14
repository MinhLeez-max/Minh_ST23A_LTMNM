const os = require('os');
const fs = require('fs');

// Lấy thông tin hệ thống
const systemInfo = {
    operatingSystem: os.type() + ' ' + os.release(),
    cpu: os.cpus()[0].model,
    totalRAM: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB',
    usedRAM: ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2) + ' GB',
    freeRAM: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' GB',
};

// In ra console
console.log("Thông tin cấu hình máy tính:");
console.log(systemInfo);

// Ghi thông tin vào file
const filePath = 'D:/Homework/systemInfo.txt';
const fileContent = `
Thông tin cấu hình máy tính:
Hệ điều hành: ${systemInfo.operatingSystem}
CPU: ${systemInfo.cpu}
Tổng RAM: ${systemInfo.totalRAM}
RAM đã sử dụng: ${systemInfo.usedRAM}
RAM còn trống: ${systemInfo.freeRAM}
`;

fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
        console.error('Lỗi khi ghi tệp:', err);
    } else {
        console.log(`Thông tin đã được lưu tại: ${filePath}`);
    }
});
