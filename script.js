/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints a message in the browser's dev tools console
console.log("Hello 🌎");

//Based on https://lukelowrey.com/css-variable-theme-switcher/
function changeTheme() {
  var button = document.getElementById("themeButton");
  var currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light") {
    targetTheme = "dark";
    button.setAttribute("class", "fas fa-sun fa-1x themeButton");
  } else {
    targetTheme = "light";
    button.setAttribute("class", "fas fa-moon fa-1x themeButton");
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
}

document.documentElement.setAttribute("data-theme", "dark");
changeTheme();
