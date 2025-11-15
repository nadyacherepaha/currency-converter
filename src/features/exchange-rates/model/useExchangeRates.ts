import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates } from '../api/exchangeRatesApi';
import type { ExchangeRatesResponse } from '../api/types';
import type { UseExchangeRatesParams } from './types';

export function useExchangeRates({ base }: UseExchangeRatesParams) {
    return useQuery<ExchangeRatesResponse>({
        queryKey: ['exchange-rates', base],
        queryFn: () => fetchExchangeRates(base),
    });
}
