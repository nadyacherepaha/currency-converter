import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'shared/config/react-query';
import { CurrencyConverterPage } from 'pages/currency-converter/ui/CurrencyConverterPage';

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CurrencyConverterPage />
        </QueryClientProvider>
    );
}
