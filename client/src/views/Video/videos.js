import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import AdCorner from '../Home/component/adComponent';
import ReactPlayer from 'react-player';
import { Container, Row, Col, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const video = (props) => {
  return (
    <div style={{paddingTop: 90}}>
    <Container className="videos" >
      <Row>
        <Col md="12">
          <Row>
            <Col xs="6" sm="4" style={{ width: "15px", height: "15px" }}><div>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=822dUU3ANkE'
                className='react-player'
                width='100%'
                height='100%'
              />
              <Link to='/'>
                The standard chunk of Lorem Ipsum used
                </Link>
            </div></Col>
            <Col xs="6" sm="4"><ReactPlayer
              url='https://www.youtube.com/watch?v=822dUU3ANkE'
              className='react-player'
              width='100%'
              height='100%'
            />
              <Link to='/'>
                below for those interested. Sections
                </Link>
            </Col>
            <Col sm="4"><ReactPlayer
              url='https://www.youtube.com/watch?v=z6IR_YDQF-I'
              className='react-player'
              width='100%'
              height='100%'
            />
              <Link to='/'>Contrary to popular belief
                </Link>
            </Col>
          </Row>
          <div>
            <br/>
            
            
            <br />
            <Row>
              <Col xs="6" sm="4"><div><ReactPlayer
                url='https://www.youtube.com/watch?v=x7GOnvKQ2WU'
                className='react-player'
                width='100%'
                height='100%'

              />
                <Link to='/'>
                  since the 1500s is reproduced
               </Link>

              </div></Col>

              <Col xs="6" sm="4"><ReactPlayer
                url='https://www.youtube.com/watch?v=T3k2k_G2wNw'
                className='react-player'
                width='100%'
                height='100%'

              />
                <Link to='/'>
                  since the 1500s is reproduced
                </Link>

              </Col>

              <Col sm="4"><ReactPlayer
                url='https://www.youtube.com/watch?v=rnwlWn603g4'
                className='react-player'
                width='100%'
                height='100%'
              />
                <Link to='/'>
                  since the 1500s is reproduced
                </Link>
              </Col>
            </Row>
            {/* <Card>
    
              <div>      
               </div>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
              </CardBody>
              <img width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> 
            </Card>  */}
          </div>
        </Col>
        <Col md="1">
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default video;