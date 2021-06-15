import { Pagination } from "react-bootstrap";

function TickerDisplay(props) {
    const tickers = props.tickers;
    let listItems = []
    if (props.current > 2) {
        listItems.push(
            <Pagination.Ellipsis />
        );
    }
    for (var i = Math.max(0,props.current - 1); i < props.current; i++) {
        
            listItems.push(
                <Pagination.Item variant="secondary" onClick={() => props.updateTicker(i)}>{tickers[i]}</Pagination.Item>
            )
        
    }

    listItems.push(
        <Pagination.Item active onClick={() => props.updateTicker(props.current)}>{tickers[i]}</Pagination.Item>
    )
    
    for (var i = props.current +1; i < Math.min(props.current+3,props.tickers.length); i++) {
        if (i >= 0) {
            listItems.push(
                <Pagination.Item variant="secondary" onClick={() => props.updateTicker(i)}>{tickers[i]}</Pagination.Item>
            )
        }
    }

    if (props.current < tickers.length-3) {
        listItems.push(
            <Pagination.Ellipsis />
        );
    }



    // const listItems = tickers.map((ticker, index) => {
    //     if (index == props.current)
    //         return (<Pagination.Item active onClick={() => props.updateTicker(index)}>{ticker}</Pagination.Item>);
    //     else
    //         return (<Pagination.Item variant="secondary" onClick={() => props.updateTicker(index)}>{ticker}</Pagination.Item>)
    // });

    return (
        <Pagination>
            <Pagination.Prev onClick={() => props.updateTicker(props.current - 1)}>Back</Pagination.Prev >
            {listItems}
            <Pagination.Next onClick={() => props.updateTicker(props.current + 1)}>Next</Pagination.Next >
        </Pagination>
    )
}

export default TickerDisplay;