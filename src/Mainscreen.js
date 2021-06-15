import { useState } from "react";
import { Button, ButtonGroup, Modal } from "react-bootstrap";
import ListsScreen from "./Components/ListsScreen";
import axios from "axios"

function Mainscreen() {

    const [show, setShow] = useState(false);
    // const [modalType, setModalType] = useState("");
    const [modalContent, setModalType] = useState("undefined");


    let modalContentToRender = "undefined";

    const handleClose = () => setShow(false);
    const handleShow = (type) => {

        console.log(type);
        if (type == "50") {
            axios('http://localhost:8087/nifty/50')
            .then((results) => {
                modalContentToRender = (<ListsScreen pointer={0} tickers={results.data.tickers}/>);        
                setModalType(modalContentToRender);
            });
            
        } else if (type == "100") {
            axios('http://localhost:8087/nifty/100')
            .then((results) => {
                modalContentToRender = (<ListsScreen pointer={0} tickers={results.data.tickers}/>);        
                setModalType(modalContentToRender);
            });
         }
        else if (type == "200") {
            axios('http://localhost:8087/nifty/200')
            .then((results) => {
                modalContentToRender = (<ListsScreen pointer={0} tickers={results.data.tickers}/>);        
                setModalType(modalContentToRender);
            });
         }
        else if (type == "500") { 
            axios('http://localhost:8087/nifty/500')
            .then((results) => {
                modalContentToRender = (<ListsScreen pointer={0} tickers={results.data.tickers}/>);        
                setModalType(modalContentToRender);
            });
        }
        else if (type == "filtered") {
            console.log("results"); 
            axios('http://localhost:8087/filtered')
            .then((results) => {
                console.log(results);
                modalContentToRender = (<ListsScreen pointer={0} tickers={results.data.tickers}/>);        
                setModalType(modalContentToRender);
            });
        }

        setShow(true);
    
    }


    return (
        <div>
            <ButtonGroup dir="column">
                <Button onClick={()=>{handleShow("50")}}>Nifty 50</Button>
                <Button onClick={()=>{handleShow("100")}}>Nifty 100</Button>
                <Button onClick={()=>{handleShow("200")}}>Nifty 200</Button>
                <Button onClick={()=>{handleShow("500")}}>Nifty 500</Button>
                <Button onClick={()=>{handleShow("filtered")}}>Filtered</Button>
            </ButtonGroup>
            <Modal show={show} onHide={handleClose}>
                {modalContent}
            </Modal>
        </div>

    );
}

export default Mainscreen;