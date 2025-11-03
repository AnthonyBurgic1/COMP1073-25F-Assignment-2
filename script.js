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
}