export interface ExchangeRatesResponse {
    date: string;
    base: string;
    rates: Record<string, number>;
}
