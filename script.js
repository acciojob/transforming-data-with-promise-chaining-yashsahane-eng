//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function delay(ms, value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    });
}

button.addEventListener("click", function () {
    let num = Number(input.value);

    new Promise(resolve => {
        setTimeout(() => resolve(num), 2000);
    })
    .then(num => {
        output.textContent = `Result: ${num}`;
        return delay(2000, num * 2);
    })
    .then(num => {
        output.textContent = `Result: ${num}`;
        return delay(1000, num - 3);
    })
    .then(num => {
        output.textContent = `Result: ${num}`;
        return delay(1000, num / 2);
    })
    .then(num => {
        output.textContent = `Result: ${num}`;
        return delay(1000, num + 10);
    })
    .then(num => {
        output.textContent = `Final Result: ${num}`;
    });
});