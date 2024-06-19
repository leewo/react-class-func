import { Component } from "react";

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.initNumber,
            date: (new Date()).toString()
        };
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render() {
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
