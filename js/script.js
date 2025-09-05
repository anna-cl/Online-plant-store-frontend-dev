"use strict";

// Price change on cart.html
function update_amount(index_num) {
    let quantity = document.getElementById('quantity_' + index_num).value;
    quantity = parseInt(quantity);

    let price = document.getElementById('price_' + index_num).textContent;
    price = parseInt(price);

    // alert(quantity + "price " + price); //for test only

    let amount = quantity * price;

    if (quantity > 0) {
        document.getElementById('amount_' + index_num).textContent = amount;
        
        let amount_1 = parseInt(document.getElementById('amount_1').textContent);
        let amount_2 = parseInt(document.getElementById('amount_2').textContent);
        let subtotal = amount_1 + amount_2;
        document.getElementById('subtotal').textContent = '$' + subtotal;
        document.getElementById('total').textContent = '$' + subtotal;
    } else {
        document.getElementById('amount_' + index_num).textContent = "Invalid quantity";
        document.getElementById('subtotal').textContent = "Invalid quantity";
        document.getElementById('total').textContent = "Invalid quantity";
    }

}

// Used at add cart button in product page
document.getElementById("add_to_cart_button").onclick = function () {
    location.href = "cart.html";
};
