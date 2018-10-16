import React, { Component } from 'react';

export default class BigNews extends Component {
    render() {
        const { news } = this.props;
        return (
            <div style={{
                background: news.picture ? `url(${news.picture})` : 'red',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: 400,
                width: 400,
                margin: 10
            }}>
                <div style={{
                    height: "inherit",
                    width: "inherut",
                    background: "rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <h2 className="text-white display-4" style={{fontSize: '2.5em'}}>{news.title}</h2>
                </div>
            </div>
        )
    }
}