import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CategoryCard extends Component {
    render() {
        return (
            <div>
                <div style={{
                    position: "relative"
                }}>
                    <div style={{
                        position: "relative",
                        height: 400,
                        width: 400,
                        top: 40,
                        backgroundColor: "#424242",
                        margin: 5,
                        marginTop: 20
                    }}></div>
                    <div style={{
                        position: "absolute",
                        height: 40,
                        width: 200,
                        top: 20,
                        left: 100,
                        backgroundColor: "#F96332",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <h4 className="text-white lead text-center">{(this.props.category.name).toUpperCase()}</h4>
                    </div>
                    <div style={{
                        position: "absolute",
                        top: 80,
                        padding: 10
                    }}>
                        <ul className="category-link">
                            {
                                this.props.category.articles.map((c, i) => {
                                    return <li key={i}><Link to={"/viewstory/" + c.id}>{c.title}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}