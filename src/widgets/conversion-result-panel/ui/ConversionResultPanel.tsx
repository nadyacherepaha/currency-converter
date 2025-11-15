import './conversion-result-panel.scss';

export function ConversionResultPanel() {
    return (
        <div className="result-card">
            <h2 className="result-card__title">Conversion result</h2>

            <div className="result-card__value-block">
                <div className="result-card__amount">€0.00</div>
                <div className="result-card__sub">1 USD =</div>
            </div>

            <hr className="result-card__divider" />

            <div className="result-card__info">
                <div className="result-card__info-row">
                    <span className="result-card__label">Exchange Rate</span>
                    <span className="result-card__value-text">1 USD = 0.000000 EUR</span>
                </div>
                <div className="result-card__info-row">
                    <span className="result-card__label">Inverse Rate</span>
                    <span className="result-card__value-text">1 EUR = 0.00000 USD</span>
                </div>
            </div>

            <hr className="result-card__divider" />

            <div className="result-card__disclaimer">
                Rates are for informational purposes only and may not reflect real-time market rates
            </div>
        </div>
    );
}
