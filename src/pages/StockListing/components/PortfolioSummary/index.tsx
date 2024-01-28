import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {LabelValueProps, PortfolioSummaryProps} from './types';

const PortfolioSummary = ({data}: PortfolioSummaryProps) => {
  const [isCardOpen, setCardOpen] = useState(false);

  const toggleCard = () => setCardOpen(prevState => !prevState);

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCard}>
      <Text style={styles.angleIndicator}>{isCardOpen ? '▼' : '▲'}</Text>
      {isCardOpen ? (
        <View style={styles.innerContainer}>
          <LabelValue label="Current Value:" value={data.totalCurrentValue} />
          <LabelValue
            label="Total Investment:"
            value={data.totalInvestmentValue}
          />
          <LabelValue
            label="Today's Profit & Loss:"
            value={data.totalTodaysProfitLoss}
          />
        </View>
      ) : null}
      <LabelValue label="Profit & Loss:" value={data.totalProfitLoss} />
    </TouchableOpacity>
  );
};

const LabelValue = ({label, value}: LabelValueProps) => (
  <View style={styles.labelValueContainer}>
    <Text style={styles.labelText}>{label}</Text>
    <Text style={styles.valueText}>₹ {value.toFixed(2)}</Text>
  </View>
);

export default PortfolioSummary;
