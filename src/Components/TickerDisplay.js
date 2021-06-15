import { ListGroup, Pagination } from "react-bootstrap";

function TickerDisplay(props) {
    const tickers = props.tickers;
    const listItems = tickers.map((ticker, index) => {
        if (index == props.current)
            return (<ListGroup.Item as="li" active onClick={() => props.updateTicker(index)}>{ticker}</ListGroup.Item>);
        else
            return (<ListGroup.Item as="li" onClick={() => props.updateTicker(index)}>{ticker}</ListGroup.Item>)
    });

    // let listItems=[]
    // for(var i =0 ;i<Math.min(3);i++)


    return (
        <div>
        <Pagination>
            <Pagination.Prev onClick={() => props.updateTicker(props.current - 1)}>Back</Pagination.Prev >
            <Pagination.Next onClick={() => props.updateTicker(props.current + 1)}>Next</Pagination.Next >
        </Pagination>
        <ListGroup  className="list" vertical> {listItems} </ListGroup>
            
        </div>
    )
}




export default TickerDisplay;