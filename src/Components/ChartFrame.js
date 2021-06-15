import Chart from './Chart';
import { Component } from "react";
import axios from "axios";
  
var sma = require('sma');

function listify(data) {
  var open = [];
  var high = [];
  var low = [];
  var close = [];
  var date = [];

  data.forEach(element => {
    open.push(element.open);
    high.push(element.high);
    low.push(element.low);
    close.push(element.close);
    date.push(element.date);
  });

  let response = {
    open: open.slice(43),
    high: high.slice(43),
    low: low.slice(43),
    close: close.slice(43),
    date: date.slice(43),
    average: sma(close, 44),
    dateAverage: date.slice(43)
  }
  // console.log(response)
  return response;
}

function reFormat(apiResponse) {
  let quotes = apiResponse["quotes"];
  let response = listify(quotes["data"]);
  response["ticker"] = quotes["ticker"];
  // response.merge();
  return response;
}


class ChartFrame extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps){
    axios('http://localhost:8087/ticker/'+nextProps["ticker"])
    .then((results) => {
      console.log(results.data)
      this.setState(reFormat(results.data))
    }
  );
  }

  render() {
    return (
      <div>
        <Chart
          open={this.state.open}
          high={this.state.high}
          low={this.state.low}
          close={this.state.close}
          date={this.state.date}
          average={this.state.average}
          dateAverage={this.state.dateAverage}
          ticker={this.state.ticker}
        />
      </div>
    );
  }

}

export default ChartFrame;
