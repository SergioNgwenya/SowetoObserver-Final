import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import renderHTML from 'react-render-html';
import AdCorner from './Home/component/adComponent';
import * as actions from '../actions';
import { connect } from 'react-redux';
import loading from '../../src/images/loader.gif';
import ButtonExampleInverted from '../components/button/buttonBack';
import Moment from 'react-moment';
//import Navs from '../components/Navs/Navs'//
//import * as FontAwesome from 'react-icons/lib/fa'
class ViewStory extends React.Component {
    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.filter);
        // this.props._fetchArticle();
    }
    render() {
        const { article } = this.props;
        return (
            <div style={{ paddingTop: 90 }}>

                <Container className="viewFullContainer" >
                    <Row>
                        <Col xs="9">
                            {article ?
                                <Row>

                                    <CardText style={{ paddingLeft: 20, paddingTop: 10 }}><h2>{article.title}</h2></CardText>
                                    <br/>
                                
                                    <CardImg style={{ paddingLeft: 20, paddingRight: 20, height: 400 }} top src={article.picture} alt="image" />
                                    <Row>
                                    
                                    
                                        <Col><span style={{float: 'right'}} id="float-left"><i class="fa fa-clock"></i><Moment format="DD MMM YYYY HH:mm a">{article.createdAt}</Moment></span></Col>

                                    </Row>
                                    <CardBody>
                                        {renderHTML(article.body)}
                                    </CardBody>
                                    <div class ="wrapper">
                                <div class = "btn1">
                                <button type="button"><a href="javascript:history.go(-1)"onMouseOver="self.status.reffer;return true" style={{textDecoration:'none'}}>Back </a></button>
                                </div>
                            
                            </div>
                                </Row>
                                
                                :
                                <img src={loading} alt="loading" style={{ paddingLeft: '50%', height: 80, width: 'auto' }} />
                            }
                            
                        </Col>
                        <Col xs="3">
                            <AdCorner />
                            <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
                           
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        articles: state.articles.allarticles,
        article: state.article,
        categores: state.category
    }
}

export default connect(mapStateToProps, actions)(ViewStory);






