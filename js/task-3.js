const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");
input.addEventListener("input", (event) => {
    span.textContent = event.currentTarget.value.trim();
})