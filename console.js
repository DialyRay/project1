function test(x, y, z) {
    let arr = [true, false, true, false, true, false, true, false, true, true];
    let bal = x;
    let dep = y;
    for (let i = 0; i < z; i++) {
      let a = Math.floor(Math.random() * arr.length + 1);
      let result = arr[a];
      if (result == true) {
        bal = bal + dep * 2;
      } else {
        bal = bal - dep
      }
    }
    console.log(bal);
}
  console.log(test(20, 2, 20));