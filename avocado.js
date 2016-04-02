var avos = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
if (avos[avos.length-1] === ".")
    avos = avos.slice(0,-1);
console.log(avos);
    var eachDeal = avos.split(',');

    console.log(eachDeal);
var deals = [];
    eachDeal.forEach(function(avos){
     deals.push(avos.split("for R"));
    });
console.log(deals);

 var Dealprice = [];
    deals.forEach(function(avos){
      var quantity = Number(avos[0]);
      var price = Number(avos[1]);
var  pricePerAvo = (price / quantity);

      Dealprice.push(Number(pricePerAvo.toFixed(2)));

    });
console.log(Dealprice);
var cheapestDeal = Math.min.apply(null, Dealprice);
console.log(cheapestDeal);

var expensiveDeal = Math.max.apply(null, Dealprice);

console.log(expensiveDeal);

var total = 0;
for(var i = 0; i < Dealprice.length; i++) {
    total += Dealprice[i];
}
var avg = Number((total / Dealprice.length).toFixed(2));

console.log(avg);
