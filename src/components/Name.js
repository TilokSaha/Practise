import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
    padding: 10px 10px;
    background-color:cyan;
    font-size:2.5rem;
    width:300px;
    position:relative;
    left:50%;
    transform:translate(-50%,0);
    margin: 10px 0 10px 0;
`

export default class name extends Component {
    render() {
        return (
            <Div>
                hello {this.props.name}!
            </Div>
        )
    }
}
