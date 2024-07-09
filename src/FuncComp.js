import { useEffect, useState } from "react";

const cssStyle = 'color:blue';

let count = 0;

function FuncComp(props) {
    let [number, setNumber] = useState(props.initNumber);
    let [date, setDate] = useState((new Date()).toString())

    // side effect
    useEffect(() => {
        console.log("%cuseEffect. componentDidmount & componentDidUpdate. count=", cssStyle, ++count);
        return () => {
            console.log("%cclean up. useEffect", cssStyle);
        }
    });

    useEffect(() => {
        console.log("%cuseEffect[]. componentDidmount only. count=", cssStyle, ++count);
        return () => {
            console.log("%cclean up. useEffect[]. componentWillUnmount", cssStyle);
        }
    }, []);

    useEffect(() => {
        // number가 변경됐을 경우에만 실행
        console.log("%cuseEffect number. count=", cssStyle, ++count);
        document.title = "useEffect. count=" + count;
        return () => {
            console.log("%cuseEffect clean up. number", cssStyle);
        }
    }, [number]);

    useEffect(() => {
        // date가 변경됐을 경우에만 실행
        console.log("%cuseEffect date. count=", cssStyle, ++count);
        document.title = "useEffect. count=" + count;
        return () => {
            console.log("%cuseEffect clean up. date", cssStyle);
        }
    }, [date]);

    useEffect(() => {
        // date가 변경됐을 경우에만 실행
        console.log("%cuseEffect number date. count=", cssStyle, ++count);
        document.title = "useEffect. count=" + count;
        return () => {
            console.log("%cuseEffect clean up. number date", cssStyle);
        }
    }, [number, date]);

    console.log("%crender", cssStyle);
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