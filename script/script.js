/* Pre-defined terminal-like HEX colors */
const textColorArr = [ "#ffffff", "#0037DA", "#3A96DD", "#13A10E", "#881798", "#C50F1F", "#C19C00" ]

const colorIndex = Math.floor(Math.random() * textColorArr.length);

document.body.style.color = textColorArr[colorIndex];

/* Set image container background */
document.querySelector(".errImgContainer").style.background = textColorArr[colorIndex];

/* Set everything else to the chosen color, just to be sure */
document.querySelector(".errContentContainer").style.color = textColorArr[colorIndex];
document.querySelectorAll("a").forEach(a => a.style.color = textColorArr[colorIndex]);
document.querySelectorAll(".selected").forEach(selected => selected.style.background = textColorArr[colorIndex]);
