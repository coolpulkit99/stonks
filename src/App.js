import axios from "axios";
import { Component } from "react";
import ChartFrame from "./Components/ChartFrame";
import TickerDisplay from "./Components/TickerDisplay";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { tickers: ["AAPL"], pointer: 0 }
    this.updateTicker = this.updateTicker.bind(this);
  }
  componentDidMount() {
    console.log("called")
    axios('http://localhost:8087/filtered')
      .then((results) => {
        console.log(results.data)
        this.state["tickers"] = ["AAPL","AAPL","AAPL","AAPL","AAPL","AAPL"]//results.data.tickers;
        this.state["pointer"] = 0;
        this.setState(this.state);
      });
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
      <div>
        <TickerDisplay updateTicker={this.updateTicker} tickers={this.state.tickers} current={this.state.pointer} />
        <ChartFrame ticker={this.state.tickers.length > 0 ? this.state.tickers[this.state.pointer] : []}></ChartFrame>
      </div>
    );

  }

}

export default App;