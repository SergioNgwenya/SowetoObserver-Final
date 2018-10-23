import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import VideoTable from './VideoTable';
import AddVideo from './AddVideo';

class Videos extends Component {
    render(){
        return(
            <div>
                <Route path='/admin/videos' exact={true} component={VideoTable} />
                <Route path='/admin/videos/AddVideo'  component={AddVideo} />
            </div>
        )
    }
}
export default Videos;
// import React,{Component} from 'react';
// import {Route} from 'react-router-dom';
// import VideoTable from './VideoTable';
// import AddVideo from './AddVideo';

// class Articles extends Component {
//     render(){
//         return(
//             <div>
//                 <Route path='/admin/videos' exact={true} component={VideoTable} />
//                 <Route path='/admin/videos/addvideos'  component={AddVideo} />
//             </div>
//         )
//     }
// }
// export default Articles;