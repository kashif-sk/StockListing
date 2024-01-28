import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {LabelValueProps, StockListItemProps} from './types';

const StockListItem = ({item}: StockListItemProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.symbolText}>{item?.symbol}</Text>
        <Text style={styles.quantityText}>{item?.quantity}</Text>
      </View>
      <View style={styles.rightRow}>
        <LabelValue label="LTP: " value={item?.ltp.toFixed(2)} />
        <LabelValue label="P/L: " value={item?.profitLoss.toFixed(2)} />
      </View>
    </View>
  );
};

const LabelValue = ({label, value}: LabelValueProps) => (
  <View style={styles.labelValueRow}>
    <Text style={styles.labelText}>{label}</Text>
    <Text style={styles.valueText}> ₹ {value}</Text>
  </View>
);

export default StockListItem;
