for (var i = 100; i <= 200; i++) {
    var msg = "";
    if (!(i%3)) {
        msg += "Light";
    }
    if (!(i%4)) {
        msg += "House";
    }
    console.log(msg || i);
}