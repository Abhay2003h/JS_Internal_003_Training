// Task 1: Change text on button click
function changeText() {
    document.getElementById("text1").innerText = "Welcome to JavaScript!";
}

// Task 2: Change background color
function changeBg(color) {
    document.body.style.backgroundColor = color;
}

// Task 3: Image switcher
let images = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200/0000FF"
];
let imgIndex = 0;

function nextImg() {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById("img").src = images[imgIndex];
}

function prevImg() {
    imgIndex = (imgIndex - 1 + images.length) % images.length;
    document.getElementById("img").src = images[imgIndex];
}

// Task 4: Show or hide paragraph
function togglePara() {
    let p = document.getElementById("para");
    p.style.display = (p.style.display === "none") ? "block" : "none";
}

// Task 5: Counter app
let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrease() {
    if (count > 0) {
        count--;
        document.getElementById("count").innerText = count;
    }
}

// Task 6: Create element dynamically
function addBox() {
    let div = document.createElement("div");
    div.innerText = "New Box";
    document.body.appendChild(div);
}

// Task 7: Read form input
function readName() {
    let name = document.getElementById("username").value;
    document.getElementById("output").innerText = "Hello " + name;
}

// Task 8: Todo list
function addTask() {
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.innerText = task;
    document.getElementById("todo").appendChild(li);
}

// Task 9: Change image attribute
function smallImg() {
    document.getElementById("resizeImg").setAttribute("width", "100");
}

function largeImg() {
    document.getElementById("resizeImg").setAttribute("width", "300");
}

// Task 10: Theme switcher
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Task 11: Live clock
setInterval(() => {
    document.getElementById("clock").innerText =
        new Date().toLocaleTimeString();
}, 1000);

// Task 12: Random quote generator
let quotes = [
    "Practice makes perfect",
    "JavaScript is powerful",
    "Never stop learning",
    "Code. Debug. Repeat."
];

function newQuote() {
    let i = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[i];
}