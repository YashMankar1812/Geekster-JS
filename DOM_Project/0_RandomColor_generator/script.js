// let conatiner = document.querySelector(".container");

// for(let i =0;i<30;i++){
//     let div = `<div class="color_container"></div>`;
//     conatiner.innerHTML += div;
//     console.log(div);
// }




// function randomColor(){
//     let chars = "0123456789abcdef";
//     let color = "#";
//     for(let i=0;i<6;i++){
//         let randomNumber = Math.floor(Math.random() * chars.length);
//         color += chars[randomNumber];
//     }
//     return color;
// }



// function generateColors(){ 
//     let colorContainer = document.querySelectorAll(".color_container");
//     console.log(colorContainer);
    
//     colorContainer.forEach((ele)=>{
//         let newColor = randomColor();
//         ele.style.background = newColor;
//         ele.innerText = newColor;
//     })
    
// }
// window.addEventListener("load", generateColors);



document.addEventListener('DOMContentLoaded', () => {
    const colorGrid = document.getElementById('color-grid');
    const generateBtn = document.getElementById('generate-btn');
    const copyAllBtn = document.getElementById('copy-all-btn');
    const notification = document.getElementById('notification');
    
    // Generate initial palette
    generateColorPalette();
    
    // Event listeners
    generateBtn.addEventListener('click', generateColorPalette);
    copyAllBtn.addEventListener('click', copyAllColors);
    
    // Generate random color
    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Generate color palette
    function generateColorPalette() {
        colorGrid.innerHTML = '';
        
        for (let i = 0; i < 30; i++) {
            const color = generateRandomColor();
            const colorCard = document.createElement('div');
            colorCard.className = 'color-card';
            colorCard.innerHTML = `
                <div class="color-display" style="background-color: ${color}">
                    <div class="copy-icon">
                        <i class="fas fa-copy"></i>
                    </div>
                </div>
                <div class="color-value">${color}</div>
            `;
            
            colorCard.addEventListener('click', () => copyToClipboard(color));
            colorGrid.appendChild(colorCard);
        }
    }
    
    // Copy single color to clipboard
    function copyToClipboard(color) {
        navigator.clipboard.writeText(color).then(() => {
            showNotification(`Copied: ${color}`);
        });
    }
    
    // Copy all colors to clipboard
    function copyAllColors() {
        const colorValues = Array.from(document.querySelectorAll('.color-value'))
            .map(el => el.textContent)
            .join('\n');
        
        navigator.clipboard.writeText(colorValues).then(() => {
            showNotification('All colors copied to clipboard!');
        });
    }
    
    // Show notification
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
});