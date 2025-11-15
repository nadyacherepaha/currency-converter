export interface ConversionResultPanelProps {
    amount: number;
    fromCurrency: string;
    toCurrency: string;
    rate: number | undefined;
    inverseRate: number | undefined;
    result: number | undefined;
    isLoading: boolean;
    error: string | undefined;
}
