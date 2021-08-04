// размер бургера
const SIZE_SMALL = 'small';
const SIZE_MED = 'med';
const SIZE_BIG = 'big';

// добавки
const CHEESE = 'cheese';
const SALAD = 'salad';
const POTATO = 'potato';
const FLAVORING = 'flavoring';
const MAYO = 'mayo';

function Hamburger(size) {

    if (size === 'small') {
        this.price = 50;
        this.calories = 20;
    } else if (size === 'med') {
        this.price = 75;
        this.calories = 30;
    } else if (size === 'big') {
        this.price = 100;
        this.calories = 40;
    }
    this.addModifier = function(topping) {
        if (topping === 'cheese') {
            this.price += 10;
            this.calories += 20;
        } else if (topping === 'salad') {
            this.price += 20;
            this.calories += 5;
        } else if (topping === 'potato') {
            this.price += 15;
            this.calories += 10;
        } else if (topping === 'flavoring') {
            this.price += 15;
            this.calories += 0;
        } else if (topping === 'mayo') {
            this.price += 20;
            this.calories += 5;
        }
    }

    this.getPrice = function(){
       return this.price;
    };

    this.getCalories = function(){
        return this.calories;
    }

};


let medBurger = new Hamburger(SIZE_MED);

medBurger.addModifier('salad');
medBurger.addModifier('potato');

console.log('Price with sauce: ' + medBurger.getPrice());
console.log('Callories with sauce: ' + medBurger.getCalories());

