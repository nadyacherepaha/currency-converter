import { ConversionResultPanelProps } from './types';
import './conversion-result-panel.scss';

export function ConversionResultPanel({
    amount,
    fromCurrency,
    toCurrency,
    rate,
    inverseRate,
    result,
    isLoading,
    error,
}: ConversionResultPanelProps) {
    const formattedResult = typeof result === 'number' ? result.toFixed(2) : '—';
    const formattedRate = typeof rate === 'number' ? rate.toFixed(6) : '—';
    const formattedInverseRate = typeof inverseRate === 'number' ? inverseRate.toFixed(6) : '—';

    return (
        <div className="result-card">
            <h2 className="result-card__title">Conversion result</h2>

            <div className="result-card__value-block">
                {isLoading ? (
                    <div className="result-card__status">Loading rates…</div>
                ) : error ? (
                    <div className="result-card__error">Failed to load rates</div>
                ) : (
                    <>
                        <div className="result-card__amount">{formattedResult}</div>
                        <div className="result-card__sub">
                            {amount} {fromCurrency} =
                        </div>
                    </>
                )}
            </div>

            <hr className="result-card__divider" />

            <div className="result-card__info">
                <div className="result-card__info-row">
                    <span className="result-card__label">Exchange Rate</span>
                    <span className="result-card__value-text">
                        {amount} {fromCurrency} = {formattedRate} {toCurrency}
                    </span>
                </div>
                <div className="result-card__info-row">
                    <span className="result-card__label">Inverse Rate</span>
                    <span className="result-card__value-text">
                        1 {toCurrency} = {formattedInverseRate} {fromCurrency}
                    </span>
                </div>
            </div>

            <hr className="result-card__divider" />

            <div className="result-card__disclaimer">
                Rates are for informational purposes only and may not reflect real-time market rates
            </div>
        </div>
    );
}
