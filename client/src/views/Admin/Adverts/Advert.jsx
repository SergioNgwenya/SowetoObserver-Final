import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import AdvertTable from './AdvertTable';

class Articles extends Component {
    render(){
        return(
            <div>
                <Route path='/admin/ads/' exact={true} component={AdvertTable} />
            </div>
        )
    }
}
export default Articles;