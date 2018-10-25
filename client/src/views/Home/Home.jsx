import React, { Component } from 'react';
import { Row, Col, Container, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import AdCorner from './component/adComponent';
import TopHead from './component/carouselComponent';
import FB_Int from '../../components/Intergration/FB_Int';
import SingleCard from '../../components/Cards/SimpleCards';
import MoreCards from '../../components/Cards/MoreCards';
import Headlines from '../../components/Headline/Headlines';
import Navs from '../../components/Navs/Navs';
import { connect } from 'react-redux';
import BigNews from "../../components/NewsComp/BigNews";
import SmallNews from '../../components/NewsComp/SmallNews';
import { Link } from 'react-router-dom';


const styles = {
  listStyle: 'none',
  columns: 2,
}
class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Container className="Container">
          <Row>
            <Col md='9'>
              {/* <h3 style={{fontSize: '30px',  fontWeight: 'bold', color: "#D32F2F"}}>BREAKING NEWS</h3> */}
              <TopHead />
              <hr />
              <h3 style={{fontSize: '30px', fontFamily: 'Nova Flat', fontWeight: 'bold', color: "#D50000" }}>TOP STORIES</h3>
              {this.props.articles ?
                <Row>
                  {(this.props.articles && this.props.articles.length > 0) &&
                    this.props.articles.map((a) => {
                      return (
                        <div  >
                          <Link to={"/viewstory/" + a._id}><BigNews news={a} /></Link>
                        </div>
                      )
                    })
                  }
                </Row>
                : <div>loading</div>
              }
              <hr />
              <h3 style={{fontSize: '30px', fontFamily: 'Nova Flat', fontWeight: 'bold', color: "#D32F2F"}}>HEADLINES</h3>
              <Headlines />
            </Col>
            <Col md='3'>
              <AdCorner />
              <FB_Int />
              <AdCorner />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
function mapStateToProps({ auth, articles }) {
  return { user: auth, articles }
}
export default connect(mapStateToProps)(Home);

