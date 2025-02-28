// Changing images on click
const colorButtons = document.querySelectorAll(".ring-button");

for (let i = 0; i < colorButtons.length; i++) {
    const clrBtn = colorButtons[i];
    clrBtn.addEventListener("click", function(event) {
        const clickedBtn = event.target;
        console.log(clickedBtn, "hello2");
        for(let j = 0; j< colorButtons.length; j++) {
            colorButtons[j].classList.remove('border-purple-700');
        }
        clickedBtn.classList.add('border-purple-700');
    })
      
}