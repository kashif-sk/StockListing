import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {ErrorViewProps} from './types';

const ErrorView = ({errMsg}: ErrorViewProps) => {
  return (
    <View style={styles.container}>
      <Text>{errMsg}</Text>
    </View>
  );
};

export default ErrorView;
