const messages = [
    "So you actually clicked YES… good choice 😌",
    "I was lowkey scared you'd press NO again",
    "Anyway… I made this just for you",
    "Because you’re kinda important to me",
    "Okay fine… very important 💖",
    "And today… is all about you 🎂"
];

let index = 0;

function nextMessage() {
    if (index < messages.length) {
        document.getElementById("text").innerText = messages[index];
        index++;
    } else {
        window.location.href = "song.html"; // next page later
    }
}