function burguerClic() {
    var x = document.getElementById("topNav");
    if (x.className === "menu-bar") {
        x.className += " burguer";
    } else {
        x.className = "menu-bar";
    }
}