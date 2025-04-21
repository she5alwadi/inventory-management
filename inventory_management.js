/**
 * Base class representing a product in the inventory
 */
class Product {
    /**
     * @param {string} name - Name of the product
     * @param {number} price - Price of the product
     * @param {number} quantity - Quantity in stock
     */
    constructor(name, price, quantity) {
        if (price < 0 || quantity < 0) {
            throw new Error("Price and quantity must be non-negative");
        }
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    /**
     * Calculates total value of product in stock
     * @returns {number} Price multiplied by quantity
     */
    getTotalValue() {
        return this.price * this.quantity;
    }

    /**
     * Returns string representation of product
     * @returns {string} Product details
     */
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    /**
     * Static method to apply discount to multiple products
     * @param {Product[]} products - Array of products
     * @param {number} discount - Discount percentage (e.g., 0.1 for 10%)
     */
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price = product.price * (1 - discount);
        });
    }
}

/**
 * Subclass for perishable products, extends Product
 */
class PerishableProduct extends Product {
    /**
     * @param {string} name - Name of product
     * @param {number} price - Price of product
     * @param {number} quantity - Quantity in stock
     * @param {string} expirationDate - Expiration date (YYYY-MM-DD)
     */
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    /**
     * Overrides toString to include expiration date
     * @returns {string} Product details with expiration
     */
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

/**
 * Class to manage store inventory
 */
class Store {
    /**
     * Initializes empty inventory array
     */
    constructor() {
        this.inventory = [];
    }

    /**
     * Adds product to inventory
     * @param {Product} product - Product to add
     */
    addProduct(product) {
        this.inventory.push(product);
    }

    /**
     * Calculates total value of all products
     * @returns {number} Sum of all product values
     */
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    /**
     * Finds product by name
     * @param {string} name - Name to search for
     * @returns {Product|null} Found product or null
     */
    findProductByName(name) {
        return this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
    }
}

/**
 * Global variables and initialization
 */
let store = null;
let products = [];
let originalPrices = [];

function initializeStore() {
    if (!store) {
        const apple = new Product("Apple", 2.50, 50);
        const banana = new Product("Banana", 1.75, 100);
        const orange = new Product("Orange", 2.00, 75);
        const bread = new Product("Bread", 3.00, 30);
        const milk = new PerishableProduct("Milk", 1.50, 10, "2025-12-31");
        const yogurt = new PerishableProduct("Yogurt", 3.00, 20, "2025-11-30");

        products = [apple, banana, orange, bread, milk, yogurt];
        originalPrices = products.map(product => product.price);

        store = new Store();
        products.forEach(product => store.addProduct(product));
    }
}

/**
 * Testing the inventory system
 */
function testInventorySystem() {
    initializeStore();

    console.log("Initial Inventory Value: $", store.getInventoryValue().toFixed(2));

    Product.applyDiscount(products, 0.15);

    console.log("Inventory Value After 15% Discount: $", store.getInventoryValue().toFixed(2));

    const searchProduct = store.findProductByName("Milk");
    console.log("Found Product:", searchProduct ? searchProduct.toString() : "Not found");
}

function resetDiscount() {
    products.forEach((product, index) => {
        product.price = originalPrices[index];
    });
}