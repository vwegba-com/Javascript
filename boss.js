let data = 0;
document.getElementById("Counter").innerText=data;

function decrement() {
    data = data - 1;
    document.getElementById("Counter").innerText=data;
}

function reset() {
    data = 0;
    document.getElementById("Counter").innerText=data;
}

function increment() {
    data = data + 1;
    document.getElementById("Counter").innerText=data;
    }