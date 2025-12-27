

const container= document.getElementById("container");
const rating= document.querySelectorAll(".rating");
const btn = document.getElementById("btn");

let selectedRating = "";

rating.forEach((rating) => {
    rating.addEventListener("click", (event) => {
        selectedRating = event.target.innerText;
        event.target.classList.add("active");
        rating.forEach((rating) => rating.classList.remove("active"));
    });
});
  

btn.addEventListener("click", () => {
    if (selectedRating === "") {
        alert("Please select any rating");
        return;
    }
    container.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>"We appreciate your feedback and are committed to using it to enhance our customer support experience."</p>
    `;
});

 
// Remove active 
function removeActive() {
    rating.forEach((rating) => rating.classList.remove("active"));
}

