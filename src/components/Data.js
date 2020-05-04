import React, { Component } from 'react'
import Image from './Image'
import styled from 'styled-components'
export default class Data extends Component {
    render() {
        return (
            <Div>
                <h3>{this.props.wo}</h3>
                <a href={this.link}><Image img={this.props.img} alt="pic"></Image></a>
                <p>{this.props.para}</p>
            </Div>
        )
    }
}
const Div = styled.div`
    padding:10px 30px;
`