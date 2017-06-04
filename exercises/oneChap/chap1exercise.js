var bankAcct = prompt("How much money have you got to spend?"),
    preTaxCost = 0,
    postTaxCost = 0,
    tax = 0.10,
    phone = 100,
    phoneAccessory = 10;


while ((preTaxCost + phone) < bankAcct) {
    preTaxCost += phone + phoneAccessory
}

postTaxCost = preTaxCost + (preTaxCost * tax)
alert("total price: $" + postTaxCost);

if (postTaxCost > bankAcct) {
    alert("too much for me");
} else {
    // console.log("sure lets get cray");
    bankAcct -= postTaxCost;
    alert("bankAcct: $", bankAcct);
}
