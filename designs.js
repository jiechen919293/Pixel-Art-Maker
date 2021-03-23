// // Select color input
// Select size input
const input1 = document.getElementById('inputHeight');
const input2 = document.getElementById('inputWidth');
const submit = document.querySelector("input[type='submit']");

submit.onclick = function makeGrid(event) {
    let myHeight = input1.value;
    let myWidth = input2.value;
    event.preventDefault();
    const table = document.getElementById('pixelCanvas');
    for (let i = 0; i < myHeight; i++) {
        const trElement = document.createElement('tr');
        table.appendChild(trElement);
        for (let j = 0; j < myWidth; j++) {
            const tdElement = document.createElement('td');
            table.appendChild(tdElement);
        };
    };
};
// const grids = document.querySelectorAll('td');
// grids.style.height = '20px';
const table = document.getElementById('pixelCanvas');
table.addEventListener('click', function(event) {
    event.preventDefault();
    const colorInput = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = colorInput;
});