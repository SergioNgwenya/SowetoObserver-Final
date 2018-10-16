import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import CategoryTable from './CategoryTable';

class Articles extends Component {
    render(){
        return(
            <div>
                <Route path='/admin/category/' exact={true} component={CategoryTable} />
            </div>
        )
    }
}
export default Articles;