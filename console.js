function the4060game(balance, bet, attempts) {
    let arr = [true, false, true, false, true, false, true, false, true, true];
    for (let i = 0; i < attempts; i++) {
        let result = arr[Math.floor(Math.random() * arr.length + 1)];
        if (result == true) {
            bal = bal + bet * 2;
        } else {
            bal = bal - bet;
        }
    }
    console.log(bal);
}
console.log(the4060game(20, 2, 20));