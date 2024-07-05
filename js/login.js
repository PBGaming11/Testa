document.getElementById('login').onclick = function(event) {
    //tam dung bieu mau
    event.preventDefault();
    //lay du lieu tu input
    var username = document.getElementById('name').value;
    var password = document.getElementById('pass').value;
    if(username == "admin" && password == "admin"){
        alert('thanh cong');
    }else{
        alert('that bai');
    }
};

document.getElementById('signin').onclick = function() {
    //chuyen trang
    window.location.href = 'signin.html';

};