function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkMode");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}
function lightMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}
/* <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dark</title>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <h3 id="DarkMode">Dark Mode is OFF</h3>
    <button id="darkButton" class="dark" onclick="darkMode()">
      <img
        width="25px"
        height="25px"
        src="/1261705-middle-removebg-preview.png"
        alt=""
      />
    </button>
    <button id="lightButton" class="light" onclick="lightMode()">
      <img
        width="25px"
        height="25px"
        src="/fa4e01ccb90fd8f5890c28332fe8b0b9-removebg-preview.png"
        alt=""
      />
    </button>
  </body>
</html>


*/
