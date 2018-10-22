import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SmallNews extends Component {
    render() {
        const { news } = this.props;
        return (
            <div style={{
                display: "flex",
                backgroundColor: "#F4F4F4",
                alignItems: "center",
                width: 400,
                margin: 5
            }}>
                <div style={{
                    height: 150,
                    width: 150,
                    objectFit: "cover"
                }}>
                    <img src={news.picture} alt={news.title} style={{ height: 150 }} />
                </div>
                <div className="category-inverse-link" style={{ height: 150, width: 220, paddingLeft: 10, paddingTop: 10 }}>
                    <h4 style={{ fontSize: "0.8em", textTransform: "uppercase", margin: 0 }} className="lead">{news.category.name}</h4>
                    <Link to={"/viewstory/" + news.id}><h5>{news.title}</h5></Link>
                </div>
            </div>
        )
    }
}