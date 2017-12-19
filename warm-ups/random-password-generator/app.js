var passwordGen = function (n) {
    var id = "";
    var characters = "abcedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
    for (var i = 1; i <= n; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    } 
  return id
}
passwordGen(3);
console.log(passwordGen(9));

var passwordGenButWorse = function (n) {
    var id = "";
    var lowercase = "abcedfghijklmnopqrstuvwxyz1234567890!@#$%^&*";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "12345678890"
    var symbols = "!@#$%^&**()_+=~`"
    for (var i = 1; i <= n; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    } 
  return id
}