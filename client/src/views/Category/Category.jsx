import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import AdCorner from '../../views/Home/component/adComponent';
import FB_Int from '../../components/Intergration/FB_Int';
import Navs from '../../components/Navs/Navs';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BigNews from "../../components/NewsComp/BigNews";
import { Link } from 'react-router-dom';



class Home extends Component {
  

  render() {
    // console.log(this.props);
    return (
      <div>
        <Navs user={this.props.user} />
        <div style={{paddingTop: 90}}>
        <Container className="CategoryContainer">
          <Row>
            <Col md='9'>
              {this.props.articleCat ?
                <Row>
                  <Jumbotron className="Jumbo" >
                                    
                   <h3 className="lead" style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Nova Flat', fontSize: 35, backgroundcolor: '#3c67ad'  }}>{(this.props.match.params.category)}</h3>
                                    <h3 className="lead" style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Nova Flat', fontSize: 35, }}>{(this.props.match.params.category)}</h3>
                                    {/* <h3 className="lead" style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Nova Flat', fontSize: 35 }}>Hello</h3> */}
                  </Jumbotron>
  
                  {(this.props.articleCat && this.props.articleCat.length > 0) &&
                    this.props.articleCat.map((a, i) => {
                      return (
                        <div  >
                          <Link to={"/viewstory/" + a._id}><BigNews key={i} news={a} /></Link>
                        </div>
                        
                      )
                    })
                  }
                </Row>
                : <div>loading</div>
              }
            </Col>

            <Col md='3'>
              <AdCorner />
              <FB_Int />
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    )
  }
}

function mapStateToProps({  articleCat, articles, category }) {
  return {   articleCat , articles, category }
}

export default connect(mapStateToProps, actions)(Home);



