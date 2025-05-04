product1 = {
  name: "Adidas",
  price: 50,
};

product2 = {
  name: "Gucci",
  price: 50,
};

function comparedPrice(product1, product2) {
  if (product1.price < product2.price) {
    return product1;
  } else if (product1.price > product2.price) {
    return product2;
  } else {
    return {product1, product2}
  }
}

let cheaper = comparedPrice(product1, product2);
console.log(cheaper);
