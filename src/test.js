const nextPosition = 20;
function checkUseLastActive(x, y) {
    return x % nextPosition === 0 && y % nextPosition === 0;
}

console.log(checkUseLastActive(1209, 291));
console.log(checkUseLastActive(1200, 280));
