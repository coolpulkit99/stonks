import { ListGroup, Pagination } from "react-bootstrap";

function Watchlist(props) {
    // console.log(props);
    const tickers = props.tickers;
    const listItems = props.watchlist.map(index => {
        // console.log(tickers[index]);
        return (
            <ListGroup.Item as="li">
                {tickers[index]}
            </ListGroup.Item>
        );
    }
    );
    // console.log(listItems);


    return (
        <div>
            <ListGroup.Item variant="danger">Watchlist</ListGroup.Item>
            <ListGroup className="list" vertical>

                {listItems}
            </ListGroup>
        </div>
    )
}

export default Watchlist;