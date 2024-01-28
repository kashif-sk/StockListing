/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './src/services/axiosInterceptor';
import StockListingScreen from './src/pages/StockListing';

function App(): JSX.Element {
  return <StockListingScreen />;
}

export default App;
