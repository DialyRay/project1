function The4060game(bal, bet, attempts) {
    let arr = [true, false, true, false, true, false, true, false, true, true];
    for (let i = 0; i < attempts; i++) {
        let a = Math.floor(Math.random() * arr.length + 1);
        let result = arr[a];
        if (result == true) {
            bal = bal + bet * 2;
        } else {
            bal = bal - bet;
        }
    }
    console.log(bal);
}
console.log(The4060game(20, 2, 20))