import React, { Component } from 'react';
import { Row, Col, Container, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import AdCorner from './component/adComponent';
import TopHead from './component/carouselComponent';
import FB_Int from '../../components/Intergration/FB_Int';
import Headlines from '../../components/Headline/Headlines';
import { connect } from 'react-redux';
import BigNews from "../../components/NewsComp/BigNews";
import { Link } from 'react-router-dom';

const styles = {
  listStyle: 'none',
  columns: 2,
}
class Home extends Component {
  render() {
   
    var mainArticles = [];
    for (var i = 0;  i < 6; i++){
      
      mainArticles.push(this.props.articles[i]);
      
    }
    console.log("mainArt",mainArticles)
    return (

      <div style={{paddingTop: 90}}>
        <Container className="Container">
          <Row>
            <Col md='9'>
              {/* <h3 style={{fontSize: '30px',  fontWeight: 'bold', color: "#D32F2F"}}>BREAKING NEWS</h3> */}
              <TopHead />
              <hr />
              <h3 style={{fontSize: '30px', fontFamily: 'Nova Flat', fontWeight: 'bold', color: "#D50000" }}>TOP STORIES</h3>
              {mainArticles ?
                (<Row>
                  { (this.props.articles && this.props.articles.length > 0) &&
                    mainArticles.map((a) => {
                      return (
                        <div key={i} >
                          <Link to={"/viewstory/" + a._id}><BigNews news={a} /></Link>
                        </div>
                      )
                    })
                  }
                </Row>)
                : <div>loading</div>
              }
              <hr />
              <h3 style={{fontSize: '30px', fontFamily: 'Nova Flat', fontWeight: 'bold', color: "#D32F2F"}}>HEADLINES</h3>
              <Headlines />
            </Col>
            <Col md='3'>
              <AdCorner />
              <FB_Int />
           
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
function mapStateToProps({ auth, articles,category }) {
  return { user: auth, articles,category }
}
export default connect(mapStateToProps)(Home);

