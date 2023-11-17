

function changeCalculatorColor(color, instructionId) {
    document.querySelector('.calculator').style.background = color;
    document.getElementById(instructionId).textContent = "Calculator Color Changed!";
}
