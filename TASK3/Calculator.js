let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let expression = display.value.replace('%', '/100');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
