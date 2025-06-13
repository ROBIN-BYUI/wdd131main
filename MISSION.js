
var themeSelect = document.getElementById("theme-select");


themeSelect.addEventListener("change", changeTheme);


function changeTheme() {
  var selected = themeSelect.value;         
  var body = document.body;                
  var logo = document.querySelector("img"); 

  if (selected === "dark") {
    body.classList.add("dark");           
    logo.src = "byui-logo_white.webp";    
  } else {
    body.classList.remove("dark");          
    logo.src = "byui-logo_blue.webp";       
  }
}
