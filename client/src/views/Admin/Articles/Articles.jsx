import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import ArticleTable from './ArticleTable';

class Articles extends Component {
    render(){
        return(
            <div>
                <Route path='/admin/articles' exact={true} component={ArticleTable} />
            </div>
        )
    }
}
export default Articles;