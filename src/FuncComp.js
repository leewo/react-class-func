import { useEffect, useState } from "react";

let count = 0;

function FuncComp(props) {
    let [number, setNumber] = useState(props.initNumber);
    let [date, setDate] = useState((new Date()).toString())

    useEffect(() => {
        console.log("componentDidmount. count=", ++count);
        return () => {
            console.log("clean up componentDidmount");
        }
    }, []);

    useEffect(() => {
        console.log("useEffect number. count=", ++count);
        document.title = "useEffect. count=" + count;
        return () => {
            console.log("clean up number");
        }
    }, [number]);

    useEffect(() => {
        console.log("useEffect date. count=", ++count);
        document.title = "useEffect. count=" + count;
        return () => {
            console.log("clean up date");
        }
    }, [date]);

    console.log("render");
    return (
        <div className="container">
            <h2>function style component</h2>
            <p>Number : {number}</p>
            <input type="button" value="random" onClick={
                () => {
                    setNumber(Math.random());
                }
            }></input>
            <p>Date : {date}</p>
            <input type="button" value="now" onClick={
                () => {
                    setDate(new Date().toString())
                }
            }></input>
        </div>
    );
}

export default FuncComp;