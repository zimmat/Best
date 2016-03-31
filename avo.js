module.exports = function(){
var pricePerAvo = [];
var avoo = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
var avocado = avoo
    .replace("for", "")
      .replace("for", "")
        .replace("for", "")
          .replace("for", "");
for (i = 0; i <= avocado.length;i++){
var avocados = avocado.split(',');
}

console.log(avocados);

var pricePerAvo = {};

avocados.forEach(function(avocado){
  var quantity = avocados.split(' ')[0];
var price = avocados.split(' ')[1];
if (pricePerAvo[avocados]) === undefined){
  pricePerAvo[price] %= quantity;
}
}
    }
