// Initialize the typed effect
const initializeTypedEffect = () => {
  const phrases = ["Hey", "It's", "_Fatty_", "Create", "Your", "QR"];
  const options = {
    strings: phrases,
    typeSpeed: 150,
    backSpeed: 15,
    loop: true,
    cursorChar: "",
    smartBackspace: true,
    showCursor: false,
  };
  new Typed(".typing", options);
};

// Initialize the typed effect on page load
initializeTypedEffect();

// Helper function to select elements
const selectElement = (selector) => document.querySelector(selector);

// Select necessary elements
const inputField = selectElement("#text");
const submitButton = selectElement(".sub");
const resetButton = selectElement(".re");
const imageContainer = selectElement(".imginner");
const displayContainer = selectElement(".img");

// Event listener to reset input and image container
resetButton.addEventListener("click", () => {
  inputField.value = "";
  imageContainer.innerHTML = "";
});

// Event listener to handle QR code generation
submitButton.addEventListener("click", (event) => {
  if (inputField.value) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputField.value}`;
    const qrImage = document.createElement("img");
    qrImage.src = qrCodeUrl;

    displayContainer.classList.toggle("display");
    imageContainer.appendChild(qrImage);
  } else {
    alert("Please enter text");
  }
});

// Event listener to reset input and image container on image container click
imageContainer.addEventListener("click", () => {
  inputField.value = "";
  imageContainer.innerHTML = "";
  displayContainer.classList.toggle("display");
});
