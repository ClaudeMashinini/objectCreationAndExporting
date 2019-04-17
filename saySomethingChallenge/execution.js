let Person = require ('./classCreation');

let personage_1 = new Person("Smanga", 7)
let personage_2 = new Person("Sifiso", 15)
let personage_3 = new Person("Siya", 17)

let personage = [personage_1, personage_2, personage_3]

for(k = 0; k < 2; k++) {
    for(q = 0; q < personage.length; q++){
        personage[q].saySomething()
    }
}

