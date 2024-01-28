import axios from 'axios';
import {useEffect, useState} from 'react';
import {isNonEmptyArray} from '../../../utils/helper';

export const useFetchUserHoldings = () => {
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  const [holdingData, setHoldingData] = useState<ProcessedHoldingData | null>(
    null,
  );
  const [holdingOverviewData, setHoldingOverviewData] =
    useState<HoldingOverviewData | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setErrMsg('');

      const url =
        'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8';
      const result = await axios.get<ApiResponse>(url);
      const {userHolding} = result.data;
      if (isNonEmptyArray(userHolding)) {
        let totalCurrentValue = 0;
        let totalInvestmentValue = 0;
        let totalProfitLoss = 0;
        let totalTodaysProfitLoss = 0;

        const processedHoldingData: ProcessedHoldingData = userHolding.map(
          item => {
            const currentValue = item.ltp * item.quantity;
            const investmentValue = item.avgPrice * item.quantity;
            const profitLoss = currentValue - investmentValue;
            const processedHoldingItem = {
              ...item,
              currentValue,
              investmentValue,
              profitLoss,
            };

            const todaysProfitLoss = (item.close - item.ltp) * item.quantity;

            totalCurrentValue += currentValue;
            totalInvestmentValue += investmentValue;
            totalProfitLoss += profitLoss;
            totalTodaysProfitLoss += todaysProfitLoss;

            return processedHoldingItem;
          },
        );
        setHoldingData(processedHoldingData);
        setHoldingOverviewData({
          totalCurrentValue,
          totalInvestmentValue,
          totalProfitLoss,
          totalTodaysProfitLoss,
        });
      } else {
        setErrMsg(noHoldingsError);
      }
    } catch (error) {
      setErrMsg(unableToFetchHoldingsError);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    errMsg,
    holdingData,
    holdingOverviewData,
  };
};

const noHoldingsError = 'No holdings found';
const unableToFetchHoldingsError = 'Unable to fetch holdings';

type HoldingItemFromApi = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
};
type ApiResponse = {
  userHolding: HoldingItemFromApi[];
};

export type ProcessedHoldingDataItem = HoldingItemFromApi & {
  profitLoss: number;
  currentValue: number;
  investmentValue: number;
};
type ProcessedHoldingData = ProcessedHoldingDataItem[];

export type HoldingOverviewData = {
  totalCurrentValue: number;
  totalInvestmentValue: number;
  totalProfitLoss: number;
  totalTodaysProfitLoss: number;
};
