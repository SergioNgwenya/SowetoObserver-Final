import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Admin from './layouts/Dashboard/Dashboard';
import * as actions from './actions';
import { connect } from 'react-redux';


//Pages
import Home from './views/Home/Home';
import About from './views/About/About';
import Category from './views/Category/Category';
import Video from './views/Video/videos';
import videos from './views/Video/videos';

// Components
import Footers from './components/Footer/Footers';
import ViewStory from './views/ViewFullStory';
import Navs from './components/Navs/Navs';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchArticles();
        this.props.fetchCategory();
        this.props.fetchVideos();
       
    }

    render() {
        const AdminRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                (this.props.user.role === "admin")
                    ? <Component  {...props} />
                    : <Redirect to='/admin/' />
            )} />
        );
        return (
            <div>

                <Router>
                    <div>    
                        <Navs user={this.props.user} />
                        <Route path="/" exact component={Home} />
                        <Route path="/category/:category" component={Category} />
                        
                        <Route path="/About" component={About} />
                        <Route path="/video" component={Video} />
                        <Route path="/videos" component={videos} />
                        <Route path="/viewstory/:filter" component={ViewStory} />
                        <AdminRoute path="/admin" component={Admin} />
                        <Footers user={this.props.user} />
                    </div>
                </Router>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return {
        user: state.auth,
        articles: state.articles,
        video: state.video,
       
    }
}

export default connect(mapStateToProp, actions)(App);