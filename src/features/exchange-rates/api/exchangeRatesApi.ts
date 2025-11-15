import type { ExchangeRatesResponse } from './types';

const VATCOMPLY_API_URL = 'https://api.vatcomply.com/rates';

export async function fetchExchangeRates(base: string = 'EUR'): Promise<ExchangeRatesResponse> {
    const url = `${VATCOMPLY_API_URL}?base=${encodeURIComponent(base)}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to load exchange rates (${response.status})`);
    }

    const data: ExchangeRatesResponse = await response.json();

    if (!data || !data.rates || typeof data.base !== 'string') {
        throw new Error('Invalid exchange rates response');
    }

    return data;
}
