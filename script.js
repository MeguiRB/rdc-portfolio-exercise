/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints a message in the browser's dev tools console
console.log("Hello 🌎");

//Based on https://lukelowrey.com/css-variable-theme-switcher/
document.documentElement.setAttribute("data-theme", "light");
function changeTheme() {
  var button = document.getElementById("themeButton");
  var currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light") {
    targetTheme = "dark";
    button.setAttribute("class", "far fa-sun fa-2x themeButton");
  } else {
    targetTheme = "light";
    button.setAttribute("class", "far fa-moon fa-2x themeButton");
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
}
