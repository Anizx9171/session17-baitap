// Viết một lớp các đối tượng hình chữ nhật lấy tên là Rectangle, mỗi hình chữ nhật đều có những đặc tính sau:
// 1.Có thông số chiều dài(int).
// 2.Có thông số chiều rộng(int).
// 3.Có tính năng tính diện tích.
// 4.Có tính năng tính chu vi.
let a = +prompt("Hãy nhập độ dài cạnh a")
let b = +prompt("Hãy nhập độ dài cạnh c")
class Rectangle {
    constructor(a, b, color) {
        this.a = a;
        this.b = b;
        // tính chu vi và diện tích
        this.perirmeter = 2 * (this.a + this.b)
        this.area = this.a * this.b

    }
}


let rectangle = new Rectangle(a, b, "red")
console.log(rectangle);