import axios from "axios";
import { Component } from "react";
import ChartFrame from "./ChartFrame";
import TickerDisplay from "./TickerDisplay";
import Watchlist from "./Watchlist";



class ListsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { tickers: ["AAPL"], pointer: 0, watchlist: [] }
    this.updateTicker = this.updateTicker.bind(this);
  }
  componentDidMount() {
    console.log("called")
    this.state["tickers"] =this.props.tickers;
    this.state["pointer"] = this.props.pointer;
        this.setState(this.state);

    // axios('http://localhost:8087/filtered')
    //   .then((results) => {
    //     console.log(results.data)
    //     this.state["tickers"] = ["AAPL", "AAPL", "AAPL", "AAPL", "AAPL", "AAPL", "AAPL", "AAPL", "AAPL", "AAPL", "AAPL", "AAPL", "AAPL"]//results.data.tickers;
    //     this.state["pointer"] = 0;
    //     this.setState(this.state);
    //   });
  }

  updateTicker(index) {
    if (index >= 0 && index < this.state.tickers.length) {
      this.state["pointer"] = index;
      this.setState(this.state);
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="framebox">
        <TickerDisplay className="tickerlist" updateTicker={this.updateTicker} tickers={this.state.tickers} current={this.state.pointer} />
        <ChartFrame className="chartdisplay" ticker={this.state.tickers.length > 0 ? this.state.tickers[this.state.pointer] : []}></ChartFrame>
        <Watchlist watchlist={this.state.watchlist} tickers={this.state.tickers}></Watchlist>
      </div>
    );

  }

}

export default ListsScreen;