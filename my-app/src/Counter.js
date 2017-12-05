import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            'count': 0
        };
    }
    increment = () => {
        this.setState({'count': this.state.count + 1});
    }

    render() {
        var currentColor = 'blue';
        if(this.state.count % 2 === 0){
            currentColor = 'red'
        }
        return(
            <div onClick = {this.increment} style = {{'backgroundColor':currentColor}}>
                {this.props.name} : {this.state.count}
            </div>
        )
    }

}

export default Counter;