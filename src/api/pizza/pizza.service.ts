import * as options from "./pizza.decorator";

export interface IPizzaService {
    getPizza(ingredients: string[], base: string): string;
}


export class PizzaService implements IPizzaService {

    getPizza(ingredients: string[], base: string): string {
        const pizz = this.cookPizza(ingredients,base);

        return pizz.getDescription() + ', prix ' + pizz.getPrice()
    }

    private cookPizza(ingredients: string[], base: string): Pizza {

        let result: Pizza;
        
        switch (base) {
            case "creme":
                result = new options.CremePizza();
            break;        
            default:
                result = new options.BasicPizza();
            break;
        }
        ingredients.forEach(ingredient => {
            console.log(ingredient)
            switch (ingredient) {
                case "tomato":
                    result = new options.TomatoTopping(result);
                break;
                case "cheese":
                    result = new options.CheeseTopping(result);
                break;
                case "ham":
                    result = new options.HamTopping(result);
                break;
            }
        })

        return result
    }

}

export interface Pizza {
    getDescription(): string;
    getPrice(): number;
}

