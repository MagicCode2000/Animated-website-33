var colors = document.querySelectorAll(".color-box span");
var img = document.querySelector(".img-box .img");
colors.forEach(element => {
    element.addEventListener(("click"), () => {
        elementStyle = window.getComputedStyle(element);
        hueValue = elementStyle.getPropertyValue('--hue');
        colorValue = elementStyle.getPropertyValue('--color');

        img.style.filter = "hue-rotate(" + hueValue + ")";
        document.documentElement.style.setProperty("--color", colorValue);
    });
});