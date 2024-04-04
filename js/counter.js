let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count = count - 1;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="counter.css" />
  </head>
  <body>
    <div class="container">
      <label id="countLabel">0</label><br />
      <button id="decreaseBtn">-</button>
      <button id="resetBtn">reset</button>
      <button id="increaseBtn">+</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>


*/
