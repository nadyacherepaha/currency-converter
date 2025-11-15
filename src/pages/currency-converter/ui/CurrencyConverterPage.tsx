import { ConverterPanel } from 'widgets/converter-panel/ui/ConverterPanel';
import { ConversionResultPanel } from 'widgets/conversion-result-panel/ui/ConversionResultPanel';
import { useExchangeRates } from 'features/exchange-rates/model/useExchangeRates';
import { useNetworkStatus } from 'shared/lib/hooks/useNetworkStatus';
import online from 'assets/svg/online.svg';
import offline from 'assets/svg/offline.svg';
import clock from 'assets/svg/clock.svg';
import refresh from 'assets/svg/refresh.svg';
import './currency-converter-page.scss';

export function CurrencyConverterPage() {
    const isOnline = useNetworkStatus();
    const { data, isLoading, error } = useExchangeRates({ base: 'EUR' });

    const lastUpdatedLabel = data
        ? new Date(data.date).toLocaleString('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
          })
        : '-';

    const fromCurrency = 'USD';
    const toCurrency = 'EUR';
    const amount = 1;

    let rateAToB: number | undefined;
    let rateBToA: number | undefined;
    let convertedAmount: number | undefined;

    if (data) {
        const rateBaseToFrom = data.rates[fromCurrency];
        const rateBaseToTo = data.rates[toCurrency];

        if (rateBaseToFrom && rateBaseToTo) {
            rateAToB = rateBaseToTo / rateBaseToFrom;
            rateBToA = rateBaseToFrom / rateBaseToTo;
            convertedAmount = amount * rateAToB;
        }
    }

    const errorMessage =
        error instanceof Error
            ? error.message
            : error
              ? 'Failed to load exchange rates'
              : undefined;

    const statusBadgeClassName = `status-badge ${isOnline ? 'status-badge--online' : 'status-badge--offline'}`;

    return (
        <div className="converter-page">
            <div className="converter-page__inner">
                <header className="converter-page__header">
                    <h1 className="converter-page__title">Currency converter</h1>
                    <p className="converter-page__subtitle">Get real-time exchange rates</p>
                </header>

                <section className="converter-page__status-bar">
                    <div className="converter-page__status-left">
                        <span className={statusBadgeClassName}>
                            <img
                                className="status-badge__icon"
                                src={isOnline ? online : offline}
                                alt={`${isOnline ? 'online' : 'offline'} icon`}
                            />
                            {isOnline ? 'Online' : 'Offline'}
                        </span>
                    </div>

                    <div className="converter-page__update-status-center">
                        <img
                            className="converter-page__update-status-icon"
                            src={clock}
                            alt="clock icon"
                        />
                        <span className="converter-page__update-status-text">
                            Last updated: {lastUpdatedLabel}
                        </span>
                    </div>

                    <button className="converter-page__refresh-button" type="button">
                        <img
                            className="converter-page__refresh-icon"
                            src={refresh}
                            alt="refresh icon"
                        />
                        <span className="converter-page__refresh-text">Refresh rates</span>
                    </button>
                </section>

                <section className="converter-page__content">
                    <div className="converter-page__column converter-page__column--form">
                        <ConverterPanel />
                    </div>

                    <div className="converter-page__column converter-page__column--result">
                        <ConversionResultPanel
                            amount={amount}
                            fromCurrency={fromCurrency}
                            toCurrency={toCurrency}
                            rate={rateAToB}
                            inverseRate={rateBToA}
                            result={convertedAmount}
                            isLoading={isLoading}
                            error={errorMessage}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
