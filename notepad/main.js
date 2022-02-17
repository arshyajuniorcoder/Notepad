const text = document.querySelector(".text");
let defaultFontSize = 18;

function isActive(btn) {
    return document.querySelector("." + btn).classList.toggle("active");
}

function color(colorID) {
    text.style.color = colorID;
}

function inc() {
    defaultFontSize += 2;
    text.style.fontSize = defaultFontSize + "px";
}

function dec() {
    defaultFontSize -= 2;
    text.style.fontSize = defaultFontSize + "px";
}

function bold(bold) {
    if (isActive("bold")) {
        text.style.fontWeight = "bold";
    } else {
        text.style.fontWeight = "100";
    }
}

function italic(italic) {
    if (isActive("italic")) {
        text.style.fontStyle = "italic";
    } else {
        text.style.fontStyle = "normal";
    }
}

function left(left) {
    if (isActive("left")) {
        pTextAlign = text.style.textAlign;
        text.style.textAlign = "left";
        if (document.querySelector(".center").classList.contains("active")) {
            isActive("center");
        }
        if (document.querySelector(".right").classList.contains("active")) {
            isActive("right");
        }
    } else {
        text.style.textAlign = pTextAlign;
    }
}

function center(center) {
    if (isActive("center")) {
        pTextAlign = text.style.textAlign;
        text.style.textAlign = "center";
        if (document.querySelector(".left").classList.contains("active")) {
            isActive("left");
        }
        if (document.querySelector(".right").classList.contains("active")) {
            isActive("right");
        }
    } else {
        text.style.textAlign = pTextAlign;
    }
}

function right(right) {
    if (isActive("right")) {
        pTextAlign = text.style.textAlign;
        text.style.textAlign = "right";
        if (document.querySelector(".center").classList.contains("active")) {
            isActive("center");
        }
        if (document.querySelector(".left").classList.contains("active")) {
            isActive("left");
        }
    } else {
        text.style.textAlign = pTextAlign;
    }
}
