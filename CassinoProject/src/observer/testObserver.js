import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Observer from './Observer';

class SubjectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.observer = new Observer();
  }

  incrementCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
    this.observer.notify(count + 1);
  };

  render() {
    const { count } = this.state;
    return (
      <View>
        <Text>Count: {count}</Text>
        <Button title="Increment" onPress={this.incrementCount} />
      </View>
    );
  }
}

export default SubjectComponent;
