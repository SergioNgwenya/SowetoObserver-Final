import React, { Component } from 'react';
import { Player } from 'video-react';
import { connect } from 'react-redux';


 class PlayerExample extends Component {
 
  render() {
    const { videos } = this.props;
        console.log('VID', videos)
    return (
      <div>
      {videos ? <div>
        {

videos.map((advert) => {
                return (
                 
      <Player height={10}>
       <h1>Latest videos</h1>
      <source src={advert.video} />
        </Player>
                

                )
            })

        }

    </div>



        :

        <div>loading.....</div>

    }


     

 
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {


    videos: state.videos
  }
}

export default connect(mapStateToProps)(PlayerExample);