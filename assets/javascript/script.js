const randomBtn = document.querySelector(".random-btn");
const displayBg = document.querySelector(".display-bg");

randomColor = () => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    displayBg.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    console.log(`rgba(${r}, ${g}, ${b})`)
}

randomBtn.addEventListener("click", randomColor);