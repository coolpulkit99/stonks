import React from 'react';
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';


const Plot = createPlotlyComponent(Plotly);
function Chart(props) {
    return (
        <Plot
            data={[
                {
                    x: props.date,
                    open: props.open,
                    high: props.high,
                    low: props.low,
                    close: props.close,
                    type: 'candlestick',
                },
                {
                    type: 'line',
                    x: props.dateAverage,
                    y: props.average,
                    mode:"lines",
                    line:{
                        width:1,
                        color: "#F00"
                    }
                    
                },
            ]}
            layout={{
                autosize: true,
                // width: 1400,
                height: 540, 
                title: props.ticker
            }}
        />
    );
}


export default Chart;