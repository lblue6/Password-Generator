//Default theme (Blue)
const image_default = document.getElementById("default");
const container_default = document.querySelector(".container");
const head_default = document.querySelector(".head");
const btn_default = document.getElementById("btnLetters");
const button_default = document.querySelector(".button");
const sideContainer_default = document.querySelector(
  "#sideLibrary.side-container"
);
const sideSetting_default = document.querySelector(
  "#sideSetting.side-container"
);
const lineTheme_default = document.querySelector(".line_theme");
const lineLanguage_default = document.querySelector(".line_language");
const style_default = document.createElement("style");
const slider_default = document.querySelector(".slider");
const passStrengthColor_default = document.querySelector("#passStrengthText");
const hrs_default = document.querySelectorAll("hr");

const sideSuggestedButton_default = document.querySelectorAll(".passSuggested-btn");
const themeFont_default = document.getElementById("themeSpan");
const languageFont_default = document.getElementById("languageSpan");

image_default.addEventListener("click", function () {
  container_default.style.backgroundImage =
    "linear-gradient(195deg, #cbdfee, rgb(233, 232, 232))"; /* Change .container background */
  container_default.style.outline = "5px solid #042759";
  head_default.style.background =
    "linear-gradient(180deg, #2b5a9c, #0d57bf)"; /* New linear gradient */
  btn_default.style.background =
    "linear-gradient(195deg, #2b5a9c, #0d57bf)"; /* New linear gradient */
  button_default.style.background =
    "linear-gradient(195deg, #2b5a9c, #0d57bf)"; /* New linear gradient */
  sideSetting_default.style.backgroundImage =
    "linear-gradient(195deg, #cbdfee, rgb(214, 216, 216))"; /* New linear gradient */
  sideContainer_default.style.backgroundImage =
    "linear-gradient(195deg, #cbdfee, rgb(214, 216, 216))"; /* New linear gradient */
  lineTheme_default.style.background =
    "linear-gradient(180deg, #2b5a9c, #0d57bf)";
  lineLanguage_default.style.background =
    "linear-gradient(180deg, #2b5a9c, #0d57bf)";
  slider_default.style.backgroundImage =
    "linear-gradient(260deg, #20a8f6 0%, #aecfcb 100%)";
  passStrengthColor_default.style.color = "#000000";
  themeFont_default.style.color = "#fff";
  languageFont_default.style.color = "#fff";
  style_default.innerHTML = `
    .toggle:after { background-color: #0d57bf; }
    .settingToggle:after { background-color: #0d57bf; }
    .checkbox-1:checked+.settingToggle { background-color: #85c6f8; }
    .checkbox-2:checked+.settingToggle { background-color: #85c6f8; } 
    .checkbox:checked+.toggle { background-color: #85c6f8;} 
    .pass-len { color:#000;}
    .title { color: #000;}
    .option { color: #000;}
    .input-name span { color: #000;}
    .NeonO-tm p, .violet-tm p, .blue-tm p, .dbg-tm p, .kdc-tm p, .lpink-tm p, .bkchees-tm p, .greenD-tm p, .bgbk-tm p  { color: #000;}
    .version span, .version p { color: #000;}
    .input-p:focus ~ label, input:valid ~ label { color: #2e5894;}
    .input-n:focus ~ label, input:valid ~ label { color: #2e5894;}
    .generate-btn {box-shadow: 0px 5px 0px 0px #abc2d1;}
    .button {box-shadow: 0px 5px 0px 0px #abc2d1;}
    .passSuggested-btn { background: linear-gradient(180deg, #2e5894, #0d57bf); }
    .input-box span {color: #4c7db6;}
    .input-n:focus, input:valid {border: 1.5px solid #1a73e8;}
    .input-p:focus, input:valid {outline: none; border: 1.5px solid #1a73e8;}
    .input-p {background-color: #aad8fc;}
    .input-n {background-color: #aad8fc;}
    .input-box span:hover{color: #7e9cbe;}
    .input-box input{background: #aad8fc;}
    input[type="range"]::-webkit-slider-thumb  {background: linear-gradient(180deg, #4db7f4, #90d1f6);}
    .slider::-moz-range-thumb {background: linear-gradient(180deg, #4db7f4, #90d1f6);}
    #flags p { color: #000;}
    #masterSpan { color: #000;}
    #soundFx  { color: #000;}
    #btnSuggested {box-shadow: 0px 5px 0px 0px #abc2d1;}
    img[alt="low"], img[alt="upper"], img[alt="symbols"], img[alt="num"], img[alt="dup"], img[alt="inc"] { background-color:#aad8fc; border: 1px solid #0d57bf; }
    `;
  document.head.appendChild(style_default);

  hrs_default.forEach((hr) => {
    hr.style.borderColor = "#afafaf";
    hr.style.boxShadow = "0 1px 1px rgba(184, 183, 183, 0.5)";
  });

  const passSettingsMaterialSymbolsOutlinedElements = document.querySelectorAll(
    ".pass-settings .material-symbols-outlined"
  );
  passSettingsMaterialSymbolsOutlinedElements.forEach((element) => {
    element.style.border = "1px solid #000000";
    element.style.backgroundColor = "#1c57aa";
  });

  sideSuggestedButton_default.forEach((button) => {
    button.style.background = "linear-gradient(180deg, #1d73eb, #2e5894)";
  });
});

//Violet theme
const image_violet = document.getElementById("violet");
const container_violet = document.querySelector(".container");
const head_violet = document.querySelector(".head");
const btn_violet = document.getElementById("btnLetters");
const button_violet = document.querySelector(".button");
const sideContainer_violet = document.querySelector(
  "#sideLibrary.side-container"
);
const sideSetting_violet = document.querySelector(
  "#sideSetting.side-container"
);
const lineTheme_violet = document.querySelector(".line_theme");
const lineLanguage_violet = document.querySelector(".line_language");
const style_violet = document.createElement("style");
const slider_violet = document.querySelector(".slider");
const passStrengthColor_violet = document.querySelector("#passStrengthText");
const hrs_violet = document.querySelectorAll("hr");
const passSettingsMaterialSymbolsOutlinedElements = document.querySelectorAll(
  ".pass-settings .material-symbols-outlined"
);
const sideSuggestedButton_violet =
  document.querySelectorAll(".passSuggested-btn");
const themeFont_violet = document.getElementById("themeSpan");
const languageFont_violet = document.getElementById("languageSpan");

image_violet.addEventListener("click", function () {
  container_violet.style.backgroundImage =
    "linear-gradient(195deg,rgb(255, 230, 240), #FAF2FC)";
  container_violet.style.outline = "5px solid #4E078C";
  head_violet.style.background =
    "linear-gradient(180deg,rgb(126, 63, 181), #4E078C)";
  btn_violet.style.background =
    "linear-gradient(195deg, rgb(126, 63, 181), #4E078C)"; /* New linear gradient */
  button_violet.style.background =
    "linear-gradient(195deg, rgb(126, 63, 181), #4E078C)"; /* New linear gradient */
  sideContainer_violet.style.backgroundImage =
    "linear-gradient(180deg,rgb(255, 230, 240), #FAF2FC)";
  sideSetting_violet.style.backgroundImage =
    "linear-gradient(180deg,rgb(255, 230, 240), #FAF2FC)";
  lineTheme_violet.style.background =
    "linear-gradient(180deg,#e567d1, #803a75)";
  lineLanguage_violet.style.background =
    "linear-gradient(180deg,#e567d1, #803a75)";
  slider_violet.style.backgroundImage =
    "linear-gradient(260deg, #FE7BE1 0%, #FFE6F0 100%)";
  passStrengthColor_violet.style.color = "#000000";
  themeFont_violet.style.color = "#fff";
  languageFont_violet.style.color = "#fff";
  style_violet.innerHTML = `
    .toggle:after { background-color: #4e078c; }
    .settingToggle:after { background-color: #4e078c; }
    .checkbox-1:checked+.settingToggle{ background-color: #e567d1; }
    .checkbox-2:checked+.settingToggle { background-color: #e567d1; }
    .checkbox:checked+.toggle { background-color: #e567d1; }
    .pass-len { color:#000;}
    .title { color: #000;}
    .option { color: #000;}
    .input-name span { color: #000;}
    .NeonO-tm p, .violet-tm p, .blue-tm p, .dbg-tm p, .kdc-tm p, .lpink-tm p, .bkchees-tm p, .greenD-tm p, .bgbk-tm p  { color: #000;}
    .version span, .version p { color: #000;}
    .input-p:focus ~ label, input:valid ~ label { color: #803a75;}
    .input-n:focus ~ label, input:valid ~ label { color: #803a75;}
    .generate-btn {box-shadow: 0px 5px 0px 0px #e567d1;}
    .button {box-shadow: 0px 5px 0px 0px #e567d1;}
    .passSuggested-btn { background: linear-gradient(180deg,rgb(126, 63, 181), #4E078C); }
    .input-box span {color: #4e078c;}
    .input-n:focus, input:valid {border: 1.5px solid #FE7BE1;}
    .input-p:focus, input:valid {outline: none; border: 1.5px solid #FE7BE1;}
    .input-p {background-color: #FFE6F0;}
    .input-n {background-color: #FFE6F0;}
    .input-box span:hover{color:   #e567d1;}
    .input-box input{background: #FBF0FA;}
    input[type="range"]::-webkit-slider-thumb  {background: linear-gradient(180deg,rgb(126, 63, 181), #4E078C);}
    .slider::-moz-range-thumb {background: linear-gradient(180deg,rgb(126, 63, 181), #4E078C);}
    #flags p { color: #000;}
    #masterSpan { color: #000;}
    #soundFx  { color: #000;}
    #btnSuggested {box-shadow: 0px 5px 0px 0px #e567d1;}
    img[alt="low"], img[alt="upper"], img[alt="symbols"], img[alt="num"], img[alt="dup"], img[alt="inc"] { background-color:#FFE6F0; border: 1px solid #e567d1; }
    `;
  document.head.appendChild(style_violet);
  // setting icon color

  hrs_violet.forEach((hr) => {
    hr.style.borderColor = " #4E078C";
    hr.style.boxShadow = "0 1px 1px rgba(184, 183, 183, 0.5)";
  });

  passSettingsMaterialSymbolsOutlinedElements.forEach((element) => {
    element.style.border = "1px solid #803a75";
    element.style.backgroundColor = "#4E078C";
  });

  sideSuggestedButton_violet.forEach((button) => {
    button.style.background =
      "linear-gradient(180deg,rgb(126, 63, 181), #4E078C)";
  });
});

//Neon O theme
const image_neonO = document.getElementById("neonO");
const container_neonO = document.querySelector(".container");
const head_neonO = document.querySelector(".head");
const btn_neonO = document.getElementById("btnLetters");
const button_neonO = document.querySelector(".button");
const sideContainer_neonO = document.querySelector(
  "#sideLibrary.side-container"
);
const sideSetting_neonO = document.querySelector("#sideSetting.side-container");
const lineTheme_neonO = document.querySelector(".line_theme");
const lineLanguage_neonO = document.querySelector(".line_language");
const style_neonO = document.createElement("style");
const rangeElement_neonO = document.querySelector("input[type=range]");
const slider_neonO = document.querySelector(".slider");
const passStrengthColor_neonO = document.querySelector("#passStrengthText");
const labels_neonO = document.querySelectorAll(
  ".input-p:focus ~ label, input:valid ~ label"
);
const labelsNames_neonO = document.querySelectorAll(
  ".input-n:focus ~ label, input:valid ~ label"
);
const hrs_neonO = document.querySelectorAll("hr");
const sideSuggestedButton_neonO =
  document.querySelectorAll(".passSuggested-btn");
const themeFont_neonO = document.getElementById("themeSpan");
const languageFont_neonO = document.getElementById("languageSpan");

image_neonO.addEventListener("click", function () {
  container_neonO.style.backgroundImage =
    "linear-gradient(180deg,#444444, #afafaf)";
  container_neonO.style.outline = "5px solid #ff760d";
  head_neonO.style.background = "linear-gradient(180deg,#ffb619, #ff760d)";
  btn_neonO.style.background =
    "linear-gradient(180deg, #ffb619, #ff760d)"; /* linear gradient */
  button_neonO.style.background =
    "linear-gradient(180deg,#ffb619, #ff760d)"; /* linear gradient */
  sideContainer_neonO.style.backgroundImage =
    "linear-gradient(180deg,#444444, #afafaf)";
  sideSetting_neonO.style.backgroundImage =
    "linear-gradient(180deg,#444444, #afafaf)";
  lineTheme_neonO.style.background = "linear-gradient(180deg,#fc4c02, #ff760d)";
  lineLanguage_neonO.style.background =
    "linear-gradient(180deg,#fc4c02, #ff760d)";
  slider_neonO.style.backgroundImage =
    "linear-gradient(260deg, #fc4c02 0%, #cccccc 100%)";
  passStrengthColor_neonO.style.color = "#fff";
  themeFont_neonO.style.color = "#fff";
  languageFont_neonO.style.color = "#fff";
  style_neonO.innerHTML = `
    .toggle:after { background-color: #fc4c02; }
    .settingToggle:after { background-color: #fc4c02; }
    .checkbox-1:checked+.settingToggle{ background-color: #ffb619; }
    .checkbox-2:checked+.settingToggle { background-color: #ffb619; }
    .checkbox:checked+.toggle { background-color: #ffb619;} 
    .pass-len { color:#fff}
    .title { color: #fff}
    .option { color: #fff}
    .input-name span { color: #fff}
    .passSuggested-btn { background: linear-gradient(180deg,#ffb619, #ff760d); }
    .NeonO-tm p, .violet-tm p, .blue-tm p, .dbg-tm p, .kdc-tm p, .lpink-tm p, .bkchees-tm p, .greenD-tm p, .bgbk-tm p { color: #fff}
    .version span, .version p { color: #fff}
    .input-p:focus ~ label, input:valid ~ label { color: #fff}
    .input-n:focus ~ label, input:valid ~ label { color: #fff}
    .generate-btn {box-shadow: 0px 5px 0px 0px #cccccc;}
    .button {box-shadow: 0px 5px 0px 0px #cccccc;}
    .input-box span {color: #fc4c02;}
    .input-n:focus, input:valid {border: 1.5px solid #fc4c02;}
    .input-p:focus, input:valid {outline: none; border: 1.5px solid #fc4c02;}
    .input-p {background-color: #cccccc;}
    .input-n {background-color: #cccccc;}
    .input-box span:hover{color:   #ffb619;}
    .input-box input{background: #cccccc;}
    input[type="range"]::-webkit-slider-thumb  {background: linear-gradient(180deg,#fc4c02, #ffb619);}
    .slider::-moz-range-thumb {background: linear-gradient(180deg,#fc4c02, #ffb619);}
    #masterSpan { color: #fff}
    #soundFx  { color: #fff}
    #flags p { color: #fff}
    #btnSuggested {box-shadow: 0px 5px 0px 0px #cccccc;}
    img[alt="low"], img[alt="upper"], img[alt="symbols"], img[alt="num"], img[alt="dup"], img[alt="inc"] { background-color:#cccccc; border: 1px solid #ffb619; }
    `;
  document.head.appendChild(style_neonO);

  // setting icon color
  const passSettingsMaterialSymbolsOutlinedElements = document.querySelectorAll(
    ".pass-settings .material-symbols-outlined"
  );
  passSettingsMaterialSymbolsOutlinedElements.forEach((element) => {
    element.style.border = "1px solid #cccccc";
    element.style.backgroundColor = "#ff780d";
  });

  sideSuggestedButton_neonO.forEach((button) => {
    button.style.background = "linear-gradient(180deg,#ffb619, #ff760d)";
  });

  hrs_neonO.forEach((hr) => {
    hr.style.borderColor = "#f7f7f7";
    hr.style.boxShadow = "0 1px 1px rgba(184, 183, 183, 0.5)";
  });
});

// dbg theme

const image_dbg = document.getElementById("dbg");
const container_dbg = document.querySelector(".container");
const head_dbg = document.querySelector(".head");
const btn_dbg = document.getElementById("btnLetters");
const button_dbg = document.querySelector(".button");
const sideContainer_dbg = document.querySelector("#sideLibrary.side-container");
const sideSetting_dbg = document.querySelector("#sideSetting.side-container");
const lineTheme_dbg = document.querySelector(".line_theme");
const lineLanguage_dbg = document.querySelector(".line_language");
const style_dbg = document.createElement("style");
const rangeElement_dbg = document.querySelector("input[type=range]");
const slider_dbg = document.querySelector(".slider");
const passStrengthColor_dbg = document.querySelector("#passStrengthText");
const hrs_dbg = document.querySelectorAll("hr");
const sideSuggestedButton_dbg = document.querySelectorAll(".passSuggested-btn");
const themeFont_dbg = document.getElementById("themeSpan");
const languageFont_dbg = document.getElementById("languageSpan");

image_dbg.addEventListener("click", function () {
  container_dbg.style.backgroundImage =
    "linear-gradient(195deg, #8ba0a4, #bed9de)";
  container_dbg.style.outline = "5px solid #0e242b";
  head_dbg.style.background = "linear-gradient(180deg,#1b4552, #2b5663)";
  btn_dbg.style.background =
    "linear-gradient(180deg, #1b4552, #2b5663)"; /* linear gradient */
  button_dbg.style.background =
    "linear-gradient(180deg,#1b4552, #2b5663)"; /* linear gradient */
  sideContainer_dbg.style.backgroundImage =
    "linear-gradient(195deg, #8ba0a4, #bed9de)";
  sideSetting_dbg.style.backgroundImage =
    "linear-gradient(195deg, #8ba0a4, #bed9de)";
  lineTheme_dbg.style.background = "linear-gradient(180deg,#bababa, #a6a6a6)";
  lineLanguage_dbg.style.background =
    "linear-gradient(180deg,#bababa, #a6a6a6)";
  slider_dbg.style.backgroundImage =
    "linear-gradient(260deg, #a6a6a6 0%, #bababa 100%)";
  passStrengthColor_dbg.style.color = "#000000";
  themeFont_dbg.style.color = "#1b4552";
  languageFont_dbg.style.color = "#1b4552";
  style_dbg.innerHTML = `
    .toggle:after { background-color: #1b4552; }
    .settingToggle:after { background-color: #1b4552; }
    .checkbox-1:checked+.settingToggle{ background-color: #bababa; }
    .checkbox-2:checked+.settingToggle { background-color: #bababa; }
    .checkbox:checked+.toggle { background-color: #bababa; }
    .passSuggested-btn { background: linear-gradient(180deg,#1b4552, #2b5663); }
    .pass-len { color:#000;}
    .title { color: #000;}
    .option { color: #000;}
    .input-name span { color: #000;}
    .NeonO-tm p, .violet-tm p, .blue-tm p, .dbg-tm p, .kdc-tm p, .lpink-tm p, .bkchees-tm p, .greenD-tm p, .bgbk-tm p  { color: #000;}
    .version span, .version p { color: #000;}
    .input-p:focus ~ label, input:valid ~ label { color: #1b4552;}
    .input-n:focus ~ label, input:valid ~ label { color: #1b4552;}
    .input-box span {color: #1b4552;}
    .input-n:focus, input:valid {border: 1.5px solid #1b4552;}
    .input-p:focus, input:valid {outline: none; border: 1.5px solid #1b4552;}
    .input-p {background-color: #cccccc;}
    .input-n {background-color: #cccccc;}
    .input-box span:hover {color:   #bababa;}
    .input-box input {background: #cccccc;}
    input[type="range"]::-webkit-slider-thumb  {background: linear-gradient(180deg,#1b4552, #2b5663);}
    .slider::-moz-range-thumb {background: linear-gradient(180deg,#1b4552, #2b5663);}
    .generate-btn {box-shadow: 0px 5px 0px 0px #cccccc;} 
    .button {box-shadow: 0px 5px 0px 0px #cccccf;}   
    #flags p { color: #000;}
    #masterSpan { color: #000;}
    #soundFx  { color: #000;}
    #btnSuggested {box-shadow: 0px 5px 0px 0px #cccccc;}
    img[alt="low"], img[alt="upper"], img[alt="symbols"], img[alt="num"], img[alt="dup"], img[alt="inc"]{ background-color:#cccccc; border: 1px solid #1b4552; }
    `;

  document.head.appendChild(style_dbg);

  // setting icon color
  const passSettingsMaterialSymbolsOutlinedElements = document.querySelectorAll(
    ".pass-settings .material-symbols-outlined"
  );
  passSettingsMaterialSymbolsOutlinedElements.forEach((element) => {
    element.style.border = "1px solid #bed9de";
    element.style.backgroundColor = "#1b4552";
  });

  sideSuggestedButton_dbg.forEach((button) => {
    button.style.background = "linear-gradient(180deg,#1b4552, #2b5663)";
  });

  hrs_dbg.forEach((hr) => {
    hr.style.borderColor = "#2b5663";
    hr.style.boxShadow = "0 1px 1px rgba(184, 183, 183, 0.5)";
  });
});

// kdc theme
const image_kdc = document.getElementById("kdc");
const container_kdc = document.querySelector(".container");
const head_kdc = document.querySelector(".head");
const btn_kdc = document.getElementById("btnLetters");
const button_kdc = document.querySelector(".button");
const sideContainer_kdc = document.querySelector("#sideLibrary.side-container");
const sideSetting_kdc = document.querySelector("#sideSetting.side-container");
const lineTheme_kdc = document.querySelector(".line_theme");
const lineLanguage_kdc = document.querySelector(".line_language");
const style_kdc = document.createElement("style");
const rangeElement_kdc = document.querySelector("input[type=range]");
const slider_kdc = document.querySelector(".slider");
const passStrengthColor_kdc = document.querySelector("#passStrengthText");
const hrs_kdc = document.querySelectorAll("hr");
const sideSuggestedButton_kdc = document.querySelectorAll(".passSuggested-btn");
const themeFont_kdc = document.getElementById("themeSpan");
const languageFont_kdc = document.getElementById("languageSpan");

image_kdc.addEventListener("click", function () {
  container_kdc.style.backgroundImage =
    "linear-gradient(180deg,#ed0707, #f94d4d )";
  container_kdc.style.outline = "5px solid #051c68";
  head_kdc.style.background = "linear-gradient(180deg,#051c68, #092993)";
  btn_kdc.style.background =
    "linear-gradient(180deg, #051c68, #092993)"; /* linear gradient */
  button_kdc.style.background =
    "linear-gradient(180deg,#051c68, #092993)"; /* linear gradient */
  sideContainer_kdc.style.backgroundImage =
    "linear-gradient(180deg, #ed0707, #f94d4d)";
  sideSetting_kdc.style.backgroundImage =
    "linear-gradient(180deg, #ed0707, #f94d4d)";
  lineTheme_kdc.style.background = "linear-gradient(180deg,#f7e905, #bcb303)";
  lineLanguage_kdc.style.background =
    "linear-gradient(180deg,#f7e905, #bcb303)";
  slider_kdc.style.backgroundImage =
    "linear-gradient(260deg, #bcb303 0%, #f7e905 100%)";
  themeFont_kdc.style.color = "#092993";
  languageFont_kdc.style.color = "#092993";
  passStrengthColor_kdc.style.color = "#f7e905";
  style_kdc.innerHTML = `
    .toggle:after { background-color: #051c68; }
    .settingToggle:after { background-color: #051c68; }
    .checkbox-1:checked+.settingToggle{ background-color: #f7e905; }
    .checkbox-2:checked+.settingToggle { background-color: #f7e905; }
    .checkbox:checked+.toggle { background-color: #f7e905; }
    .passSuggested-btn { background: linear-gradient(180deg,#051c68, #092993); }
    .pass-len { color:#f7e905;}
    .title { color: #f7e905;}
    .option { color: #f7e905;}
    .input-name span { color: #f7e905;}
    .NeonO-tm p, .violet-tm p, .blue-tm p, .dbg-tm p, .kdc-tm p, .lpink-tm p, .bkchees-tm p, .greenD-tm p, .bgbk-tm p  { color: #f7e905;}
    .version span, .version p { color: #f7e905;}
    .input-p:focus ~ label, input:valid ~ label { color: #f7e905;}
    .input-n:focus ~ label, input:valid ~ label { color: #f7e905;}
    .generate-btn {box-shadow: 0px 5px 0px 0px #f2eea4;}
    .button {box-shadow: 0px 5px 0px 0px #f2eea4;}
    .input-box span {color: #051c68;}
    .input-n:focus, input:valid {border: 1.5px solid #051c68;}
    .input-p:focus, input:valid {outline: none; border: 1.5px solid ##f7e905;}
    .input-p {background-color: #f2eea4;}
    .input-n {background-color: #f2eea4;}
    .input-box span:hover{color:   #6d6806;}
    .input-box input{background: #f2eea4;}
    input[type="range"]::-webkit-slider-thumb  {background: linear-gradient(180deg,#f7e905, #bcb303);}
    .slider::-moz-range-thumb {background: linear-gradient(180deg,#f7e905, #bcb303);}
    #flags p { color: #f7e905;}
    #masterSpan { color: #f7e905;}
    #soundFx  { color: #f7e905;}
    #btnSuggested {box-shadow: 0px 5px 0px 0px #f2eea4;}
    img[alt="low"], img[alt="upper"], img[alt="symbols"], img[alt="num"], img[alt="dup"], img[alt="inc"]{ background-color:#f2eea4; border: 1px solid #051c68; }
    `;

  document.head.appendChild(style_kdc);

  // setting icon color
  const passSettingsMaterialSymbolsOutlinedElements = document.querySelectorAll(
    ".pass-settings .material-symbols-outlined"
  );
  passSettingsMaterialSymbolsOutlinedElements.forEach((element) => {
    element.style.border = "1px solid #f7e905";
    element.style.backgroundColor = "#051c68";
  });

  // suggested btn color

  sideSuggestedButton_kdc.forEach((button) => {
    button.style.background = "linear-gradient(180deg,#051c68, #092993)";
  });

  hrs_kdc.forEach((hr) => {
    hr.style.borderColor = "#6d6806";
    hr.style.boxShadow = "0 1px 1px rgba(184, 183, 183, 0.5)";
  });
});

// Lpink theme
const image_lpink = document.getElementById("lpink");
const container_lpink = document.querySelector(".container");
const head_lpink = document.querySelector(".head");
const btn_lpink = document.getElementById("btnLetters");
const button_lpink = document.querySelector(".button");
const sideContainer_lpink = document.querySelector(
  "#sideLibrary.side-container"
);
const sideSetting_lpink = document.querySelector("#sideSetting.side-container");
const lineTheme_lpink = document.querySelector(".line_theme");
const lineLanguage_lpink = document.querySelector(".line_language");
const style_lpink = document.createElement("style");
const slider_lpink = document.querySelector(".slider");
const passStrengthColor_lpink = document.querySelector("#passStrengthText");
const hrs_lpink = document.querySelectorAll("hr");
const sideSuggestedButton_lpink =
  document.querySelectorAll(".passSuggested-btn");
const themeFont_lpink = document.getElementById("themeSpan");
const languageFont_lpink = document.getElementById("languageSpan");

image_lpink.addEventListener("click", function () {
  container_lpink.style.backgroundImage =
    "linear-gradient(195deg,#fc8db8, #ffc8dd )";
  container_lpink.style.outline = "5px solid #f04385";
  head_lpink.style.background = "linear-gradient(180deg,#f04385, #f7166d)";
  btn_lpink.style.background =
    "linear-gradient(195deg, #f04385, #f7166d)"; /* New linear gradient */
  button_lpink.style.background =
    "linear-gradient(195deg,#f04385, #f7166d)"; /* New linear gradient */
  sideContainer_lpink.style.backgroundImage =
    "linear-gradient(195deg,#fc8db8, #ffc8dd)";
  sideSetting_lpink.style.backgroundImage =
    "linear-gradient(195deg,#fc8db8, #ffc8dd)";
  lineTheme_lpink.style.background = "linear-gradient(180deg,#b57fd4, #cdb4db)";
  lineLanguage_lpink.style.background =
    "linear-gradient(180deg,#b57fd4, #cdb4db)";
  slider_lpink.style.backgroundImage =
    "linear-gradient(260deg, #b57fd4 0%, #ffc8dd 100%)";
  themeFont_bchees.style.color = "#f04385";
  languageFont_bchees.style.color = "#f04385";
  passStrengthColor_lpink.style.color = "#000000";
  style_lpink.innerHTML = `
    .toggle:after { background-color: #f7166d; }
    .settingToggle:after { background-color: #f7166d; }
    .checkbox-1:checked+.settingToggle{ background-color: #cdb4db; }
    .checkbox-2:checked+.settingToggle { background-color: #cdb4db; }
    .checkbox:checked+.toggle { background-color: #cdb4db; }
    .pass-len { color:#000;}
    .title { color: #000;}
    .option { color: #000;}
    .input-name span { color: #000;}
    .NeonO-tm p, .violet-tm p, .blue-tm p, .dbg-tm p, .kdc-tm p, .lpink-tm p, .bkchees-tm p, .greenD-tm p, .bgbk-tm p  { color: #000;}
    .version span, .version p { color: #000;}
    .input-p:focus ~ label, input:valid ~ label { color: #f7166d;}
    .input-n:focus ~ label, input:valid ~ label { color: #f7166d;}
    .generate-btn {box-shadow: 0px 5px 0px 0px #b57fd4;}
    .button {box-shadow: 0px 5px 0px 0px #b57fd4;}
    .passSuggested-btn { background: linear-gradient(180deg,#f04385, #f7166d);}
    .input-box span {color: #f7166d;}
    .input-n:focus, input:valid {border: 1.5px solid #b57fd4;}
    .input-p:focus, input:valid {outline: none; border: 1.5px solid #b57fd4;}
    .input-p {background-color: #cdb4db;}
    .input-n {background-color: #cdb4db;}
    .input-box span:hover{color:   #b57fd4;} 
    .input-box input{background: #cdb4db;}
    input[type="range"]::-webkit-slider-thumb  {background: linear-gradient(180deg,#f04385, #f7166d);}
    .slider::-moz-range-thumb {background: linear-gradient(180deg,#f04385, #f7166d);}
    #flags p { color: #000;}
    #masterSpan { color: #000;}
    #soundFx  { color: #000;}
    #btnSuggested {box-shadow: 0px 5px 0px 0px #b57fd4;}
    img[alt="low"], img[alt="upper"], img[alt="symbols"], img[alt="num"], img[alt="dup"], img[alt="inc"] { background-color:#cdb4db; border: 1px solid #b57fd4; }
    `;
  document.head.appendChild(style_lpink);
  // setting icon color
  const passSettingsMaterialSymbolsOutlinedElements = document.querySelectorAll(
    ".pass-settings .material-symbols-outlined"
  );
  passSettingsMaterialSymbolsOutlinedElements.forEach((element) => {
    element.style.border = "1px solid #f04385";
    element.style.backgroundColor = "#f7166d";
  });

  sideSuggestedButton_lpink.forEach((button) => {
    button.style.background = "linear-gradient(180deg,#f04385, #f7166d)";
  });

  hrs_lpink.forEach((hr) => {
    hr.style.borderColor = "#ffc8dd";
    hr.style.boxShadow = "0 1px 1px rgba(184, 183, 183, 0.5)";
  });
});

// Bkchees theme
const image_bchees = document.getElementById("bkchees");
const container_bchees = document.querySelector(".container");
const head_bchees = document.querySelector(".head");
const btn_bchees = document.getElementById("btnLetters");
const button_bchees = document.querySelector(".button");
const sideContainer_bchees = document.querySelector(
  "#sideLibrary.side-container"
);
const sideSetting_bchees = document.querySelector(
  "#sideSetting.side-container"
);
const lineTheme_bchees = document.querySelector(".line_theme");
const lineLanguage_bchees = document.querySelector(".line_language");
const style_bchees = document.createElement("style");
const slider_bchees = document.querySelector(".slider");
const passStrengthColor_bchees = document.querySelector("#passStrengthText");
const hrs_bchees = document.querySelectorAll("hr");
const sideSuggestedButton_bchees =
  document.querySelectorAll(".passSuggested-btn");
const labels_bchees = document.querySelectorAll(
  ".input-p:focus ~ label, input:valid ~ label"
);
const labelsNames_bchees = document.querySelectorAll(
  ".input-n:focus ~ label, input:valid ~ label"
);
const themeFont_bchees = document.getElementById("themeSpan");
const languageFont_bchees = document.getElementById("languageSpan");
image_bchees.addEventListener("click", function () {
  container_bchees.style.backgroundImage =
    "linear-gradient(195deg,#f9fbfc, #c9dfed )";
  container_bchees.style.outline = "5px solid #000";
  head_bchees.style.background = "linear-gradient(180deg,#001d3d, #282828)";
  btn_bchees.style.background =
    "linear-gradient(195deg, #001d3d, #282828)"; /* New linear gradient */
  button_bchees.style.background =
    "linear-gradient(195deg,#001d3d, #282828)"; /* New linear gradient */
  sideContainer_bchees.style.backgroundImage =
    "linear-gradient(195deg,#f9fbfc, #c9dfed)";
  sideSetting_bchees.style.backgroundImage =
    "linear-gradient(195deg,#f9fbfc, #c9dfed)";
  lineTheme_bchees.style.background =
    "linear-gradient(180deg,#ffc425, #fce094)";
  lineLanguage_bchees.style.background =
    "linear-gradient(180deg,#ffc425, #fce094)";
  slider_bchees.style.backgroundImage =
    "linear-gradient(260deg, #ffc425 0%, #f7e4b2 100%)";
  passStrengthColor_bchees.style.color = "#000000";
  themeFont_bchees.style.color = "#001d3d";
  languageFont_bchees.style.color = "#001d3d";
  style_bchees.innerHTML = `
    .toggle:after { background-color:  #282828; }
    .settingToggle:after { background-color:  #282828; }
    .checkbox-1:checked+.settingToggle{ background-color: #fce094; }
    .checkbox-2:checked+.settingToggle { background-color: #fce094; }
    .checkbox:checked+.toggle { background-color: #fce094; }
    .pass-len { color:#000;}
    .title { color: #000;}
    .option { color: #000;}
    .input-name span { color: #000;}
    .NeonO-tm p, .violet-tm p, .blue-tm p, .dbg-tm p, .kdc-tm p, .lpink-tm p, .bkchees-tm p, .greenD-tm p, .bgbk-tm p  { color: #000;}
    .version span, .version p { color: #000;}
    .input-p:focus ~ label, input:valid ~ label { color: #282828;}
    .input-n:focus ~ label, input:valid ~ label { color: #282828;}
    .generate-btn {box-shadow: 0px 5px 0px 0px #ffc425;}
    .button {box-shadow: 0px 5px 0px 0px #ffc425;}
    .passSuggested-btn { background: linear-gradient(180deg, #001d3d, #282828); }
    .input-box span {color: #000;}
    .input-n:focus, input:valid {border: 1.5px solid #ffc425;}
    .input-n:focus {outline: none; border: 1.5px solid #ffc425;}    
    .input-p:focus {outline: none; border: 1.5px solid #ffc425;}
    .input-p { background-color: #fce094;}
    .input-n {background-color: #fce094;}
    .input-box span:hover{color:   #ffc425;}
    .input-box input{background: #fce094;}
    input[type="range"]::-webkit-slider-thumb  {background: linear-gradient(180deg,#001d3d, #282828);}
    .slider::-moz-range-thumb { background: linear-gradient(180deg,#001d3d, #282828);}
    #flags p { color: #000;}
    #masterSpan { color: #000;}
    #soundFx  { color: #000;}
    #btnSuggested {box-shadow: 0px 5px 0px 0px #ffc425;}
    img[alt="low"], img[alt="upper"], img[alt="symbols"], img[alt="num"], img[alt="dup"], img[alt="inc"] { background-color:#fce094; border: 1px solid #282828; }
    
    `;
  document.head.appendChild(style_bchees);

  const passSettingsMaterialSymbolsOutlinedElements = document.querySelectorAll(
    ".pass-settings .material-symbols-outlined"
  );
  passSettingsMaterialSymbolsOutlinedElements.forEach((element) => {
    element.style.border = "1px solid #ffc425";
    element.style.backgroundColor = "#282828";
  });

  hrs_bchees.forEach((hr) => {
    hr.style.borderColor = "#cecece";
    hr.style.boxShadow = "0 1px 1px rgba(184, 183, 183, 0.5)";
  });

  sideSuggestedButton_bchees.forEach((button) => {
    button.style.background = "linear-gradient(180deg,#001d3d, #282828)";
  });
});

// greenD theme
const image_greenD = document.getElementById("greenD");
const container_greenD = document.querySelector(".container");
const head_greenD = document.querySelector(".head");
const btn_greenD = document.getElementById("btnLetters");
const button_greenD = document.querySelector(".button");
const sideContainer_greenD = document.querySelector(
  "#sideLibrary.side-container"
);
const sideSetting_greenD = document.querySelector(
  "#sideSetting.side-container"
);
const lineTheme_greenD = document.querySelector(".line_theme");
const lineLanguage_greenD = document.querySelector(".line_language");
const style_greenD = document.createElement("style");
const slider_greenD = document.querySelector(".slider");
const passStrengthColor_greenD = document.querySelector("#passStrengthText");
const hrs_greenD = document.querySelectorAll("hr");
const sideSuggestedButton_greenD =
  document.querySelectorAll(".passSuggested-btn");
const themeFont_greenD = document.getElementById("themeSpan");
const languageFont_greenD = document.getElementById("languageSpan");

image_greenD.addEventListener("click", function () {
  container_greenD.style.backgroundImage =
    "linear-gradient(195deg, #a7c957, #c9f9bd)";
  container_greenD.style.outline = "5px solid #173b1c";
  head_greenD.style.background = "linear-gradient(180deg,#69994e, #4e9958)";
  btn_greenD.style.background =
    "linear-gradient(195deg, #69994e, #4e9958)"; /* New linear gradient */
  button_greenD.style.background =
    "linear-gradient(195deg,#69994e, #4e9958)"; /* New linear gradient */
  sideContainer_greenD.style.backgroundImage =
    "linear-gradient(195deg, #a7c957, #c9f9bd)";
  sideSetting_greenD.style.backgroundImage =
    "linear-gradient(195deg, #a7c957, #c9f9bd)";
  lineTheme_greenD.style.background =
    "linear-gradient(180deg,#f9e970, #f9e339)";
  lineLanguage_greenD.style.background =
    "linear-gradient(180deg,#f9e970, #f9e339)";
  slider_greenD.style.backgroundImage =
    "linear-gradient(260deg, #ffc425 0%, #f7e4b2 100%)";
  passStrengthColor_greenD.style.color = "#000000";
  themeFont_greenD.style.color = "#282828";
  languageFont_greenD.style.color = "#282828";
  style_greenD.innerHTML = `
    .toggle:after { background-color:  #f9e339; }
    .settingToggle:after { background-color:  #f9e339; }
    .checkbox-1:checked+.settingToggle{ background-color: #c9f9bd; }
    .checkbox-2:checked+.settingToggle { background-color: #c9f9bd; }
    .checkbox:checked+.toggle { background-color: #c9f9cf; }
    .pass-len { color:#000;}
    .title { color: #000;}
    .option { color: #000;}
    .input-name span { color: #000;}
    .NeonO-tm p, .violet-tm p, .blue-tm p, .dbg-tm p, .kdc-tm p, .lpink-tm p, .bkchees-tm p, .greenD-tm p, .bgbk-tm p  { color: #000;}
    .version span, .version p { color: #000;}
    .input-p:focus ~ label, input:valid ~ label { color: #282828;}
    .input-n:focus ~ label, input:valid ~ label { color: #282828;}
    .generate-btn {box-shadow: 0px 5px 0px 0px #282828;}
    .button {box-shadow: 0px 5px 0px 0px #282828;}
    .passSuggested-btn { background: linear-gradient(180deg, #000000, #282828); }
    .input-box span {color: #000;}
    .input-n:focus, input:valid {border: 1.5px solid #c9f9bd;}
    .input-n:focus {outline: none; border: 1.5px solid #ffc425;}    
    .input-p:focus {outline: none; border: 1.5px solid #ffc425;}
    .input-p {background-color: #c9f9bd;}
    .input-n { background-color: #c9f9bd;}
    .input-box span:hover {color:   #ffc425;}
    .input-box input {background: #c9f9bd;}
    input[type="range"]::-webkit-slider-thumb  {background: linear-gradient(180deg,#69994e, #4e9958);}
    .slider::-moz-range-thumb { background: linear-gradient(180deg,#69994e, #4e9958);}
    #flags p { color: #000;}
    #masterSpan { color: #000;}
    #btnSuggested {box-shadow: 0px 5px 0px 0px #282828;}
    #soundFx  { color: #000;}
    img[alt="low"], img[alt="upper"], img[alt="symbols"], img[alt="num"], img[alt="dup"], img[alt="inc"] { background-color:#f9e339; border: 1px solid #4e9958; }
    
    `;
  document.head.appendChild(style_greenD);

  const passSettingsMaterialSymbolsOutlinedElements = document.querySelectorAll(
    ".pass-settings .material-symbols-outlined"
  );
  passSettingsMaterialSymbolsOutlinedElements.forEach((element) => {
    element.style.border = "1px solid #c9f9bd";
    element.style.backgroundColor = "#4e9958";
  });

  hrs_greenD.forEach((hr) => {
    hr.style.borderColor = "#69994e";
    hr.style.boxShadow = "0 1px 1px rgba(184, 183, 183, 0.5)";
  });

  sideSuggestedButton_greenD.forEach((button) => {
    button.style.background = "linear-gradient(180deg,#69994e, #4e9958)";
  });
});

// bgbr theme
const image_bgbk = document.getElementById("bgbk");
const container_bgbk = document.querySelector(".container");
const head_bgbk = document.querySelector(".head");
const btn_bgbk = document.getElementById("btnLetters");
const button_bgbk = document.querySelector(".button");
const sideContainer_bgbk = document.querySelector(
  "#sideLibrary.side-container"
);
const sideSetting_bgbk = document.querySelector("#sideSetting.side-container");
const lineTheme_bgbk = document.querySelector(".line_theme");
const lineLanguage_bgbk = document.querySelector(".line_language");
const style_bgbk = document.createElement("style");
const slider_bgbk = document.querySelector(".slider");
const passStrengthColor_bgbk = document.querySelector("#passStrengthText");
const hrs_bgbk = document.querySelectorAll("hr");
const sideSuggestedButton_bgbk =
  document.querySelectorAll(".passSuggested-btn");
const themeFont_bgbk = document.getElementById("themeSpan");
const languageFont_bgbk = document.getElementById("languageSpan");

image_bgbk.addEventListener("click", function () {
  container_bgbk.style.backgroundImage =
    "linear-gradient(to bottom, #724505, #f7be6f)";
  container_bgbk.style.outline = "5px solid #328e82";
  head_bgbk.style.background = "linear-gradient(180deg,#328e82, #4dd6c3)";
  btn_bgbk.style.background =
    "linear-gradient(195deg, #328e82, #4dd6c3)"; /* New linear gradient */
  button_bgbk.style.background =
    "linear-gradient(195deg,#328e82, #4dd6c3)"; /* New linear gradient */
  sideContainer_bgbk.style.backgroundImage =
    "linear-gradient(to bottom, #724505, #f7be6f)";
  sideSetting_bgbk.style.backgroundImage =
    "linear-gradient(to bottom, #724505, #f7be6f)";
  lineTheme_bgbk.style.background = "linear-gradient(180deg,#f4b373, #f2c99f)";
  lineLanguage_bgbk.style.background =
    "linear-gradient(180deg,#f4b373, #f2c99f)";
  slider_bgbk.style.backgroundImage =
    "linear-gradient(260deg, #328e82 0%, #4dd6c3 100%)";
  passStrengthColor_bgbk.style.color = "#fff";
  themeFont_bgbk.style.color = "#fff";
  languageFont_bgbk.style.color = "#fff";
  style_bgbk.innerHTML = `
    .toggle:after { background-color:  #328e82; }
    .settingToggle:after { background-color:  #328e82; }
    .checkbox-1:checked+.settingToggle{ background-color: #4dd6c3; }
    .checkbox-2:checked+.settingToggle { background-color: #4dd6c3; }
    .checkbox:checked+.toggle { background-color: #4dd6c3; }
    .pass-len { color:#fff;}
    .title { color: #fff;}
    .option { color: #fff;}
    .input-name span { color: #fff;}
    .NeonO-tm p, .violet-tm p, .blue-tm p, .dbg-tm p, .kdc-tm p, .lpink-tm p, .bkchees-tm p, .greenD-tm p, .bgbk-tm p  { color: #fff;}
    .version span, .version p { color: #fff;}
    .input-p:focus ~ label, input:valid ~ label { color: #4dd6c3;}
    .input-n:focus ~ label, input:valid ~ label { color: #4dd6c3;}
    .generate-btn {box-shadow: 0px 5px 0px 0px #282828;}
    .passSuggested-btn { background: linear-gradient(180deg, #000000, #282828); }
    .input-box span {color:#724505 ;}
    .input-n:focus, input:valid {border: 1.5px solid #c9f9bd;}
    .input-n:focus {outline: none; border: 1.5px solid #328e82;}    
    .input-p:focus {outline: none; border: 1.5px solid #328e82;}
    .input-p {background-color: #f2c99f;}
    .input-n {background-color: #f2c99f;}
    .input-box span:hover{color: #4dd6c3;}
    .input-box input{background: #f2c99f;}
    input[type="range"]::-webkit-slider-thumb  {background: linear-gradient(180deg,#4dd6c3, #328e82);}
    .slider::-moz-range-thumb {background: linear-gradient(180deg,#4dd6c3, #328e82);}
    #flags p { color: #fff;}
    #masterSpan { color: #fff;}
    #btnSuggested {box-shadow: 0px 5px 0px 0px #282828;}
    .button {box-shadow: 0px 5px 0px 0px #282828;}
    #soundFx  { color: #fff;}
    img[alt="low"], img[alt="upper"], img[alt="symbols"], img[alt="num"], img[alt="dup"], img[alt="inc"] { background-color:#f2c99f; border: 1px solid #4dd6c3; }

    `;
  document.head.appendChild(style_bgbk);

  const passSettingsMaterialSymbolsOutlinedElements = document.querySelectorAll(
    ".pass-settings .material-symbols-outlined"
  );
  passSettingsMaterialSymbolsOutlinedElements.forEach((element) => {
    element.style.border = "1px solid #4dd6c3";
    element.style.backgroundColor = "#328e82";
  });

  hrs_bgbk.forEach((hr) => {
    hr.style.borderColor = "#328e82";
    hr.style.boxShadow = "0 1px 1px rgba(184, 183, 183, 0.5)";
  });

  sideSuggestedButton_bgbk.forEach((button) => {
    button.style.background = "linear-gradient(180deg,#328e82, #4dd6c3)";
  });
});