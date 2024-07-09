import { Component } from "react";

const cssStyle = 'color:red';

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.initNumber,
            date: (new Date()).toString()
        };
    }

    componentWillMount(){
        console.log("%cClass componentWillMount", cssStyle);
    }

    componentDidMount(){
        console.log("%cClass componentDidMount", cssStyle);
    }

    componentWillUnmount(){
        console.log("%cClass componentWillUnmount!!", cssStyle);
    }

    shouldComponentUpdate(){
        console.log("%cClass shouldComponentUpdate", cssStyle);
        return true;
    }

    componentWillUpdate(){
        console.log("%cClass componentWillUpdate", cssStyle);
    }

    componentDidUpdate(){
        console.log("%cClass componentDidUpdate", cssStyle);
    }

    render() {
        console.log("%crender", cssStyle);
        return (
            <div className="container">
                <h2>class style component</h2>
                <p>Number : {this.state.number}</p>
                <input type="button" value="random" onClick={
                    () => {
                        this.setState({ number: Math.random() })
                    }
                }></input>
                <p>Date : {this.state.date}</p>
                <input type="button" value="now" onClick={
                    () => {
                        this.setState({ date: (new Date()).toString() })
                    }
                }></input>
            </div>
        );
    }
}

export default ClassComp;
