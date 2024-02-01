import React, { useRef } from 'react';
import CustomListRow from '../components/listRow';
import CustomGrid from '../components/grid';
import JoyStick from '../components/joystick';
import { StyleSheet, SafeAreaView } from 'react-native';

const GameScene = () => {
    const gridItems = Array.from({ length: 20 }, (_, index) => ({}));
    const gridRef = useRef(null);

    const handleReload = (exposedFunctions) => {
        // Armazena a função reload do CustomGrid no ref
        gridRef.current = exposedFunctions.reload;
    };

    return (
        <SafeAreaView style={styles.scene}>
            <CustomListRow title="Hero Passives" items={[1, 2, 3]} />
            <CustomGrid title="Board" items={gridItems} onReload={handleReload} />
            <JoyStick onPressButton={() => gridRef.current && gridRef.current()} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scene: {
        backgroundColor: 'rgba(0, 255, 0, 0.3)'
    }
});

export default GameScene;
