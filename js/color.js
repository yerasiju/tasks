const btn = document.getElementById("btn");
const hexCode = document.getElementById("hexCode");

const randomColor = ["#BB5U45", "#AA3B55", "#CC7AB5", "#E7AAB4C"];

btn.addEventListener("click", () => {
  const random = randomColor[Math.floor(Math.random() * randomColor.length)];
  document.body.style.background = random;

  hexCode.textContent = random;
});

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Flipper</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div class="background">
        background color : <span class="hexCode" id="hexCode">#ffffff</span>
      </div>
      <button class="btn" id="btn">Click</button>
    </div>
  </body>
  <script src="script.js"></script>
</html>


*/
