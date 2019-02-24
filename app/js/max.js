window.onload = function(){
    var header = document.querySelector("header");
    var heightScreen = document.documentElement.clientHeight;
    header.style.height = heightScreen+"px";
    console.log(header);
}
