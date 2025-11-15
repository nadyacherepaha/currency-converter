import './converter-panel.scss';
import switchIcon from 'assets/svg/switch.svg';

export function ConverterPanel() {
    return (
        <div className="converter-card">
            <div className="converter-card__section converter-card__section--amount">
                <label className="converter-card__label" htmlFor="amount-input">
                    Amount
                </label>
                <input
                    id="amount-input"
                    className="converter-card__amount-input"
                    type="text"
                    placeholder="1"
                    value="1"
                />
            </div>

            <div className="converter-card__section converter-card__section--currencies">
                <div className="converter-card__row">
                    <div className="converter-card__field">
                        <span className="converter-card__field-label">From</span>
                        <button className="currency-select" type="button">
                            <span className="currency-select__icon">
                                <span className="currency-select__icon-img">$</span>
                            </span>
                            <span className="currency-select__meta">
                                <span className="currency-select__code">USD</span>
                                <span className="currency-select__name">United States Dollar</span>
                            </span>
                        </button>
                    </div>

                    <button className="converter-card__swap" type="button">
                        <img
                            className="converter-card__swap-icon"
                            src={switchIcon}
                            alt="Swap currencies"
                        />
                    </button>

                    <div className="converter-card__field">
                        <span className="converter-card__field-label">To</span>
                        <button className="currency-select" type="button">
                            <span className="currency-select__icon">
                                <span className="currency-select__icon-img">€</span>
                            </span>
                            <span className="currency-select__meta">
                                <span className="currency-select__code">EUR</span>
                                <span className="currency-select__name">Euro</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
