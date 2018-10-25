import React from 'react';
import Child from './child'

export default class Life extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    handleClick(){
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        let style = {
            padding:10
        }
        return <div style={style}>
            <p>生命周期测试</p>
            <button onClick={this.handleAdd}>点击下一步</button>
            <button onClick={this.handleClick.bind(this)}>点击下一步</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}



