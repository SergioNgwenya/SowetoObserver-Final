import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import {Route} from 'react-router-dom';
import { Header, Sidebar } from '../../components'
import dashboardRoutes from '../../routes/dashboard.jsx';

var ps;
class Dashboard extends React.Component{
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.mainPanel);
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    componentDidUpdate(e) {
      if(e.history.action === "PUSH"){
        this.refs.mainPanel.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }
    }
    
    render(){
        return (
            <div className="wrapper">
                <Sidebar {...this.props} routes={dashboardRoutes}/>
                <div className="main-panel" ref="mainPanel">
                    <Header {...this.props} />
                        {
                            dashboardRoutes.map((prop,key) => {
                              
                                return (
                                    <Route path={prop.path} exact={prop.exact} component={prop.component} key={key}/>
                                );
                            })
                        }
                      
                </div>
            </div>
        );
    }
}
export default Dashboard;
