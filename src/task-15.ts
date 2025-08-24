// Task 15: Promise with products

type Product = {
  id: number;
  title: string;
  price: number;
};

function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Laptop", price: 1000 },
        { id: 2, title: "Phone", price: 500 },
        { id: 3, title: "Tablet", price: 750 },
        { id: 4, title: "Monitor", price: 300 }
      ]);
    }, 1000);
  });
}

fetchProducts().then((products) => {
  console.log("Fetched products:", products);
  
  products.forEach((product) => {
    console.log(`${product.title}: $${product.price}`);
  });
  
  const expensiveProducts = products.filter(p => p.price > 500);
  console.log("Expensive products:", expensiveProducts);
});

async function processProducts(): Promise<void> {
  const products = await fetchProducts();
  
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  console.log(`Total price of all products: $${totalPrice}`);
  
  const laptop = products.find(p => p.id === 1);
  if (laptop) {
    console.log(`Found: ${laptop.title}`);
  }
}

processProducts();

export { fetchProducts, Product, processProducts };