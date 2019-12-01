// Add javascript for contrast
const contrastButton = document.querySelector("#contrast-page");
contrastButton.addEventListener("click",function(){
    document.querySelector('body').classList.toggle("contrast");
})