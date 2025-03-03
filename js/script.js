// Changing images on click
const colorButtons = document.querySelectorAll(".ring-button");

for (let i = 0; i < colorButtons.length; i++) {
    const clrBtn = colorButtons[i];
    clrBtn.addEventListener("click", function(event) {
        const clickedBtn = event.target;
        for(let j = 0; j< colorButtons.length; j++) {
            colorButtons[j].classList.remove('border-purple-700');
            colorButtons[j].classList.add("border-gray-300");
        }
        clickedBtn.classList.add('border-purple-700');
        clickedBtn.classList.remove("border-gray-300");
         const productImage = document.getElementById("product-image");
         const color = clickedBtn.id.replace("-color", ''); 
         productImage.src = "./images/" + color +".png";
    })
      
}

function selectWristSize(size) {
    const allSizes = ["S", "M", "L", "XL"];
    for (let i = 0; i< allSizes.length; i++) {
        const sizeButton = document.getElementById("size-"+allSizes[i]);
        let singleSize = allSizes[i];
        if (size === singleSize) {
            sizeButton.classList.add("border-purple-700");
        } else {
            sizeButton.classList.remove("border-purple-700");
        }
    }
}

const quantityButtons = document.getElementsByClassName("quantity-button");
for (let quanBtn of quantityButtons) {
    quanBtn.addEventListener("click", function(event) {
        const amount = event.target.innerText === "+" ? 1 : -1;
        const initialQuantity = Number(document.getElementById("quantity").innerText);
        const nowQuantity = Math.max(0, initialQuantity + amount);
        document.getElementById("quantity").innerText = nowQuantity;
    })
}

let cartCount = 0;
let cartItem = [];
document.getElementById("add-to-cart").addEventListener('click', function(event) {
    const quantity = Number(document.getElementById("quantity").innerText);
    if (quantity > 0) {
        const checkoutBtn = document.getElementById("checkout-container");
        checkoutBtn.classList.remove("hidden");
        cartCount = cartCount + quantity;
        document.getElementById("cart-count").innerText = cartCount;

        const selectedColorButton = document.querySelector("button.border-purple-700.w-6");
        const selectedColor = selectedColorButton.id.split("-")[0];
        console.log(selectedColor);
        const selectedSizeButton = document.querySelector("button.border-purple-700:not(.w-6)");
        const selectedSize = selectedSizeButton.id.split("-")[1];
        console.log(selectedSize);
        const itemPriceText = selectedSizeButton.innerText.split(" ")[1].split("$")[1];
        console.log(itemPriceText);
        const itemPrice = Number(itemPriceText);
        cartItem.push({
            image : selectedColor+".png",
            title: "Classy Modern Smart Watch",
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
            price: quantity * itemPrice,
        })
        console.log(cartItem);
  
    }
    else {
        alert("Please select a quantity")
    }
})
document.getElementById("checkout-btn").addEventListener('click', function() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.remove("hidden");
})

document.getElementById("continue-shopping").addEventListener('click', function() {
    document.getElementById("cart-modal").classList.add("hidden");
})