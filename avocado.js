var avos = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
    var eachDeal = avos.split(',');

    console.log(eachDeal);
var deals = [];
    eachDeal.forEach(function(avos){
     deals.push(avos.split("for R"));
    });
    console.log(deals);
// var dealOne = [0];
//
// var dealTwo = [1];
//
// var dealthree = [2];
//
// var dealfour = [3];

    deals.forEach(function(avos){
      var quantity = Number(avos.split(',')[0]);
      var price = Number(avos.split(',')[1]));

    });
