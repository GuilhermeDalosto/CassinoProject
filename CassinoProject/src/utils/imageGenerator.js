import React from 'react';
import { Image, StyleSheet } from 'react-native';

// Importe todas as imagens antecipadamente
const ImageGenerator = () => {
    const images = {
        bear: require('../../assets/bear.png'),
        boar: require('../../assets/boar.png'),
        bull: require('../../assets/bull.png'),
        crocodile: require('../../assets/crocodile.png'),
        deer: require('../../assets/deer.png'),
        elephant: require('../../assets/elephant.png'),
        fox: require('../../assets/fox.png'),
        giraffe: require('../../assets/giraffe.png'),
        lion: require('../../assets/lion.png'),
        monkey: require('../../assets/monkey.png'),
        panda: require('../../assets/panda.png'),
        rhino: require('../../assets/rhino.png'),
        tiger: require('../../assets/tiger.png'),
        zebra: require('../../assets/zebra.png'),
    };

    const generateAnimal = () => {
        const animalNames = Object.keys(images);
        const randomAnimalName = animalNames[Math.floor(Math.random() * animalNames.length)];
        const imageSource = images[randomAnimalName];

        return <Image style={styles.image} source={imageSource} />;
    };

    return generateAnimal()
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50
    }

})
export default ImageGenerator;
