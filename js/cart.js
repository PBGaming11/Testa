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