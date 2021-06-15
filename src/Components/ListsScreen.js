import axios from "axios";
import { Component } from "react";
import ChartFrame from "./ChartFrame";
import TickerDisplay from "./TickerDisplay";
import Watchlist from "./Watchlist";



class ListsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { tickers: ["AAPL"], pointer: 0, watchlist: new Set() }
    this.updateTicker = this.updateTicker.bind(this);
    this.addToWatchlist=this.addToWatchlist.bind(this);
    this.removeFromWatchlist=this.removeFromWatchlist.bind(this);
  }
  componentDidMount() {
    console.log("called")
    this.state["tickers"] = this.props.tickers;
    // console.log(this.props.tickers);
    this.state["pointer"] = this.props.pointer;
    this.setState(this.state);
  }

  updateTicker(index) {
    if (index >= 0 && index < this.state.tickers.length) {
      this.state["pointer"] = index;
      this.setState(this.state);
    }
  }

  addToWatchlist(index) {
    this.state["watchlist"].add(index);
    this.setState(this.state);
  }
  removeFromWatchlist(index) {
    this.state["watchlist"].delete(index);
    this.setState(this.state);
  }
  render() {
    console.log(this.state)
    return (
      <div className="framebox">
        <TickerDisplay 
        className="tickerlist" 
        updateTicker={this.updateTicker} 
        tickers={this.state.tickers} 
        current={this.state.pointer} 
        addToWatchlist={this.addToWatchlist} 
        removeFromWatchlist={this.removeFromWatchlist}/>
        
        <ChartFrame className="chartdisplay" 
        ticker={this.state.tickers.length > 0 ? this.state.tickers[this.state.pointer] : []}/>
        
        <Watchlist 
        watchlist={this.state.watchlist} 
        updateTicker={this.updateTicker} 
        tickers={this.state.tickers} 
        current={this.state.pointer} 
        addToWatchlist={this.addToWatchlist} 
        removeFromWatchlist={this.removeFromWatchlist}/>

      </div>
    );

  }

}

export default ListsScreen;