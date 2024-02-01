import React from 'react';
import ShapeGenerator from './shapeGenerator';
import { Image, StyleSheet } from 'react-native';

const ImageGenerator = ({value, size}) => {
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


    const styles = StyleSheet.create({
        image: {
            width: size || 50,
            height: size || 50,
        }
    })


    const generateAnimal = () => {
        if (value > 14) {
            return <ShapeGenerator size={20} />;        
        }
        let animalNames = Object.keys(images);
        let number = value || Math.floor(Math.random() * animalNames.length)        
        let randomAnimalName = animalNames[number];
        console.log(randomAnimalName)
        let imageSource = images[randomAnimalName];

        return <Image style={styles.image} source={imageSource} />;
    };

    return generateAnimal()
}

export default ImageGenerator;
