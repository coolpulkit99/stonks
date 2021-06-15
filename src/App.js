import { Component } from "react";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.updateTicker = this.updateTicker.bind(this);
  }
  componentDidMount(){
    axios('http://localhost:8087/filtered')
      .then((results) => {
        console.log(results.data)
        this.state["tickers"]=results.data.tickers;
        this.state["pointer"]=0;
        this.setState(this.state);
      });
  }
  
  updateTicker(index){
    this.state["pointer"]=index;
    this.setState(this.state);
  }
  
  render(){
    return (
      Ticker
    );

  }



}