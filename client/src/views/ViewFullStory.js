import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import renderHTML from 'react-render-html';
import AdCorner from './Home/component/adComponent';
import * as actions from '../actions';
import { connect } from 'react-redux';
import loading from '../../src/images/loader.gif';
import Moment from 'react-moment';
// import Moment from 'react-moment';
//import * as FontAwesome from 'react-icons/lib/fa'
class ViewStory extends React.Component {
    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.filter);
        // this.props._fetchArticle();
    }
    render() {
        const { article } = this.props;
        return (
            <Container>
                <Row>
                    <Col md={9}>
                    </Col>
                    <Col md={3}>
                    </Col>
                </Row>

                <hr />
                <Row>
                    <Col xs="9">
                        {article ? <Row>
                            <Card>
                                                    <CardImg top src={article.picture} alt="Card image cap" /> 
                                                    <CardText><h2>{article.title}</h2></CardText>
                                                    <div class="container">
                                                            <Row>
                                                                <Col><span className="float-right"><i class="fa fa-clock"></i><Moment  format="DD MMM YYYY HH:mm a">{article.createdAt}</Moment></span></Col>
                                                             </Row>
                                                            
                                                        </div>
                                                    <CardBody>
                                                        {renderHTML(article.body)}
                                                    </CardBody>
                                                </Card>

                        </Row>
                            :
                            <img src={loading} alt="loading" style={{ paddingLeft: '35%', height: 200, width: 'auto' }} />
                        }
                        <Row>
                            <Col md={12}></Col>
                        </Row>
                    </Col>
                    <Col xs="3">
                        <AdCorner />
                        <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
                    </Col>
                </Row>
            </Container>
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






