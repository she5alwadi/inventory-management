// Product class
class Product {
    constructor(name, price, quantity) { /* Initialize name, price, quantity */ }
    getTotalValue() { /* Return price * quantity */ }
    toString() { /* Return product details string */ }
    static applyDiscount(products, discount) { /* Reduce price by discount % */ }
}

// PerishableProduct class (inherits Product)
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) { /* Add expirationDate */ }
    toString() { /* Include expiration date */ }
}

// Store class
class Store {
    constructor() { /* Initialize empty inventory array */ }
    addProduct(product) { /* Add product to inventory */ }
    getInventoryValue() { /* Sum total value of products */ }
    findProductByName(name) { /* Return product or null */ }
}

// Test function
function testInventorySystem() {
    // Create 5 products (3 Product, 2 PerishableProduct)
    // Add to store, calculate value, apply 15% discount, search for "Milk"
}

function testInventorySystem() {
    // Create regular products
    const apple = new Product("Apple", 2.50, 50);
    const banana = new Product("Banana", 1.75, 100);
    const orange = new Product("Orange", 2.00, 75);
    // Create perishable products
    const milk = new PerishableProduct("Milk", 1.50, 10, "2025-12-31");
    const yogurt = new PerishableProduct("Yogurt", 3.00, 20, "2025-11-30");
    // ... rest of the function ...
}