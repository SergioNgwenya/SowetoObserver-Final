import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import AdCorner from '../../views/Home/component/adComponent';
import FB_Int from '../../components/Intergration/FB_Int';
import Navs from '../../components/Navs/Navs';
import { connect } from 'react-redux';
import BigNews from "../../components/NewsComp/BigNews";
import { Link } from 'react-router-dom';

class Home extends Component {



  render() {
    console.log(this.props)

    return (
      <div>
        <Navs user={this.props.user} />
        <Container className="Container">


          <div className="Jumbotron">
            <Jumbotron style={{ textAlign: 'center', height: '60px', marginTop: "70px", paddingTop: "40px" }} >
              <h3 className="lead">{(this.props.match.params.category).toUpperCase()}</h3>
            </Jumbotron>
          </div>
          <Row>

            <Col md='9'>
  
              {(this.props.articles && this.props.articles.length > 0) &&
                <div className="row">
                  {this.props.articles ? <div>
                    {
                      this.props.articles.map((a, i) => {
                        return (
                          <Link to={"/viewstory/" + a._id}><BigNews news={a} /></Link>
                        )
                      })
                    }
                  </div>
                    :

                    <div>loading</div>
                  }

                  {/* <BigNews news={this.props.articles[1]} /> */}
                </div>}

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



