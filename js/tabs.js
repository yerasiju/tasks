const tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
const tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

const showPanel = (panelIndex, colorCode) => {
  tabButtons.forEach((button, index) => {
    button.style.backgroundColor = button.style.color =
      index === panelIndex ? colorCode : "";
  });

  tabPanels.forEach((panel) => (panel.style.display = "none"));
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
};
/* <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Tabs</title>
    <link rel="stylesheet" type="text/css" href="css.css" />
    <link rel="icon" type="image/x-icon" href="favicon.png" />
  </head>
  <body style="padding: 20px">
    <h1 class="title">Tabs</h1>
    <div class="tabContainer">
      <div class="buttonContainer">
        <button onclick="showPanel(0,'#f44336')">Tab 1</button>
        <button onclick="showPanel(1,'#4caf50')">Tab 2</button>
        <button onclick="showPanel(2,'#2196f3')">Tab 3</button>
        <button onclick="showPanel(3,'#ff5722')">Tab 4</button>
      </div>
      <div class="tabPanel">Tab 1:Content</div>
      <div class="tabPanel">Tab 2:Content</div>
      <div class="tabPanel">Tab 3:Content</div>
      <div class="tabPanel">Tab 4:Content</div>
    </div>

    <script src="myScript.js"></script>
  </body>
</html>
*/
