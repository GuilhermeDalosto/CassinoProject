import React from 'react';

function countAnimals(animals) {
    let amount = 0
    for (let index = 0; index < animals.length; index++) {
        console.log(animals)
        amount += checkAnimal(animals[index])
    }

    return amount
}

function checkAnimal(name) {    
    switch (name) {
        case 'bear':
            return 1
        case 'boar':
            return 1
        case 'bull':
            return 1
        case 'crocodile':
            return 2
        case 'deer':
            return 2
        case 'elephant':
            return 2
        case 'fox':
            return 3
        case 'giraffe':
            return 3
        case 'lion':
            return 3
        case 'monkey':
            return 4
        case 'panda':
            return 4
        case 'rhino':
            return 4
        case 'tiger':
            return 10
        case 'zebra':
            return 10
        default:
            return 0
    }
}


export const calculateMoney = (animals) => {    
    return countAnimals(animals);
};