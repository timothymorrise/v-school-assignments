/*
*/
console.log("live!")
//INPUT OBJECT
var quantity = {
    goomba: function () {
        return Number(document.getElementById("goomba_quantity").value);
    },
    bobomb: function () { 
        return Number(document.getElementById("bobomb_quantity").value);
    },
    cheep: function () {
        return Number(document.getElementById("cheep_quantity").value);
    }
}  
//PRICE FIXINS
var price = {
    goomba: 6,
    bobomb: 7,
    cheep: 11,
}

var goombaPriceDspl = document.getElementById("goomba_price");
var bobombPriceDspl = document.getElementById("bobomb_price");
var cheepPriceDspl = document.getElementById("cheep_price");
goombaPriceDspl.innerHTML = "Price: " + price.goomba;
bobombPriceDspl.innerHTML = "Price: " + price.bobomb;
cheepPriceDspl.innerHTML = "Price: " + price.cheep;

//TOTAL ID DECLARATIONS
var goombaSubTtl = document.getElementById("goomba_subtotal");
var bobombSubTtl = document.getElementById("bobomb_subtotal");
var cheepSubTtl = document.getElementById("cheep_subtotal");
var total = document.getElementById("total");

//INITIAL CALCULATOR
var draftBill = function () {
    var goombaProd = price.goomba * quantity.goomba();
    var bobombProd = price.bobomb * quantity.bobomb();
    var cheepProd = price.cheep * quantity.cheep();
    goombaSubTtl.innerHTML = "Subtotal: " + goombaProd
    bobombSubTtl.innerHTML = "Subtotal: " + bobombProd
    cheepSubTtl.innerHTML = "Subtotal: " + cheepProd
    total.innerHTML = "GRAND TOTAL: " + (goombaProd + bobombProd + cheepProd)
}
draftBill();

//DOM manipulation

window.oninput = function() {
    draftBill();
}