class Smoothie {
  constructor(size, base, fruits, extras) {
    this.size = size;
    this.base = base;
    this.fruits = fruits;
    this.extras = extras;

    // Price list \\
    this.prices = {
      size: { small: 3, medium: 5, large: 7 },
      base: { milk: 1, "almond milk": 1.5, yogurt: 2 },
      extras: { protein: 2, chia: 1, honey: 0.5 },
      fruit: 1 // each fruit = $1 \\ 
    };
  }

  calculatePrice() {
    let total = 0;

    // Add size + base price \\ 
    total += this.prices.size[this.size];
    total += this.prices.base[this.base];

    // Add fruits \\ 
    total += this.fruits.length * this.prices.fruit;

    // Add extras (if selected) \\ 
    if (this.extras && this.extras !== "none") {
      total += this.prices.extras[this.extras] || 0;
    }

    return total.toFixed(2);
  }

  describe() {
    return `
      <h2>Your Smoothie Summary</h2>
      <p><strong>Size:</strong> ${this.size}</p>
      <p><strong>Base:</strong> ${this.base}</p>
      <p><strong>Fruits:</strong> ${this.fruits.join(", ") || "None"}</p>
      <p><strong>Extras:</strong> ${this.extras !== "none" ? this.extras : "None"}</p>
      <p><strong>Total Price:</strong> $${this.calculatePrice()}</p>
    `;
  }
}

// ---- Form Handling ---- //

const smoothieForm = document.getElementById("smoothieForm");
const output = document.getElementById("output");
const liveTotal = document.getElementById("liveTotal");
const orderHistory = document.getElementById("orderHistory");

smoothieForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const size = document.getElementById("size").value;
  const base = document.getElementById("base").value;
  const extras = document.getElementById("extras").value;
  const fruits = Array.from(
    document.querySelectorAll("input[name='fruits']:checked")
  ).map(f => f.value);

  const smoothie = new Smoothie(size, base, fruits, extras);

  output.innerHTML = smoothie.describe();

  // Add to order history list \\ 
  const li = document.createElement("li");
  li.textContent = `${smoothie.size} smoothie with ${smoothie.base}, fruits: [${smoothie.fruits.join(", ")}], extra: ${smoothie.extras} — $${smoothie.calculatePrice()}`;
  orderHistory.appendChild(li);
});

// ---- Live Price Updates ---- //

function updateLivePrice() {
  const size = document.getElementById("size").value;
  const base = document.getElementById("base").value;
  const extras = document.getElementById("extras").value;
  const fruits = Array.from(
    document.querySelectorAll("input[name='fruits']:checked")
  ).map(f => f.value);

  const tempSmoothie = new Smoothie(size, base, fruits, extras);
  liveTotal.textContent = `$${tempSmoothie.calculatePrice()}`;
}

// Trigger update whenever inputs change \\ 
document.querySelectorAll("#size, #base, #extras, input[name='fruits']").forEach(input => {
  input.addEventListener("change", updateLivePrice);
});

// Initialize live price on page load \\
updateLivePrice();
