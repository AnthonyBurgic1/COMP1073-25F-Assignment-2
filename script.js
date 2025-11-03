// My Smoothie Shop is here to help you create delicious and healthy smoothies! \\ 
class Smoothie {
    constructor(size, base, fruits, extras) {
        this.size = size;
        this.base = base;
        this.base = fruits;
        this.base = extras;
        this.base = {
            size: { small: 3, medium: 5, large: 7},
            base: { milk: 1, "almond milk": 1.5, yogurt: 2},
            extras: { protein: 2, chia: 1, honey: 0.5},
            fruit: 1
        };
    }

// Let's Calculate the total price of the smoothies \\ 
    calculatePrice() {
        let total = this.prices.size[this.size] + this.prices.base[this.base];
        total += this.fruits.length * this.prices.fruit;
        if (this.extras) total += this.prices.extras[this.extras] || 0;
        return total.toFixed(2);
    }

// Display the smoothie description \\
    describe() {
        return `
      <h2>Your Smoothie Summary</h2>
      <p><strong>Size:</strong> ${this.size}</p>
      <p><strong>Base:</strong> ${this.base}</p>
      <p><strong>Fruits:</strong> ${this.fruits.join(", ") || "None"}</p>
      <p><strong>Extras:</strong> ${this.extras || "None"}</p>
      <p><strong>Total Price:</strong> $${this.calculatePrice()}</p>
    `;
    }
}

// Lets handle the form submission \\
document.getElementById("smoothieForm").addEventListener("submit", function(event) {
    event.preventDefault();

// Get form values \\
    const size = document.getElementById("size").value;
    const base = document.getElementById("base").value;
     const extras = document.getElementById("extras").value;
    const fruits = Array.from(document.querySelectorAll("input[name='fruits']:checked")).map(f => f.value);
   
// Create a Smoothie object \\ 
    const smoothie = new Smoothie(size, base, fruits, extras);

// Let's Output the Description \\ 
    document.getElementById("output").innerHTML = smoothie.description();
});