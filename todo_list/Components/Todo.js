import React from 'react';
import {Text, View} from 'react-native';

const Todo = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default Todo;