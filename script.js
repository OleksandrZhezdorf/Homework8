
const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};
const golem2 = {
    bone: 10,
    stone: 100,
    nail: 100,
    poo: 53
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: {
        material: 'metal',
        ingridients: {},
    },

    addIngridientToKettle(nameOfIngridient, amount) {
        this.kettle.ingridients[nameOfIngridient] = amount;
        if (this[nameOfIngridient] >= amount) {
            this[nameOfIngridient] = this[nameOfIngridient] - amount;
            console.log(nameOfIngridient, 'ingridient in the kettle = ' + amount, '; Ingridients left ', nameOfIngridient, ' = ', this[nameOfIngridient]);
        }
        return this[nameOfIngridient];
    },

    cook(recipe, call) {
        for (const key in recipe) {
            if (this.kettle.ingridients[key] < recipe[key]) {
                console.log('Lack of ingredients ' + call + ' = ' + name + recipe[key]);
            }
            else {
                console.log('We can cook this ' + call + ' = ' + recipe[key])
            }
        };

    }
}



kitchen.addIngridientToKettle('bone', 12);
kitchen.addIngridientToKettle('stone', 100);
kitchen.addIngridientToKettle('nail', 100);
kitchen.addIngridientToKettle('poo', 53);
kitchen.addIngridientToKettle('bone', 7);
kitchen.addIngridientToKettle('lava', 10);
kitchen.addIngridientToKettle('evil', 996);

kitchen.cook(magicBook.recipes.golem, ' golem');
kitchen.cook(magicBook.recipes.littleDevil, ' littleDevil');


