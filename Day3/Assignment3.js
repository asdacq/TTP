function click1(){
    a = document.querySelector('p[id = textfield]');
    a.textContent = "Im right";
    a.style.textAlign = "left";
}

function click2(){
    b = document.getElementById("textfield");
    b.textContent = "No, I'm right!";
    b.style.textAlign = "right";
}

function mouseOver(){
    document.getElementById("hover").textContent = "I told you not to hover over me!";    
}

function mouseOut(){
    document.getElementById("hover").textContent = "Don't Hover Over ME!";    
}

function calcRad(){
    radius = parseFloat(document.getElementById("radius").value);
    volume = 4.18879020479 * radius;
    alert(`Volume = ${volume}`);
}