import React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import ErrorView from '../../components/ErrorView';
import Header from '../../components/Header';
import {isNonNil, notEmptyString} from '../../utils/helper';
import {useFetchUserHoldings} from './api';
import ListSeparator from './components/ListSeparator';
import PortfolioSummary from './components/PortfolioSummary';
import StockListItem from './components/StockListItem';
import styles from './styles';

const StockListingScreen = () => {
  const {loading, errMsg, holdingData, holdingOverviewData} =
    useFetchUserHoldings();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Upstox Holding" />
      {loading ? (
        <ActivityIndicator />
      ) : notEmptyString(errMsg) ? (
        <ErrorView errMsg={errMsg} />
      ) : (
        <>
          <FlatList
            data={holdingData}
            renderItem={({item}) => <StockListItem item={item} />}
            ItemSeparatorComponent={ListSeparator}
            style={styles.flatlist}
          />
          {isNonNil(holdingOverviewData) && (
            <PortfolioSummary data={holdingOverviewData} />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default StockListingScreen;
