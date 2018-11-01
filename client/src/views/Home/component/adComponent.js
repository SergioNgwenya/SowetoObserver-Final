import React, { Component } from 'react';
import {
    Card, CardBody, CardImg, CardTitle, CardText, CardLink
} from 'reactstrap';
import { } from '../../../components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class AdCorner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { adverts } = this.props;
        console.log('advert', adverts)

        return (
            <div className="adCard">

                {adverts ? <div>
                    {

                        adverts.map((advert) => {
                            return (
                <Card style={{ height: '400', width: '100%' }}>
               <a href={advert.url} className="nav-link"><CardImg src={advert.picture} alt="Ads" /></a>
                </Card>


                            )
                        })

                    }

                </div>



                    :

                    <div>loading.....</div>

                }

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {


        adverts: state.adverts
    }
}

export default connect(mapStateToProps)(AdCorner);