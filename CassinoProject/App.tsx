import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import TabBar from './src/scene/editors/tabBar';
import EditorsScene from './src/scene/editors/editorsScene';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ['Home', 'Vídeos', 'Para Você', 'Editorias', 'Colunistas'];

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  const handlePage = (index) => {
    if (index == 3) {
      return <EditorsScene/>
    }
    return <Text>Estadão PAGE</Text>
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.content}>
        {handlePage(selectedTab)}
      </View>
      <TabBar tabs={tabs} onTabPress={handleTabPress} />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;