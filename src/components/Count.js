import React, { Component } from 'react'
import styled from 'styled-components'
const Div = styled.div`
    padding: 10px 10px;
    background-color:pink;
    font-size:2.5rem;
    width:300px;
    position:relative;
    left:50%;
    transform:translate(-50%,0);
    margin: 10px 0 10px 0;
`

export default class Count extends Component {
    
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
      }
    
      tick() {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    
    render() {
        return (
            <Div>
                Seconds: {this.state.seconds}
            </Div>
        )
    }
}
