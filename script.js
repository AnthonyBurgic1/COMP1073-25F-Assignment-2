// This is my Smoothie class that reps a smoothie order \\
class Smoothie { 
  constructor(size, base, fruits, extras) {
    // Here is where i store what the user selected \\ 
    this.size = size;
    this.base = base;
    this.fruits = fruits;  
    this.extras = extras;   

    // This is mu price list for each item \\ 
    this.prices = {
      size: { small: 3, medium: 5.25, large: 8.50 },
      base: { milk: 1.25, "almond milk": 2.25, yogurt: 3.25 },
      extras: { protein: 2.25, chia: 1.25, honey: 2.50 },
      fruit: 1  
    };
  }

  calculatePrice() {
     
    let total = this.prices.size[this.size] + this.prices.base[this.base];

    total += this.fruits.length * this.prices.fruit;

    if (this.extras) {
      total += this.prices.extras[this.extras] || 0;
    }

    return total.toFixed(2);
  }

  // This section generates a descriptive text summary of the smoothie order \\ 
  describe() {
    return `
    <h2>Your Smoothie</h2>
    <p><strong>Size:</strong> ${this.size}</p>
    <p><strong>Base:</strong> ${this.base}</p>
    <p><strong>Fruits:</strong> ${this.fruits.join(", ") || "None"}</p>
    <p><strong>Extras:</strong> ${this.extras || "None"}</p>
    <p><strong>Total Price:</strong> $${this.calculatePrice()}</p>
    `;
  }
}

document.getElementById("smoothieForm").addEventListener("submit", function(e) {
 
  e.preventDefault();

  const size = document.getElementById("size").value;
  const base = document.getElementById("base").value;
  const extras = document.getElementById("extras").value;

  const fruits = Array.from(
    document.querySelectorAll("input[name='fruits']:checked")
  ).map(f => f.value);

  const smoothie = new Smoothie(size, base, fruits, extras);
  
  document.getElementById("output").innerHTML = smoothie.describe();
});
