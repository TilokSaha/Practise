import React, { Component } from 'react'
import Data from './Data';
export default class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
      componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=459c1308caa3498db0759b2738ac912e')
          .then(res => res.json())
          .then(datas => this.setState({data:datas.articles}))
          .catch(err => console.log("ERROR"))
        
      }
    render() {
      console.log(this.state.data)
        return (
            <div>{this.state.data.map( (item) => <Data wo={item.title} img={item.urlToImage} para={item.description} link={item.url}/> )}</div>
        )
    }
}
