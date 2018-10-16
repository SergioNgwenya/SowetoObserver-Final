import React, {Component} from 'react';

export default class SmallNews extends Component{
    render(){
        const {news} = this.props;
        return (
            <div style={{
                display: "flex",
                backgroundColor: "#F4F4F4"
            }}>
                <img src={news.picture} />
                <div>
                    <h4 style={{fontSize: "0.8em", textTransform: "uppercase"}} className="lead">Category</h4>
                    <h5>{news.title}</h5>
                </div>
            </div>
        )
    }
}