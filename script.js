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

// Helper function to select elements
const selectElement = (selector) => document.querySelector(selector);

// Select necessary elements
const inputField = selectElement("#text");
const submitButton = selectElement(".sub");
const resetButton = selectElement(".re");
const imageContainer = selectElement(".imginner");
const displayContainer = selectElement(".img");

// Initialize the typed effect on page load
document.addEventListener("DOMContentLoaded", initializeTypedEffect);

// Function to generate QR code
const generateQRCode = () => {
  if (inputField.value) {
    let size = "500x500";
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      size = "280x280"; // Adjust size for smaller screens
    }

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${inputField.value}`;
    const qrImage = document.createElement("img");
    qrImage.src = qrCodeUrl;

    displayContainer.classList.add("display");
    imageContainer.innerHTML = ""; // Clear previous QR code if any
    imageContainer.appendChild(qrImage);
  } else {
    alert("Please enter text");
  }
};

// Event listener to reset input and image container
resetButton.addEventListener("click", () => {
  inputField.value = "";
  imageContainer.innerHTML = "";
  displayContainer.classList.remove("display");
});

// Event listener to handle QR code generation
submitButton.addEventListener("click", generateQRCode);

// Handle QR code regeneration on window resize
window.addEventListener("resize", () => {
  if (imageContainer.firstChild) {
    generateQRCode();
  }
});

// Enter key to trigger QR code generation
inputField.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    submitButton.click();
  }
});

// Event listener to reset input and image container on image container click
imageContainer.addEventListener("click", () => {
  inputField.value = "";
  imageContainer.innerHTML = "";
  displayContainer.classList.remove("display");
});
