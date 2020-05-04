import React, { Component } from 'react'
import styled from 'styled-components'

export default class Image extends Component {
    render() {
        return (
            <div>
                <Img src={this.props.img}></Img>
            </div>
        )
    }
}
const Img = styled.img`
    width:75%;
    border-radius:8px;
    border: 1px solid #ddd;
    padding:5px;
`