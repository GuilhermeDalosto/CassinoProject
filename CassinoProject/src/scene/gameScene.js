import React, { useRef } from 'react';
import CustomListRow from '../components/listRow';
import CustomGrid from '../components/grid';
// import reminload from '../components/grid';
import { minhaFuncaoDentroDoComponente } from '../components/grid';
import JoyStick from '../components/joystick';

import { StyleSheet, SafeAreaView } from 'react-native';

const GameScene = () => {    
    const gridItems = Array.from({ length: 20 }, (_, index) => ({}));

    const customGrid = <CustomGrid title = "Board" items = {gridItems}/>   

    function runGame() {
        // customGrid.callReload()
    }

    return (
        <SafeAreaView style={styles.scene}>
            <CustomListRow title = "Hero Passives" items = {[1,2,3]} />    
            {customGrid}

            <JoyStick onPressButton = {runGame} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({ 
    scene: {
        backgroundColor: 'rgba(0, 255, 0, 0.3)'
    }
})

export default GameScene;
