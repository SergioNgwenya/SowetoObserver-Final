import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import AdvertTable from './AdvertTable';

class Article extends Component {
    render(){
        return(
            <div>
                <Route path='/admin/Advert/' exact={true} component={AdvertTable} />
            </div>
        )
    }
}
export default Article;