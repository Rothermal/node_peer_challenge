/*** Created by Scott on 1/5/16. */
var makeCurrency = function(intNum) {
    //return '$' + (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    return '$' + (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,') + ".00";
};

var convertDollar = function(){
    return makeCurrency();
};

module.exports = makeCurrency;