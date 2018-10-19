import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import AdCorner from '../../views/Home/component/adComponent';
import FB_Int from '../../components/Intergration/FB_Int';
import Navs from '../../components/Navs/Navs';
import { connect } from 'react-redux';
import BigNews from "../../components/NewsComp/BigNews";
import { Link } from 'react-router-dom';
import { url} from 'react-url'
import { connectURL } from 'react-url';
import Background from 'react';

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Navs user={this.props.user} />
        <Jumbotron className="Jumbo" >
          <h3 className="lead" style={{ textAlign: 'center', fontWeight: 'bold'}}>{(this.props.match.params.category).toUpperCase()}</h3>
        </Jumbotron>
        <Container className="CategoryContainer">
          <Row>
            <Col md='9'>
              {this.props.articles ?
                <Row>
                  {(this.props.articles && this.props.articles.length > 0) &&
                    this.props.articles.map((a, i) => {
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



