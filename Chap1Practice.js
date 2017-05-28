var bankAcct = 300,
  preTaxCost = 0,
  postTaxCost = 0,
  tax = 0.10,
  phone = 100,
  phoneAccessory = 10;


while ((preTaxCost + phone) < bankAcct) {
  preTaxCost += phone + phoneAccessory
}

postTaxCost = preTaxCost + (preTaxCost * tax)
