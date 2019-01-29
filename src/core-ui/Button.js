import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

type Props = {
  type: 'PRIMARY' | 'CANCEL' | 'INFO' | 'DEFAULT',
  leftIcon: string,
  onClick: () => void,
};

export default class Button extends Component<Props> {
  render() {
    let {type, leftIcon, onClick} = this.props;
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={COLOR_TYPES[type]}>
          <Text>{type}</Text>
          <Ionicons name={leftIcon} size={30} />
        </View>
      </TouchableOpacity>
    );
  }
}

const COLOR_TYPES = {
  PRIMARY: {
    backgroundColor: '#00f',
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 4,
  },
  CANCEL: {
    backgroundColor: '#f00',
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 4,
  },
  INFO: {
    backgroundColor: '#0f0',
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 4,
  },
  DEFAULT: {
    backgroundColor: '#fff',
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
