document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sign').onclick = function(event) {
        // Ngăn chặn biểu mẫu được gửi
        event.preventDefault();
        
        // Lấy dữ liệu từ các trường nhập liệu
        var username = document.getElementById('name').value;
        var phonenumber = document.getElementById('sdt').value;
        var email = document.getElementById('email').value;
        var pass = document.getElementById('pass').value;
        var checkpass = document.getElementById('checkpass').value;
        
        // Kiểm tra độ dài của số điện thoại
        if (phonenumber.length !== 10) {
            alert('Số điện thoại phải có đúng 10 ký tự.');
            return;
        }

        // Kiểm tra độ dài của email
        if (email.length >= 50) {
            alert('Địa chỉ email quá dài, vui lòng nhập email ngắn hơn 50 ký tự.');
            return;
        }

        // Kiểm tra mật khẩu
        if (pass !== checkpass) {
            alert('Mật khẩu xác nhận không khớp.');
            return;
        }

        // Nếu tất cả các điều kiện đều đúng, tiến hành xử lý biểu mẫu
        alert('Đăng ký thành công!');
    };
});

document.getElementById('cancel').onclick = function() {
    //xoa thong tin o input
    document.getElementById('name').value = '';
    document.getElementById('sdt').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('checkpass').value = '';

};
