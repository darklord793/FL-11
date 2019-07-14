function formatTime (time) {
    let minutes = Math.floor(time / 1) % 60;
    let hours = Math.floor(time / 60) % 24;
    let days = Math.floor(time / 1440);
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
