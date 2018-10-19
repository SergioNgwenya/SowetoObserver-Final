import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Admin from './layouts/Dashboard/Dashboard';
import * as actions from './actions';
import { connect } from 'react-redux';
import Navs from './components/Navs/Navs';

//Pages
import Home from './views/Home/Home';
import About from './views/About/About';
import Category from './views/Category/Category';
import video from './views/Video/video';

// Components
import Footers from './components/Footer/Footers';
import ViewStory from './views/ViewFullStory';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchArticles();
        this.props.fetchCategory();
       
    }

    render() {
        console.log("articles", this.props.article)
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
                        {/* <Navbar1 user={this.props.user} /> */}
                        <Route path="/" exact component={Home} />
                        <Route path="/category/:category" component={Category} />
                        
                        <Route path="/About" component={About} />
                        <Route path="/viewstory/:filter" component={ViewStory} />
<<<<<<< HEAD
                        <Route path="/video" component={video} />

=======
>>>>>>> 082db541a1b2665284a0360fc962387728a3e41b
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
       
    }
}

export default connect(mapStateToProp, actions)(App);