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
let cartItems = [];
document.getElementById("add-to-cart").addEventListener('click', function(event) {
    const quantity = Number(document.getElementById("quantity").innerText);
    if (quantity > 0) {
        const checkoutBtn = document.getElementById("checkout-container");

        const selectedColorButton = document.querySelector("button.border-purple-700.w-6");
        // const selectedColor = selectedColorButton ? selectedColorButton.id.split("-")[0] : alert('Select a color first');
        let selectedColor ='';
        if (selectedColorButton) {
            selectedColor = selectedColorButton.id.split("-")[0];
            // return selectedColor;
        }
        else {
            return alert("Select a color first");
        }
        console.log(selectedColor);
        const selectedSizeButton = document.querySelector("button.border-purple-700:not(.w-6)");
        const selectedSize = selectedSizeButton ? selectedSizeButton.id.split("-")[1] : alert("Select a size");
        console.log(selectedSize);
        const itemPriceText = selectedSizeButton.innerText.split(" ")[1].split("$")[1];
        console.log(itemPriceText);
        const itemPrice = Number(itemPriceText);
        cartItems.push({
            image : selectedColor+".png",
            title: "Classy Modern Smart Watch",
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
            price: quantity * itemPrice,
        })
        console.log(cartItems);
        cartCount = cartCount + quantity;
        document.getElementById("cart-count").innerText = cartCount;
        checkoutBtn.classList.remove("hidden");
    }
    else {
        alert("Please select a quantity")
    }
})
document.getElementById("checkout-btn").addEventListener('click', function() {
    const cartModal = document.getElementById("cart-modal");
    const cartTable = document.getElementById("cart-items");
    for (let cartItem of cartItems) {
        const cartInfo = document.createElement("tr");
        cartInfo.classList.add("border-b-2");
        cartInfo.innerHTML = `
        <td class="py-2 px-4">
        <div class="flex items-center gap-3">
        <img class="w-14" src="./images/${cartItem.image}">
        <p class="font-bold">${cartItem.title}</p>
        </div>
        </td>
        <td class="py-2 px-4">${cartItem.color}</td>
        <td class="py-2 px-4">${cartItem.size}</td>
        <td class="py-2 px-4">${cartItem.quantity}</td>
        <td class="py-2 px-4">${cartItem.price}</td>
        `
        cartTable.appendChild(cartInfo);
    }
    
    cartModal.classList.remove("hidden");
})

document.getElementById("continue-shopping").addEventListener('click', function() {
    document.getElementById("cart-modal").classList.add("hidden");
})
document.getElementById("checkout").addEventListener('click', function() {
    alert("Redirecting to checkout page....");
    document.getElementById("cart-items").innerHTML = '';
    cartCount = 0;
    document.getElementById("quantity").innerText = 0;
    document.getElementById("cart-modal").classList.add("hidden");
    cartItems = [];
    let ringButton = document.querySelector("button.border-purple-700.ring-button");
    let sizeButton = document.querySelector("button.border-purple-700.wrist-size")
    console.log(ringButton);
    console.log(sizeButton);
    ringButton.classList.remove("border-purple-700");
    ringButton.classList.add("border-gray-300");
    sizeButton.classList.remove("border-purple-700");
    document.getElementById("checkout-container").classList.add("hidden");
    
})