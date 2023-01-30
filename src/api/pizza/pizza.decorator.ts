import { Pizza } from './pizza.service';

abstract class PizzaDecorator implements Pizza {
    protected pizza: Pizza;

    constructor(pizza: Pizza) {
        this.pizza = pizza;
    }

    abstract getDescription(): string 
    abstract getPrice(): number
}
export class BasicPizza implements Pizza {
    getDescription(): string {
        return "Pizza base sauce tomate";
    }
    getPrice(): number {
        return 8;
    }
}
export class CremePizza implements Pizza {
    getDescription(): string {
        return "Pizza base creme";
    }
    getPrice(): number {
        return 9;
    }
}
export class TomatoTopping extends PizzaDecorator {
    constructor(pizza: Pizza) {
        super(pizza);
    }
    getDescription(): string {
        return this.pizza.getDescription() + ', with tomato topping';
    }
    getPrice(): number {
        return this.pizza.getPrice() + 1;
    }
}
export class CheeseTopping extends PizzaDecorator {
    constructor(pizza: Pizza) {
        super(pizza);
    }
    getDescription(): string {
        return this.pizza.getDescription() + ', with cheese topping';
    }
    getPrice(): number {
        return this.pizza.getPrice() + 2;
    }
}
export class HamTopping extends PizzaDecorator {
    constructor(pizza: Pizza) {
        super(pizza);
    }
    getDescription(): string {
        return this.pizza.getDescription() + ', with ham topping';
    }
    getPrice(): number {
        return this.pizza.getPrice() + 5;
    }
}