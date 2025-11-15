import { ConverterPanel } from 'widgets/converter-panel/ui/ConverterPanel';
import { ConversionResultPanel } from 'widgets/conversion-result-panel/ui/ConversionResultPanel';
import online from 'assets/svg/online.svg';
import clock from 'assets/svg/clock.svg';
import refresh from 'assets/svg/refresh.svg';
import './currency-converter-page.scss';
import { useExchangeRates } from 'features/exchange-rates/model/useExchangeRates';

export function CurrencyConverterPage() {
    const { error } = useExchangeRates({ base: 'EUR' });

    if (error) {
        console.error('Failed to load exchange rates', error);
    }

    return (
        <div className="converter-page">
            <div className="converter-page__inner">
                <header className="converter-page__header">
                    <h1 className="converter-page__title">Currency converter</h1>
                    <p className="converter-page__subtitle">Get real-time exchange rates</p>
                </header>

                <section className="converter-page__status-bar">
                    <div className="converter-page__status-left">
                        <img className="converter-page__status-icon" src={online} alt="online" />
                        <span className="converter-page__status-text">Online</span>
                    </div>

                    <div className="converter-page__update-status-center">
                        <img
                            className="converter-page__update-status-icon"
                            src={clock}
                            alt="clock"
                        />
                        <span className="converter-page__update-status-text">Last updated:</span>
                    </div>

                    <button className="converter-page__refresh-button" type="button">
                        <img className="converter-page__refresh-icon" src={refresh} alt="refresh" />
                        <span className="converter-page__refresh-text">Refresh rates</span>
                    </button>
                </section>

                <section className="converter-page__content">
                    <div className="converter-page__column converter-page__column--form">
                        <ConverterPanel />
                    </div>

                    <div className="converter-page__column converter-page__column--result">
                        <ConversionResultPanel />
                    </div>
                </section>
            </div>
        </div>
    );
}
