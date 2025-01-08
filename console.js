function the4060game(balance, bet, attempts) {
    for (let i = 0; i < attempts; i++) {
        let result = Math.floor(Math.random() * 101);
        if (result > 40) {
            balance = balance + bet * 2;
        } else {
            balance = balance - bet;
        }
    }
    console.log(balance);
}
console.log(the4060game(20, 2, 20));