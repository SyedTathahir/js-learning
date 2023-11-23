function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.calculateTotalPrice = function (){
    return this.price*this.quantity
}

const product1 =  new Product("widget",10,5)

const totalValue = product1.calculateTotalPrice(); 

const product2 =  new Product("gadget",100,500)

const totalValue2 = product2.calculateTotalPrice(); 

console.log(Product.prototype);
console.log(product1);
console.log(`Total value of Product1: ${totalValue}`)
console.log(`Total Value of Product2: ${totalValue2}`)
