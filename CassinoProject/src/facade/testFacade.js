import React from 'react';
import { View } from 'react-native';
import ViewFacade from './ViewFacade';

export default function App() {
  return (
    <View>
      {ViewFacade.renderTextView('Hello, World!')}
      {ViewFacade.renderCustomView(
        <Text>This is a custom view.</Text>
      )}
    </View>
  );
}
