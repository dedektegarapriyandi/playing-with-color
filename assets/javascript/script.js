const randomBtn = document.querySelector(".random-btn");
const slider = document.querySelectorAll(".slider-range");

const displayBg = document.querySelector(".display-bg");


randomColor = () => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    displayBg.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    console.log(`rgba(${r}, ${g}, ${b})`)
}

sliderColor = (e) => {
    for(i = 0; i < slider.length; i++) {
        slider[i].addEventListener("input", () => {
            let r,g,b;
            r = slider[0].value;
            g = slider[1].value;
            b = slider[2].value;

            displayBg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    }
}

randomBtn.addEventListener("click", randomColor);
sliderColor();