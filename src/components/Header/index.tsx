import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {Colors} from '../../theme';
import styles from './styles';
import {HeaderProps} from './types';

const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.statusBar} />
      <Text style={styles.pageNameText}>{title}</Text>
    </View>
  );
};

export default Header;
