import React, { Component } from 'react';
import {
    Card, CardBody, CardImg, CardTitle, CardText, CardLink
} from 'reactstrap';
import {} from '../../../components';
import { Link } from 'react-router-dom';
class AdCorner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className = "adCard">
                <h3 className="lead"></h3>
                <a href="https://www.jetonline.co.za/" target="blank">
                    <Card style={{height: '400', width: '100%'}}>
                        <CardImg  src="https://www.jetonline.co.za/media/wysiwyg/Low_res_Cover_OctNov_Trevor_Noah2.jpg" alt="Ads" />
                    </Card>

                </a>
            </div>
        );
    }
}
export default AdCorner;