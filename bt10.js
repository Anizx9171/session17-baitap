// Viết một lớp các đối tượng điện thoại lấy tên là Mobile, mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:
// Có một thông số về trạng thái pin tính bằng đơn vị số nguyên(tối đa 100 đv).
// Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
// Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
// Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
// Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
// Có chức năng bật và tắt điện thoại.
// Có chức năng xạc pin điện thoại.
// Có chức năng soạn tin nhắn.
// Có chức năng nhận tin nhắn từ một chiếc mobile khác.
// Có chức năng gửi tin nhắn tới một chiếc mobile khác.
// Có chức năng xem tin trong hộp thư đến.
// Có chức năng xem tin đã gửi.
// Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
// Các chức năng không thể hoạt động nếu điện thoại chưa bật.
// Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
// Có một chiếc điện thoại nokia và một chiếc iphone
// Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ và gửi cho chiếc iphone Chiếc iphone kiểm tra inbox và hiển thị tin đó.
class Mobile {
    pin;
    soanTinNhan = "";
    hopThuDen = [];
    hopThuDi = [];
    status = true;
    constructor(pin) {
        if (pin < 1 || pin > 100) {
            this.pin = 80;
        } else {
            this.pin = pin;
        }
        this.checkOnOff = (value) => { // kiểm tra trạng thái bật hay tắt
            if (!this.status) {
                return
            }
            this.pin--;
            return this.status;
        }
        this.setOnOff = (value) => {  // chức năng bật và tắt điện thoại
            if (!this.status) {
                this.pin--;
                return
            }
            this.status = value;
            this.pin--;
        }
        this.dangSacPin = () => {   // chức năng xạc pin
            console.log("Đang sạc pin");
            this.pin++;
        }
        this.dangSoanTinNhan = (value) => { // chức năng soạn tin nhắn
            if (!this.status) {
                return
            }
            this.soanTinNhan = value
            this.pin--;

        }
        this.nhanTinNhan = (value) => {    // chức năng nhận tin nhắn từ một chiếc mobile khác
            if (!this.status) {
                return
            }
            this.hopThuDen.push(value) 
            this.pin--;

        }
        this.tinDaGui = (phone) => { //chức năng gửi tin nhắn tới một chiếc mobile khác.
            if (!this.status) {
                return
            }
            this.hopThuDi.push(this.soanTinNhan) // nokia gui di
            phone.nhanTinNhan(this.soanTinNhan) // phone.hopthuden.push(value)
            this.soanTinNhan = ""
            this.pin--;

        }
        this.xemTinHopThuDen = () => { // xem tin hộp thư đến
            if (!this.status) {
                return
            }
            this.pin--;
            return this.hopThuDen

        }
        this.xemTinDaGui = () => { // xem tin đã gửi
            if (!this.status) {
                return
            }
            this.pin--;
            return this.hopThuDi

        }

    }
}

// Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
// Có một chiếc điện thoại nokia và một chiếc iphone
let nokia = new Mobile(30);
let iphone = new Mobile(45);
// Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ và gửi cho chiếc iphone Chiếc iphone kiểm tra inbox và hiển thị tin đó.
nokia.dangSoanTinNhan("Black Pink")
nokia.tinDaGui(iphone)
console.log(iphone.xemTinHopThuDen());