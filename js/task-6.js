function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const input = document.querySelector("input");
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");

  createButton.addEventListener("click", CreateButtonClick);
  destroyButton.addEventListener("click", DestroyButtonClick);

  function CreateButtonClick() {
    const amount = input.value;
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
    }
  }

  function DestroyButtonClick() {
    boxesContainer.innerHTML = "";
  }

  function createBoxes(amount) {
    boxesContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      size += 10;
      fragment.appendChild(div);
    }

    boxesContainer.appendChild(fragment);
  }

