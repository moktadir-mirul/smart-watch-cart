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