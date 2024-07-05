function validateNumberInput(event) {
    var input = event.target;
    if (input.value <= 0) {
        input.value = 1;
    }
    calculateTotal();
}

document.addEventListener('DOMContentLoaded', (event) => {
    var numberInput = document.getElementById('number');
    numberInput.addEventListener('input', validateNumberInput);
    calculateTotal();
});
function calculateTotal() {
    //lấy giá trị từ number và price
    var numberInput = document.getElementById('number');
    var priceElement = document.getElementById('price');
    var price = parseFloat(priceElement.innerText); // Lấy giá trị giá và chuyển sang số
    var quantity = parseInt(numberInput.value); // Lấy giá trị số lượng và chuyển sang số

    var total = price * quantity;
    //xuất ra giá trị vào result
    document.getElementById('result').innerText = total.toFixed(0);
}

const CartItems = document.querySelector(".cart-items");


function displaycart() {
    const items = JSON.parse(localStorage.getItem("cart"));
    items.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
    <div class="cart-id">
        <p>${item.id}</p>
    </div>
    <div class="product">
        <span class="cart-name">${item.name}</span>
        <img src="${item.img}" alt="" class="cart-img" />
    </div>
    <div id="price" class="cart-price">
    ${item.price}
    </div>
    <div class="cart-number">
        <input id="number" type="number" class="number-item" value="1"/>
    </div>
    <p id="result" class="sum-price"></p>
    <div>
        <button>Delete</button>
    </div>
        `;

    CartItems.appendChild(cartItem);
    })
}

displaycart();