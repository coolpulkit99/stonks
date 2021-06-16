import { ListGroup, OverlayTrigger, Pagination, Tooltip } from "react-bootstrap";

function TickerDisplay(props) {
    const tickers = props.tickers;
    const listItems = tickers.map((ticker, index) => {
        if (index == props.current)
            return (<ListGroup.Item action as="li" active onClick={() => props.updateTicker(index)}>{ticker}</ListGroup.Item>);
        else
            return (<ListGroup.Item action as="li" onClick={() => props.updateTicker(index)}>{ticker}</ListGroup.Item>)
    });

    // let listItems=[]
    // for(var i =0 ;i<Math.min(3);i++)
    // const addToWatchlist = () => { props.addToWatchlist(props.current) }
    // const removeFromWatchlist = () => { props.removeFromWatchlist(props.current) }


    return (
        <div className="flexbox stocklist">
            <Pagination >
                <Pagination.Prev className="buttonnormalize" onClick={() => props.updateTicker(props.current - 1)}>Back</Pagination.Prev >
                <Pagination.Next className="buttonnormalize" onClick={() => props.updateTicker(props.current + 1)}>Next</Pagination.Next >
                </Pagination>
            <Pagination>

            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">    Click to copy all tickers!</Tooltip>}>
            <Pagination.Next className="buttonnormalize" 
            // disabled
            onClick={()=>{
                var input = document.createElement("input");
                input.type = "text";
                input.value= tickers.join(" ");
                document.body.appendChild(input);
                input.select();
                document. execCommand("copy");   
                document.body.removeChild(input);
            }}
            >{(1+props.current)+" of "+props.tickers.length + " Tickers"}</Pagination.Next >
            </OverlayTrigger>

            </Pagination>
            {/* <Pagination>
                
                <Pagination.Prev className="buttonnormalize" onClick={addToWatchlist}>Add</Pagination.Prev >
                <Pagination.Next className="buttonnormalize" onClick={removeFromWatchlist}>Remove</Pagination.Next >
            </Pagination> */}
            <ListGroup className="list" vertical> {listItems} </ListGroup>

        </div>
    )
}




export default TickerDisplay;