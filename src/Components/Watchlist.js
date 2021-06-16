import { ListGroup, OverlayTrigger, Pagination, Tooltip } from "react-bootstrap";

function Watchlist(props) {
    // console.log(props);
    const tickers = props.tickers;
    console.log(props.watchlist);
    const listItems = Array.from(props.watchlist).map(index => {
        // console.log(tickers[index]);
        return (
            <ListGroup.Item action as="li" onClick={() => props.updateTicker(index)}>
                {tickers[index]}
            </ListGroup.Item>
        );
    }
    );
    // console.log(listItems);
    const keyHandle=(event)=>{
        if(event.key === 'Enter'){
            console.log('press here! ')
        }
    }

    const addToWatchlist = () => { props.addToWatchlist(props.current) }
    const removeFromWatchlist = () => { props.removeFromWatchlist(props.current) }

    return (
        <div>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">    Click to copy watchlist!</Tooltip>}>
            <ListGroup.Item className="buttonnormalize" action style={{textAlign: "center"}} variant="Primary" onClick={()=>{
                var input = document.createElement("input");
                input.type = "text";
                input.value= Array.from(props.watchlist).map(index=>tickers[index]).join(" ");
                document.body.appendChild(input);
                input.select();
                document. execCommand("copy");   
                document.body.removeChild(input);
            }}>Watchlist</ListGroup.Item>
            </OverlayTrigger>
            <Pagination>
                
                <Pagination.Prev className="buttonnormalize" onClick={addToWatchlist}>Add</Pagination.Prev >
                <Pagination.Next className="buttonnormalize" onClick={removeFromWatchlist}>Remove</Pagination.Next >
            </Pagination>
            <ListGroup className="list" vertical>

                {listItems}
            </ListGroup>
        </div>
    )
}

export default Watchlist;