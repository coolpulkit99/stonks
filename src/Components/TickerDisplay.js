// import './TickerDisplay.css';
import { CandlestickSeries } from "react-financial-charts";

function TickerDisplay(props) {
    const tickers =props.tickers;
    const listItems =tickers.map((ticker) =>
        <button onClick={props.updateTicker(ticker)}>{ticker}</button>
    );

    return (
        <div>

        </div>
    )
}

export default TickerDisplay;