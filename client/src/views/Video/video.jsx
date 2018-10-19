import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle,CardImgOverlay } from 'reactstrap';
import AdCorner from '../Home/component/adComponent';
import ReactPlayer from 'react-player';
import { Container, Row, Col, CardImg } from 'reactstrap';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';

const video = (props) => {
const {videos } = props;
  return (
    <Container className="videos" style={{ paddingTop: "50px" }}>
      <Row>
        <Col md="9">
        <Row>
          <Col xs="6" sm="4">
          <div>
          {videos ?
          videos.map((div, ind) => {
            return (
            <ReactPlayer
                  url={div.picture}
                 
                  classme='react-player'
                  width='100%'
                  height='100%'
                  
                
                /> 
                
              )
            })
            : <div>loading</div>
          }
                </div></Col>

          <Col xs="6" sm="4"><div></div></Col>

          <Col sm="4"><div></div></Col>
        </Row>
        </Col>
        <Col md="3">
          <AdCorner />
          <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
        </Col>
      </Row> 
      
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    videos: state.videos,
  }
}

export default connect(mapStateToProps)(video);

// import React from 'react';
// import { Container, Row, Col, CardImg } from 'reactstrap';
// import AdCorner from '../Home/adComponent';
// import { Media } from 'reactstrap';
// import ReactPlayer from 'react-player';


// class video extends React.Component {
//   render() {
//     return (
//       <Container style={{paddingTop: 100}}>
//         <Row>
//           <Col md="9">
//            <Media className='Media_card'>
//             <Media heading left href="#"> 

//               <div>
//                    <ReactPlayer
//           url='https://www.youtube.com/watch?v=rnwlWn603g4'
//           className='react-player'
//           width='100%'
//           height='100%'
//         />
//         </div>
//                    <CardImg className='CardImg' top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//               </Media>
//               <Media body className='Media_body'>
//                <Media heading>
//                Title
//                </Media>
//                 <i>Author</i>
//                  <br/>
//                 <i>Date</i>
//                  <br/>
//                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .
//               </Media>
//              </Media>
//             </Col>
//           <Col md="3">
//           <AdCorner/>
//          <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default video;


        {/* <div>
          <Row>
            <Col xs="6" sm="4">
            {articles ?
          articles.map((art, ind) => {
            return (
              <div>
              <Card>
              <CardImg width="100%" height="143px" src={art.picture} alt="Local soccer" />
                <CardImgOverlay>
                    <CardTitle>{art.title}</CardTitle>
                </CardImgOverlay>
                  
                </Card>
              </div>
            )
          })
          : <div>loading</div>
        }
            </Col>
            </Row>
          </div> */}
        {/* <hr></hr>
       
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
          <h4 style={{fontFamily: ' Gill Sans', fontWeight: 'bold'}}>Contrary to popular belief</h4>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 </p>
          <p><small> 04 october 2018</small></p>
          
          </Col>
        </Row>
        <hr></hr> */}
        {/* <br/>
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
                <p> <small>4 oct</small></p>
                </Col>
        </Row>
           */}
          
          

             {/* <Card>
              
              <div>
                
               </div>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
              </CardBody>
              <img width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> 
            </Card>  */}

           {/* </div>  */}
        


// import { Player } from 'video-react';





// import React from 'react';
// import { Card, CardBody, CardTitle, CardSubtitle,CardText } from 'reactstrap';
// import AdCorner from '../Home/component/adComponent';
// import ReactPlayer from 'react-player';
// import { Container, Row, Col, CardImg } from 'reactstrap';
// import { Link} from 'react-router-dom';

// const video = (props) => {
//   return (
//     <Container className="videos" style={{ paddingTop: "50px" }}>
//       <Row>
//         <Col md="9">
//           <Row>
//             <Col xs="6" sm="4" style ={{ width:"15px", height:"15px"}}><div>
//             <ReactPlayer
//               url='https://www.youtube.com/watch?v=822dUU3ANkE'
//               className='react-player'
//               width='100%'
//               height='100%'

//             />
//               <Link to='/'>
//               The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
//                 </Link>
        
//             </div></Col>

//             <Col xs="6" sm="4"><ReactPlayer
//               url='https://www.youtube.com/watch?v=822dUU3ANkE'
//               className='react-player'
//               width='100%'
//               height='100%'

//             />
//               <Link to='/'>
                
//                 </Link>
              
//             </Col>

//             <Col sm="4"><ReactPlayer
//               url='https://www.youtube.com/watch?v=z6IR_YDQF-I'
//               className='react-player'
//               width='100%'
//               height='100%'

//             />
//               <Link to='/'>Contrary to popular belief
              
//                 </Link>
             
//             </Col>
//           </Row>
//           <hr></hr>

//           <div>
            
//             <hr></hr>
//             <br />
//             <Row>
//               <Col xs="6" sm="4"><div><ReactPlayer
//                 url='https://www.youtube.com/watch?v=x7GOnvKQ2WU'
//                 className='react-player'
//                 width='100%'
//                 height='100%'

//               />
//                 <Link to='/'>
                 
//                </Link>
                
//               </div></Col>

//               <Col xs="6" sm="4"><ReactPlayer
//                 url='https://www.youtube.com/watch?v=T3k2k_G2wNw'
//                 className='react-player'
//                 width='100%'
//                 height='100%'

//               />
//                 <Link to='/'>
                
//                 </Link>
                
//               </Col>

//           <Col sm="4"><ReactPlayer
//                   url='https://www.youtube.com/watch?v=rnwlWn603g4'
//                   className='react-player'
//                   width='100%'
//                   height='100%'
//                 />
//                 <Link to='/'>
                 
//                 </Link>
              
//               </Col>
//             </Row>




//             {/* <Card>
              
//               <div>
                
//                </div>
//               <CardBody>
//                 <CardTitle>Card title</CardTitle>
//                 <CardSubtitle>Card subtitle</CardSubtitle>
//               </CardBody>
//               <img width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> 
//             </Card>  */}

//            </div> 
//         </Col>
//         <Col md="3">
//           <AdCorner />
//           <div class="fb-page" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Soweto-Observer-337066023393491/?ref=br_rs">Soweto Observer</a></blockquote></div>
//         </Col>
//       </Row> 
      
//     </Container>
//   );
// };

// export default video;
