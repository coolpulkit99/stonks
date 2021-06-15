import { ListGroup, Pagination } from "react-bootstrap";

function Watchlist(props) {
    // console.log(props);
    const tickers = props.tickers;
    console.log(props.watchlist);
    const listItems = Array.from(props.watchlist).map(index => {
        // console.log(tickers[index]);
        return (
            <ListGroup.Item as="li">
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
            <ListGroup.Item variant="danger">Watchlist</ListGroup.Item>
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