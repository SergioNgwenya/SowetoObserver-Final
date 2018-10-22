import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import AdCorner from '../Home/component/adComponent';
import ReactPlayer from 'react-player';
import { Container, Row, Col, CardImg } from 'reactstrap';
import { Link} from 'react-router-dom';

const video = (props) => {
  return (
    <Container className="videos" style={{ paddingTop: "50px" }}>
      <Row>
        <Col md="9">
          <Row>
            <Col xs="6" sm="4"><div><ReactPlayer
              url='https://www.youtube.com/watch?v=-brxA11BCIc'
              className='react-player'
              width='100%'
              height='100%'

            />
              <Link to='/'>
              
               </Link>
              
            </div></Col>

            <Col xs="6" sm="4"><ReactPlayer
              url='https://www.youtube.com/watch?v=822dUU3ANkE'
              className='react-player'
              width='100%'
              height='100%'

            />
              <Link to='/'>
                
                </Link>
              
            </Col>

            <Col sm="4"><ReactPlayer
              url='https://www.youtube.com/watch?v=z6IR_YDQF-I'
              className='react-player'
              width='100%'
              height='100%'

            />
              <Link to='/'>
              
                </Link>
             
            </Col>
          </Row>
          <hr></hr>

          <div>
            <Row>
              <Col xs="8">
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=-brxA11BCIc'
                  className='react-player'
                  width='550px'
                  height='400px'

                />

              </Col>
              <Col xs="4">
                <h4 style={{ fontFamily: ' Gill Sans', fontWeight: 'bold' }}>Contrary to popular belief</h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 </p>
                <p><small> 04 october 2018</small></p>

              </Col>
            </Row>
            <hr></hr>
            <br />
            <Row>
              <Col xs="6" sm="4"><div><ReactPlayer
                url='https://www.youtube.com/watch?v=x7GOnvKQ2WU'
                className='react-player'
                width='100%'
                height='100%'

              />
                <Link to='/'>
                 
               </Link>
                
              </div></Col>

              <Col xs="6" sm="4"><ReactPlayer
                url='https://www.youtube.com/watch?v=T3k2k_G2wNw'
                className='react-player'
                width='100%'
                height='100%'

              />
                <Link to='/'>
                
                </Link>
                
              </Col>

          <Col sm="4"><ReactPlayer
                  url='https://www.youtube.com/watch?v=rnwlWn603g4'
                  className='react-player'
                  width='100%'
                  height='100%'
                />
                <Link to='/'>
                 
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
        <Col md="3">
          <AdCorner />
          <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
        </Col>
      </Row> 
      
    </Container>
  );
};

export default video;
