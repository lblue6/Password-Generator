// All THEMES
// English
// Select all items with the "siteNames" class
const elements = document.querySelectorAll("#siteNames");

// Select all items with the "passwordNames" class
const elementsPass = document.querySelectorAll("#passwordNames");

// Theme const
const paragraphBlue = document.querySelector(".blue-tm p");
const paragraphViolet = document.querySelector(".violet-tm p");
const paragraphOrange = document.querySelector(".NeonO-tm p");
const paragraphcGreen = document.querySelector(".dbg-tm p");
const paragraphkdc = document.querySelector(".kdc-tm p");
const paragraphlpink = document.querySelector(".lpink-tm p");
const paragraphcbkChees = document.querySelector(".bkchees-tm p");
const paragraphgreenD = document.querySelector(".greenD-tm p");
const paragraphBgbk = document.querySelector(".bgbk-tm p");
// Spanish

// Obtain the reference to the image by its ID
let esFlag = document.getElementById("es");

// Add a 'click' event to the image
esFlag.addEventListener("click", function () {
  // Call both modification functions within the click event
  modifyElementsEsp();
});

// Function to modify elements in Spanish
function modifyElementsEsp() {
  PASS_STRENGTH_WEAK = "débil"; // Modify the text of the paragraph element
  PASS_STRENGTH_MEDIUM = "mediano";
  PASS_STRENGTH_STRONG = "fuerte";
  PASS_STRENGTH_POWERFUL = "poderoso";

  updatePassIndicator(); //update the name of pass Indicator

  updateTextsEsp(); //update the text in Spanish

  // Modify various elements with their respective IDs

  document.getElementById("center-label").textContent =
    "Cantidad de caracteres";
  document.getElementById("btnSuggested").textContent = "PASS SUGERIDO";
  document.getElementById("top-label").textContent = "Ajustes";
  document.getElementById("low").textContent = "Minusculas";
  document.getElementById("upper").textContent = "Mayusculas";
  document.getElementById("num").textContent = "Numeros";
  document.getElementById("dup").textContent = "No Duplicados";
  document.getElementById("inc").textContent = "Incl. Espacios";
  document.getElementById("sym").textContent = "Simbolos";
  document.getElementById("btnLetters").textContent = "GENERANDO EL PASS";
  document
    .getElementById("passwordInput")
    .setAttribute("placeholder", "Crea tu Contraseñas");
  document.getElementById("masterSpan").textContent = "Botón Sugerido";
  document.getElementById("soundFx").textContent = "Sonido";
  document.getElementById("themeSpan").textContent = "Temas";
  document.getElementById("languageSpan").textContent = "Lenguajes";
  document.getElementById("passwordNames").textContent = "Contraseña";
  document.getElementById("siteNames").textContent = "Nuevo Texto";
  paragraphBlue.textContent = "Azul";
  paragraphViolet.textContent = "Violeta";
  paragraphOrange.textContent = "Neon N.";
  paragraphcGreen.textContent = "VerdeAzul";
  paragraphkdc.textContent = "Rojo Az.";
  paragraphlpink.textContent = "Rosa Os.";
  paragraphcbkChees.textContent = "Negro Rs.";
  paragraphgreenD.textContent = "Verde";
  paragraphBgbk.textContent = "Maron V.";
  //passSettingHr.style.top = '-26px';
  // Loop through elements with #siteNames ID
  for (const element of elements) {
    element.textContent = "Nuevo Texto"; // Replace with your desired text
  }

  // Loop through elements with #passwordNames ID
  for (const element of elementsPass) {
    element.textContent = "Contraseña"; // Replace with password specific text
  }
}

//English

// Obtain the reference to the image by your ID
let usFlag = document.getElementById("us");

// Add a 'click' event to the image
usFlag.addEventListener("click", function () {
  // Call the function 'modifyElementsEng()' within the function of the event 'click'
  modifyElementsEng();
});

const elementsUs = document.querySelectorAll("#siteNames"); // Select all items with the "siteNames" class
const elementsPassUs = document.querySelectorAll("#passwordNames"); // Select all items with the "passwordNames" class

function modifyElementsEng() {
  // Modify the text of the paragraph element
  PASS_STRENGTH_WEAK = "weak";
  PASS_STRENGTH_MEDIUM = "medium";
  PASS_STRENGTH_STRONG = "strong";
  PASS_STRENGTH_POWERFUL = "powerful";

  updatePassIndicator(); //update the name of pass Indicator

  updateTextsEn(); //update the text in English
  // Modify the content inside element with the id
  document.getElementById("center-label").textContent = "Password Length"; // Modify the content of the label with id "center-label"
  document.getElementById("btnSuggested").textContent = "SUGGESTED PASS"; // Modify the text of the button with the id "btnSuggested"
  document.getElementById("top-label").textContent = "Settings"; // Modify the content of the label with the id "top-label"
  document.getElementById("low").textContent = "Lowercase"; // Modify the content inside element with the id "low"
  document.getElementById("upper").textContent = "Uppercase"; // Modify the content inside element with the id "upper"
  document.getElementById("sym").textContent = "Symbols"; // Modify the content inside element with the id "sim"
  document.getElementById("num").textContent = "Numbers"; // Modify the content inside element with the id "num"
  document.getElementById("dup").textContent = "No Duplicates"; // Modify the content inside element with the id "dup"
  document.getElementById("inc").textContent = "Include Spaces"; // Modify the content inside element with the id "inc"
  document.getElementById("btnLetters").textContent = "GENERATE PASS"; // Modify the text at the placeholder with the id "GENERATE PASS"
  document
    .getElementById("passwordInput")
    .setAttribute("placeholder", "Create your Password");
  document.getElementById("masterSpan").textContent = "Suggested Option"; // Modify the text of the button with the id "masterSpan"
  document.getElementById("soundFx").textContent = "Sound"; // Modify the text of the button with the id "soundFx"
  document.getElementById("themeSpan").textContent = "Themes";
  document.getElementById("languageSpan").textContent = "Languages";
  document.getElementById("passwordNames").textContent = "Password";
  paragraphViolet.textContent = "Violet";
  paragraphBlue.textContent = "Blue";
  paragraphOrange.textContent = "Neon O.";
  paragraphcGreen.textContent = "C. green";
  paragraphkdc.textContent = "Wonder";
  paragraphlpink.textContent = "H. pink";
  paragraphcbkChees.textContent = "Bk. chees";
  paragraphgreenD.textContent = "Green .D";
  paragraphBgbk.textContent = "Bgbk";

  // Loop through elements with #siteNames ID
  for (const element of elementsUs) {
    element.textContent = "New Text"; // Replace with your desired text
  }

  // Loop through elements with #passwordNames ID
  for (const element of elementsPassUs) {
    element.textContent = "Password"; // Replace with password specific text
  }
}

//Chinese

// Obtain the reference to the image by your ID
let cnFlag = document.getElementById("cn");

// Add a 'click' event to the image
cnFlag.addEventListener("click", function () {
  // Call the function 'modifyElementsCn()' within the function of the event 'click'
  modifyElementsCn();
});

const elementsCn = document.querySelectorAll("#siteNames"); // Select all items with the "siteNames" class
const elementsPassCn = document.querySelectorAll("#passwordNames"); // Select all items with the "passwordNames" class

function modifyElementsCn() {
  // Modify the text of the paragraph element
  PASS_STRENGTH_WEAK = "虚弱的";
  PASS_STRENGTH_MEDIUM = "中等的";
  PASS_STRENGTH_STRONG = "强的";
  PASS_STRENGTH_POWERFUL = "强大的";

  updatePassIndicator(); //update the name of pass Indicator

  updateTextsCn(); //update the text in Chinese

  document.getElementById("center-label").textContent = "密码长度"; // Modify the content of the label with id "center-label"
  document.getElementById("btnSuggested").textContent = "  建议通过  "; // Modify the text of the button with the id "btnSuggested"
  document.getElementById("top-label").textContent = "设置"; // Modify the content of the label with the id "top-label"
  document.getElementById("low").textContent = "小写"; // Modify the content inside element with the id "low"
  document.getElementById("upper").textContent = "大写"; // Modify the content inside element with the id "upper"
  document.getElementById("sym").textContent = "符号"; // Modify the content inside element with the id "sim"
  document.getElementById("num").textContent = "数字"; // Modify the content inside element with the id "num"

  // Modify the content inside element with the id "dup"
  document.getElementById("dup").textContent = "无重复"; // Modify the content inside element with the id "dup"
  document.getElementById("inc").textContent = "包含空格"; // Modify the content inside element with the id "inc"
  document.getElementById("btnLetters").textContent = "生成通行证"; // Modify the text at the placeholder with the id "GENERATE PASS"
  document
    .getElementById("passwordInput")
    .setAttribute("placeholder", "创建你的密码");
  document.getElementById("masterSpan").textContent = "主密码"; // Modify the text of the button with the id "masterSpan"
  document.getElementById("soundFx").textContent = "声音"; // Modify the text of the button with the id "soundFx"
  document.getElementById("themeSpan").textContent = "主题";
  document.getElementById("languageSpan").textContent = "语言";
  document.getElementById("passwordNames").textContent = "密码";
  paragraphViolet.textContent = "紫色";
  paragraphBlue.textContent = "蓝色的";
  paragraphOrange.textContent = "霓虹橙";
  paragraphcGreen.textContent = "绿";
  paragraphkdc.textContent = "想知道";
  paragraphlpink.textContent = "高粉色";
  paragraphcbkChees.textContent = "黑色奶酪";
  paragraphgreenD.textContent = "深绿色";
  paragraphBgbk.textContent = "陣容";

  // Loop through elements with #siteNames ID
  for (const element of elementsUs) {
    element.textContent = "新文本"; // Replace with your desired text
  }

  // Loop through elements with #passwordNames ID
  for (const element of elementsPassUs) {
    element.textContent = "密码"; // Replace with password specific text
  }
}

//hindi

// Obtain the reference to the image by your ID
let inFlag = document.getElementById("in");

// Add a 'click' event to the image
inFlag.addEventListener("click", function () {
  // Call the function 'modifyElementsCn()' within the function of the event 'click'
  modifyElementsIn();
});

const elementsIn = document.querySelectorAll("#siteNames"); // Select all items with the "siteNames" class
const elementsPassIn = document.querySelectorAll("#passwordNames"); // Select all items with the "passwordNames" class

function modifyElementsIn() {
  // Modify the text of the paragraph element
  PASS_STRENGTH_WEAK = "कमज़ोर";
  PASS_STRENGTH_MEDIUM = "मध्यम";
  PASS_STRENGTH_STRONG = "मजबूत";
  PASS_STRENGTH_POWERFUL = "शक्तिशाली";

  updatePassIndicator(); //update the name of pass Indicator

  updateTextsIn(); //update the text in Chinese

  document.getElementById("center-label").textContent = "पासवर्ड की लंबाई"; // Modify the content of the label with id "center-label"
  document.getElementById("btnSuggested").textContent = "  सुझाया गया पास  "; // Modify the text of the button with the id "btnSuggested"
  document.getElementById("top-label").textContent = "सेटिंग्स"; // Modify the content of the label with the id "top-label"
  document.getElementById("low").textContent = "लोअरकेस"; // Modify the content inside element with the id "low"
  document.getElementById("upper").textContent = "अपरकेस"; // Modify the content inside element with the id "upper"
  document.getElementById("sym").textContent = "प्रतीक"; // Modify the content inside element with the id "sim"
  document.getElementById("num").textContent = "संख्या"; // Modify the content inside element with the id "num"

  // Modify the content inside element with the id "dup"
  document.getElementById("dup").textContent = "कोई डुप्लिकेट नहीं"; // Modify the content inside element with the id "dup"
  document.getElementById("inc").textContent = "स्पेस शामिल करें"; // Modify the content inside element with the id "inc"
  document.getElementById("btnLetters").textContent = "पासवर्ड जनरेट करें"; // Modify the text at the placeholder with the id "GENERATE PASS"
  document
    .getElementById("passwordInput")
    .setAttribute("placeholder", "अपना पासवर्ड बनाएँ");
  document.getElementById("masterSpan").textContent = "सुझाया गया विकल्"; // Modify the text of the button with the id "masterSpan"
  document.getElementById("soundFx").textContent = "ध्वनि"; // Modify the text of the button with the id "soundFx"
  document.getElementById("themeSpan").textContent = "थीम";
  document.getElementById("languageSpan").textContent = "भाषाएँ";
  document.getElementById("passwordNames").textContent = "पासवर्";
  paragraphViolet.textContent = "बैंगनी";
  paragraphBlue.textContent = "नीला";
  paragraphOrange.textContent = "नियॉन ओ";
  paragraphcGreen.textContent = "सी हरा";
  paragraphkdc.textContent = "वंडर";
  paragraphlpink.textContent = "हाई पिंक";
  paragraphcbkChees.textContent = "काला चीज़";
  paragraphgreenD.textContent = "हरा डी";
  paragraphBgbk.textContent = "नीलाहरा";

  // Loop through elements with #siteNames ID
  for (const element of elementsUs) {
    element.textContent = "नया पाठ"; // Replace with your desired text
  }

  // Loop through elements with #passwordNames ID
  for (const element of elementsPassUs) {
    element.textContent = "नया पाठ"; // Replace with password specific text
  }
}

//arab

// Obtain the reference to the image by your ID
let arabFlag = document.getElementById("arab");

// Add a 'click' event to the image
arabFlag.addEventListener("click", function () {
  // Call the function 'modifyElementsCn()' within the function of the event 'click'
  modifyElementsarab();
});

const elementsarab = document.querySelectorAll("#siteNames"); // Select all items with the "siteNames" class
const elementsPassarab = document.querySelectorAll("#passwordNames"); // Select all items with the "passwordNames" class

function modifyElementsarab() {
  // Modify the text of the paragraph element
  PASS_STRENGTH_WEAK = "ضعيف";
  PASS_STRENGTH_MEDIUM = "واسطة";
  PASS_STRENGTH_STRONG = "قوي";
  PASS_STRENGTH_POWERFUL = "قوي";

  updatePassIndicator(); //update the name of pass Indicator

  updateTextsIn(); //update the text in Chinese

  document.getElementById("center-label").textContent = " طول كلمة المرور "; // Modify the content of the label with id "center-label"
  document.getElementById("btnSuggested").textContent = "المرور المقترح"; // Modify the text of the button with the id "btnSuggested"
  document.getElementById("top-label").textContent = "إعدادات"; // Modify the content of the label with the id "top-label"
  document.getElementById("low").textContent = "أحرف صغيرة"; // Modify the content inside element with the id "low"
  document.getElementById("upper").textContent = "أحرف كبيرة"; // Modify the content inside element with the id "upper"
  document.getElementById("sym").textContent = "الرموز"; // Modify the content inside element with the id "sim"
  document.getElementById("num").textContent = "أرقام"; // Modify the content inside element with the id "num"

  // Modify the content inside element with the id "dup"
  document.getElementById("dup").textContent = "لا يوجد تكرارات"; // Modify the content inside element with the id "dup"
  document.getElementById("inc").textContent = "تضمين المسافات"; // Modify the content inside element with the id "inc"
  document.getElementById("btnLetters").textContent = "إنشاء المرور"; // Modify the text at the placeholder with the id "GENERATE PASS"
  document
    .getElementById("passwordInput")
    .setAttribute("placeholder", "إنشاء كلمة المرور الخاصة بك");
  document.getElementById("masterSpan").textContent = "الخيار المقترح"; // Modify the text of the button with the id "masterSpan"
  document.getElementById("soundFx").textContent = "صوت"; // Modify the text of the button with the id "soundFx"
  document.getElementById("themeSpan").textContent = "المواضيع";
  document.getElementById("languageSpan").textContent = "اللغات";
  document.getElementById("passwordNames").textContent = "كلمة المرور";
  paragraphViolet.textContent = "بنفسجي";
  paragraphBlue.textContent = "أزرق";
  paragraphOrange.textContent = "نيون أو.";
  paragraphcGreen.textContent = "أخضر .د";
  paragraphkdc.textContent = "يتعجب";
  paragraphlpink.textContent = "ح. وردي";
  paragraphcbkChees.textContent = "جبن بك";
  paragraphgreenD.textContent = "أخضر .د";
  paragraphBgbk.textContent = "بج ب ك";

  // Loop through elements with #siteNames ID
  for (const element of elementsUs) {
    element.textContent = "نص جديد"; // Replace with your desired text
  }

  // Loop through elements with #passwordNames ID
  for (const element of elementsPassUs) {
    element.textContent = "كلمة المرور"; // Replace with password specific text
  }
}