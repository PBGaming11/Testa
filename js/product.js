document.addEventListener('DOMContentLoaded', (event) => {
    const buyNowLinks = document.querySelectorAll('.buy-now');

    buyNowLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn hành động mặc định của thẻ <a>

            // Lấy dữ liệu từ các thuộc tính product-*
            const id = this.getAttribute('product-id');
            const name = this.getAttribute('product-name');
            const img = this.getAttribute('product-img');
            const price = this.getAttribute('product-pice');

            //chuyển dữ liệu đến cart
            const cartItem = {id,name,img,price};
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(cartItem);
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
});
