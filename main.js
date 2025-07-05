// The main variables
const options = document.querySelectorAll(".option input");
const copyIcon = document.querySelector(".input-box span");
const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-indicator");
const generateBtn = document.querySelector(".generate-btn");
const passStrengthText = document.getElementById("passStrengthText");
const lengthSlider = document.querySelector(".pass-length input");


const crypto = window.crypto || window.msCrypto;

const characters = {
  // array of letters, numbers & symbols ect..
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "~!@#$%^&*()_+-=[]{}|;:?<>,.",
};

// code to create a password
const generatePassword = () => {
  let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

  options.forEach((option) => {
    // looping through each option's checkbox
    if (option.checked) {
      // if checkbox is checked
      // if checkbox id isn't exc-duplicate && spaces
      if (option.id !== "exc-duplicate" && option.id !== "spaces") {
        // adding particular key value from character obj to staticPassword
        staticPassword += characters[option.id];
      } else if (option.id == "spaces") {
        // if checkbox id is spaces
        staticPassword += ` ${staticPassword} `; //adding spaces at the beginning & end staticPassword
      } else {
        // else pass true value to excludeDuplicate
        excludeDuplicate = true;
      }
    }
  });
  const getRandomChar = () => {
    const uint32Array = new Uint32Array(1);
    crypto.getRandomValues(uint32Array);
    const randomIndex = uint32Array[0] % staticPassword.length;
    return staticPassword.charAt(randomIndex);
  };
  for (let i = 0; i < passLength; i++) {
    // getting random character from the static password
    let randomChar = getRandomChar();
    if (excludeDuplicate) {
      // if excludeDuplicate is true then
      // if randomPassword doesn't contains the current random character or randomChar is equal
      // to spaces " " then add random character to randomPassword else decrement i by -1
      !randomPassword.includes(randomChar) || randomChar == " "
        ? (randomPassword += randomChar)
        : i--;
    } else {
      // equal add random character to randomPassword
      randomPassword += randomChar;
    }
  }
  passwordInput.value = randomPassword; // passing randomPassword to passwordInput value
};

// Suggested Password code


const suggestedPassword = () => {
  const length = Math.max(3, Math.min(lengthSlider.value, 30)); // Ensure password length is between 3 and 30
  let password = "";

  const characterSets = {
    lowercase: characters.lowercase,
    uppercase: characters.uppercase,
    numbers: characters.numbers,
    symbols: characters.symbols,
  };

  // Ensure at least one of each character type
  const requiredCharTypes = new Set(Object.keys(characterSets));
  while (requiredCharTypes.size > 0) {
    const randomCharTypeIndex = getRandomInt(0, requiredCharTypes.size - 1);
    const randomCharType = Array.from(requiredCharTypes)[randomCharTypeIndex];
    const randomCharIndex = getRandomInt(0, characterSets[randomCharType].length - 1);
    const randomChar = characterSets[randomCharType][randomCharIndex];
    password += randomChar;
    requiredCharTypes.delete(randomCharType);
  }

  // Generate remaining characters
  const allCharacters = Object.values(characterSets).join("");
  for (let i = password.length; i < length; i++) {
    const randomIndex = getRandomInt(0, allCharacters.length - 1);
    const randomChar = allCharacters.charAt(randomIndex);
    password += randomChar;
  }

  // Shuffle the password for better randomness
  const passwordArray = password.split("");
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = getRandomInt(0, i);
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }
  password = passwordArray.join("");

  document.getElementById("passwordInput").value = password;
};

const getRandomInt = (min, max) => {
  const uint32Array = new Uint32Array(1);
  crypto.getRandomValues(uint32Array);
  const randomInt = uint32Array[0] % (max - min + 1) + min;
  return randomInt;
};

// password length in words
let PASS_STRENGTH_WEAK = "weak";
let PASS_STRENGTH_MEDIUM = "medium";
let PASS_STRENGTH_STRONG = "strong";
let PASS_STRENGTH_POWERFUL = "powerful";

const updatePassIndicator = () => {
  let passStrength = "";
  passIndicator.id =
    lengthSlider.value <= 8
      ? (passStrength = PASS_STRENGTH_WEAK)
      : lengthSlider.value <= 16
      ? (passStrength = PASS_STRENGTH_MEDIUM)
      : lengthSlider.value <= 21
      ? (passStrength = PASS_STRENGTH_STRONG)
      : (passStrength = PASS_STRENGTH_POWERFUL);
  passStrengthText.textContent = "" + passStrength;
};
const updateSlider = () => {
  //passing slider value as counter text
  document.querySelector(".pass-length span").textContent = lengthSlider.value;

  updatePassIndicator(); // Variable to update states
};
updateSlider();

const copyPassword = () => {
  if (passwordInput.value === "") {
    // If there is no generated password, do not perform action and show message.
    alert("First generates a password before copying it.");
    return;
  }
  navigator.clipboard.writeText(passwordInput.value); // copy the password generated
  copyIcon.textContent = "check"; // change the copy icon to tick
  setTimeout(() => {
    // after 1500 ms, change the tick icon back to copy
    copyIcon.textContent = "copy_all";
  }, 1500);
};

copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);



//toggle btn Sound

function sound() {
  let snd = new Audio("audio/click.mp3"); //wav is also supported
  snd.play(); //plays the sound
}

//btn password generator Sound
function btnSound() {
  let snd = new Audio("audio/press.mp3"); //wav is also supported
  snd.play(); //plays the sound
}

function theSound() {
  let snd = new Audio("audio/touch.mp3"); //wav is also supported
  snd.play(); //plays the sound
}

// sound fx  toggle

function toggleAllSounds() {
  // Get a reference to the checkbox `sound-toggle`.
  let soundToggle = document.querySelector("#sound-toggle");

  // Check the state of the checkbox.
  if (!soundToggle.checked) {
    // Disable all `onclick="sound()"` and `onclick="btnSound()"`.
    let soundElements = document.querySelectorAll("[onclick='sound()']");
    for (let i = 0; i < soundElements.length; i++) {
      soundElements[i].onclick = null;
    }

    let btnSoundElements = document.querySelectorAll("[onclick='btnSound()']");
    for (let i = 0; i < btnSoundElements.length; i++) {
      btnSoundElements[i].onclick = null;
    }

    let btnSuggestedElements = document.querySelectorAll(
      "[onclick='btnSound()']"
    );
    for (let i = 0; i < btnSuggested.length; i++) {
      btnSuggestedElements[i].onclick = null;
    }

    let btnSoundElements2 = document.querySelectorAll("[onclick='theSound()']");
    for (let i = 0; i < btnSoundElements2.length; i++) {
      btnSoundElements2[i].onclick = null;
    }

    let btnSuggestedElements2 = document.querySelectorAll(
      "[onclick='theSound()']"
    );
    for (let i = 0; i < btnSuggested.length; i++) {
      btnSuggestedElements2[i].onclick = null;
    }
  } else {
    // Enable all `onclick="sound()"` and `onclick="btnSound()"`.
    let soundElements = document.querySelectorAll("[onclick='sound()']");
    for (let i = 0; i < soundElements.length; i++) {
      soundElements[i].onclick = sound;
    }

    let btnSoundElements = document.querySelectorAll("[onclick='btnSound()']");
    for (let i = 0; i < btnSoundElements.length; i++) {
      btnSoundElements[i].onclick = btnSound;
    }
    let btnSuggestedElements = document.querySelectorAll(
      "[onclick='btnSound()']"
    );
    for (let i = 0; i < btnSuggestedElements.length; i++) {
      btnSuggestedElements[i].onclick = btnSound;
    }

    let btnSoundElements2 = document.querySelectorAll("[onclick='theSound()']");
    for (let i = 0; i < btnSoundElements2.length; i++) {
      btnSoundElements2[i].onclick = theSound;
    }
    let btnSuggestedElements2 = document.querySelectorAll(
      "[onclick='theSound()']"
    );
    for (let i = 0; i < btnSuggestedElements2.length; i++) {
      btnSuggestedElements2[i].onclick = theSound;
    }
  }
}

//Suggested toggle variables
const toggle = document.getElementById("mpass-toggle");
const button = document.getElementById("btnSuggested");
const allToggle = document.getElementById("allToggles");
const btnGenerate = document.getElementById("btnLetters");
const settingImg = document.getElementById("setting-pass");
const settingLabel = document.getElementById("top-label");

function updateButtonVisibility() {
  const isButtonVisible = toggle.checked;

  button.style.visibility = isButtonVisible ? "visible" : "hidden";
  btnGenerate.style.opacity = isButtonVisible ? "0.5" : "1";  
  btnGenerate.style.pointerEvents = isButtonVisible ? "none" : "auto";
  allToggle.style.opacity = isButtonVisible ? "0.5" : "1";
  allToggle.style.pointerEvents = isButtonVisible ? "none" : "auto";
  settingImg.style.opacity = isButtonVisible ? "0.5" : "1";
  settingImg.style.pointerEvents = isButtonVisible ? "none" : "auto";
  settingLabel.style.opacity = isButtonVisible ? "0.5" : "1";
  settingLabel.style.pointerEvents = isButtonVisible ? "none" : "auto";
}

// Initial check on page load
const isButtonVisible = toggle.checked;
button.style.visibility = isButtonVisible ? "visible" : "hidden";
btnGenerate.style.opacity = isButtonVisible ? "0.5" : "1";
btnGenerate.style.pointerEvents = isButtonVisible ? "none" : "auto";
allToggle.style.opacity = isButtonVisible ? "0.5" : "1";
allToggle.style.pointerEvents = isButtonVisible ? "none" : "auto";
settingImg.style.opacity = isButtonVisible ? "0.5" : "1";
settingImg.style.pointerEvents = isButtonVisible ? "none" : "auto";
settingLabel.style.opacity = isButtonVisible ? "0.5" : "1";
settingLabel.style.pointerEvents = isButtonVisible ? "none" : "auto";
toggle.addEventListener("click", updateButtonVisibility);




//Add Adv Settings button
const addListBtn = document.querySelector(".toggle-btn");
const settingBtn = document.querySelector(".setting-btn");
const h2Element = document.getElementById("h2-title");
const sideLibraryContainer = document.getElementById("sideLibrary");
const searchInput = document.getElementById("search-input");
const sideSettingContainer = document.getElementById("sideSetting");

// Store the original innerHTML , referent a languages
let originalInnerHTML = h2Element.innerHTML;
let originalTextContent = "Password Generator";
let extraSettingsText = "Extra Settings";
let addListText = "Add List";

function updateTextsEsp() {
  extraSettingsText = "Ajustes Extra";
  originalTextContent = "Gen. de Contraseñas";
  addListText = "Añadir a Lista";

  h2Element.innerHTML = extraSettingsText;
  // Update other HTML elements as needed
}
function updateTextsEn() {
  extraSettingsText = "Extra Settings";
  originalTextContent = "Password Generator";
  addListText = "Add List";

  h2Element.innerHTML = extraSettingsText;
  // Update other HTML elements as needed
}
function updateTextsCn() {
  extraSettingsText = "额外设置";
  originalTextContent = "密码生成器";
  addListText = "添加列表";

  h2Element.innerHTML = extraSettingsText;
  // Update other HTML elements as needed
}

function updateTextsIn() {
  extraSettingsText = "अतिरिक्त सेटिंग्स";
  originalTextContent = "पासवर्ड जनरेटर";
  addListText = "सूची जोड़ें";

  h2Element.innerHTML = extraSettingsText;
  // Update other HTML elements as needed
}

// Add click event listener to setting button, referent to logic of screen behavior
settingBtn.addEventListener("click", () => {
  // Check if the h2 element already has the new text content
  if (h2Element.innerHTML === extraSettingsText) {
    // If yes, switch back to the original text content
    h2Element.innerHTML = originalTextContent;
    // Show a div "#sideSetting"
    document.querySelector("#sideSetting").style.display = "block";
  } else {
    // Otherwise, switch to the new text content
    h2Element.innerHTML = extraSettingsText;
    // Hide div "#sideSetting"
    document.querySelector("#sideSetting").style.display = "none";
  }
});

// Add click event listener to add library button
addListBtn.addEventListener("click", () => {
  // Check if the h2 element already has the new text content
  if (h2Element.innerHTML === addListText) {
    // If yes, switch back to the original text content
    h2Element.innerHTML = originalTextContent;
    // Show a div "#sideLibrary"
    document.querySelector("#sideLibrary").style.display = "block";
  } else {
    // Otherwise, switch to the new text content
    h2Element.innerHTML = addListText;
    // Hide div "#sideLibrary"
    document.querySelector("#sideLibrary").style.display = "none";
  }
});

// Add a variable to store the current visibility of the sideLibrary and sideSetting containers
let sideLibraryVisible = false;
let sideSettingVisible = false;

// Add a click event listener to the addListBtn button
addListBtn.addEventListener("click", () => {
  // Toggle the visibility of the sideLibrary container
  sideLibraryVisible = !sideLibraryVisible;
  if (sideLibraryVisible) {
    sideLibraryContainer.style.display = "block";
  } else {
    sideLibraryContainer.style.display = "none";
  }

  // Toggle the visibility of the sideSetting container
  sideSettingVisible = false;
  sideSettingContainer.style.display = "none";
});

// Add a click event listener to the settingBtn button
settingBtn.addEventListener("click", () => {
  // Toggle the visibility of the sideSetting container
  sideSettingVisible = !sideSettingVisible;
  if (sideSettingVisible) {
    sideSettingContainer.style.display = "block";
  } else {
    sideSettingContainer.style.display = "none";
  }

  // Toggle the visibility of the sideLibrary container
  sideLibraryVisible = false;
  sideLibraryContainer.style.display = "none";
});

function btnResetAll() {
  // Get the password input element
  const passwordInput = document.querySelector(".input-box input");
  const copyIcon = document.querySelector(".input-box span");
  const passLenSpan = document.querySelector(".pass-len");
  const passStrengthText = document.getElementById("passStrengthText");

  // Reset the value of the password input to empty string
  passwordInput.value = "";

  // Do not reset the value of the copyIcon

  copyIcon.textContent = "content_copy";

  // Reset the value of the length slider
  document.querySelector(".pass-length input").value = 16;

  // Reset the value of the pass indicator
  document.querySelector(".pass-indicator").id = "medium";

  // Uncheck all the checkboxes EXCEPT the checkbox with id "lowercase"
  const options = document.querySelectorAll(".option input");
  for (const option of options) {
    if (option.id !== "lowercase") {
      option.checked = false;
    }
  }
  // Set the value of the span element to 16
  passLenSpan.textContent = 16;
  // Set the value of the passStrengthText element to "medium"
  passStrengthText.textContent = "medium";
}

// Add the click event listener to the reset button
const resetButton = document.querySelector(".button");
resetButton.addEventListener("click", btnResetAll);

//image background animation
const img = document.getElementById('Sub');

function animateImage() {
  img.classList.add('shrink'); // Downsize
  setTimeout(() => {
    img.classList.remove('shrink'); // Back to original size after 2 seconds
  }, 2000); // 2 seconds of animation
}

// Execute animation every minute
setInterval(animateImage, 20000); // 20000ms = half a minute

// lock img animation
const image = document.getElementById('S-lock');
let currentImage = 1;

function fadeInOut() {
  // Add the 'fade-out' class to start the fade-out animation
  image.classList.add('fade-out');

  // After 8.5 seconds, switch the image and start the fade-in
  setTimeout(() => {
    // Toggle between images
    currentImage = currentImage === 1 ? 2 : 1;
    image.src = `img/Sub_lock_${currentImage}.png`;

    // Ensure a smooth transition by resetting classes before adding 'fade-in'
    image.classList.remove('fade-out');
    void image.offsetWidth; // Trigger reflow to restart the animation
    image.classList.add('fade-in');

    // After the fade-in duration, remove 'fade-in' and call fadeInOut again
    setTimeout(() => {
      image.classList.remove('fade-in');
      fadeInOut(); // Repeat the cycle
    }, 8500);
  }, 8500);
}

// Start the animation when the page loads
fadeInOut();


//Logic for input-name , convert in url
const inputs = document.querySelectorAll("input.input-n");
inputs.forEach((input) => {
  let urlPrefixWritten = false;

  input.addEventListener("blur", () => {
    const inputValue = input.value.trim();
    if (inputValue !== "" && !urlPrefixWritten) {
      const urlPrefix = `https://${inputValue}`;
      input.value = urlPrefix;
      urlPrefixWritten = true;
    } else if (inputValue === "") {
      input.value = "";
    }
  });
});
